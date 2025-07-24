import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const ViewMentorRequests = () => {
  const [mentorRequests, setMentorRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [approvingMentorId, setApprovingMentorId] = useState(null); // New state for tracking approval loading

  //  fetch data from backend
  useEffect(() => {
    const fetchMentorRequests = async () => {
      try {
        // Replace with actual API call
        const response = await fetch(
          "http://localhost:7000/api/v1/become_a_mentor/get_all_mentor_requests"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        // console.log(data.data);
        setMentorRequests(data.data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMentorRequests();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleApprove = async (mentorData) => {
    setApprovingMentorId(mentorData._id); // Set loading state for this specific mentor

    console.log(mentorData._id);
    console.log(mentorData);
    let mentorImageUrl = "";
    let collegeImageUrl = "";

    if (mentorData.mentorImage && mentorData.mentorImage.size > 0) {
      mentorImageUrl = URL.createObjectURL(mentorData.mentorImage);
    }

    if (mentorData.collegeImage && mentorData.collegeImage.size > 0) {
      collegeImageUrl = URL.createObjectURL(mentorData.collegeImage);
    }

    const formDataToSend = new FormData();

    // Append all fields
    formDataToSend.append("mentorName", mentorData.mentorName);
    formDataToSend.append("mentorFaculty", mentorData.mentorFaculty);
    formDataToSend.append("mentorPhoneNo", mentorData.mentorPhoneNo);
    formDataToSend.append("mentorEmail", mentorData.mentorEmail);
    formDataToSend.append("mentorGender", mentorData.mentorGender);
    formDataToSend.append(
      "mentorFbProfileLink",
      mentorData.mentorFbProfileLink
    );
    formDataToSend.append("collegeName", mentorData.collegeName);
    formDataToSend.append("collegeDistrict", mentorData.collegeDistrict);
    formDataToSend.append("collegeWebsiteLink", mentorData.collegeWebsiteLink);

    // Array fields (append one by one)
    mentorData.collegeLevels.forEach((level) =>
      formDataToSend.append("collegeLevels", level)
    );
    mentorData.collegeFaculties.forEach((faculty) =>
      formDataToSend.append("collegeFaculties", faculty)
    );

    // // Append images (actual files)
    // formDataToSend.append("mentorImage", mentorData.mentorImage);
    // formDataToSend.append("collegeImage", mentorData.collegeImage);

    // Handle images - Check if they are File objects or URLs
    if (mentorData.mentorImage) {
      if (mentorData.mentorImage instanceof File) {
        // It's a File object, append directly
        formDataToSend.append("mentorImage", mentorData.mentorImage);
      } else if (typeof mentorData.mentorImage === "string") {
        // It's a URL, we need to fetch it and convert to File/Blob
        try {
          const imageResponse = await fetch(mentorData.mentorImage);
          const imageBlob = await imageResponse.blob();
          formDataToSend.append("mentorImage", imageBlob, "mentor-image.jpg");
        } catch (imgError) {
          console.error("Error fetching mentor image:", imgError);
          // Fallback: send the URL as text
          formDataToSend.append("mentorImageUrl", mentorData.mentorImage);
        }
      }
    }

    if (mentorData.collegeImage) {
      if (mentorData.collegeImage instanceof File) {
        // It's a File object, append directly
        formDataToSend.append("collegeImage", mentorData.collegeImage);
      } else if (typeof mentorData.collegeImage === "string") {
        // It's a URL, we need to fetch it and convert to File/Blob
        try {
          const imageResponse = await fetch(mentorData.collegeImage);
          const imageBlob = await imageResponse.blob();
          formDataToSend.append("collegeImage", imageBlob, "college-image.jpg");
        } catch (imgError) {
          console.error("Error fetching college image:", imgError);
          // Fallback: send the URL as text
          formDataToSend.append("collegeImageUrl", mentorData.collegeImage);
        }
      }
    }

    // console.log(formDataToSend);
    // console.log("FormData contents:");
    // for (let [key, value] of formDataToSend.entries()) {
    //   console.log(key, value);
    // }

    try {
      // Replace the URL below with your real backend endpoint

      const response = await fetch(
        "http://localhost:7000/api/v1/admin/add_mentor",
        {
          method: "POST",

          body: formDataToSend,
        }
      );

      // Better error handling
      if (response.ok) {
        const result = await response.json();
        console.log("Success response:", result);
        alert("Mentor approved successfully!");

        // Remove the approved mentor from the list
        setMentorRequests((prev) =>
          prev.filter((m) => m.mentorEmail !== mentorData.mentorEmail)
        );
      } else {
        const errorText = await response.text();
        console.error(
          "Server responded with error:",
          response.status,
          errorText
        );
        alert(`Failed to approve mentor. Server error: ${response.status}`);
      }
    } catch (error) {
      console.error("Error approving mentor:", error);
      alert(`An error occurred: ${error.message}`);
    }

    try {
      const response = await fetch(
        "http://localhost:7000/api/v1/become_a_mentor/delete_become_a_mentor_request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id: mentorData._id }),
        }
      );
      if (response.ok) {
        console.error("mentor request deleted successfully.");
      } else {
        console.error("Failed to delete mentor request.");
      }
    } catch (error) {
      console.error("error occured during deletion of mentor request.");
      console.log(error);
    } finally {
      setApprovingMentorId(null); // Clear loading state when done
    }
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Mentor Requests</h2>
      <div className="row">
        {mentorRequests.map((mentor, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={mentor.mentorImage}
                    alt={mentor.mentorName}
                    className="rounded-circle me-3"
                    width="70"
                    height="70"
                  />
                  <div>
                    <h5 className="mb-0">{mentor.mentorName}</h5>
                    <small className="text-muted">{mentor.mentorFaculty}</small>
                  </div>
                </div>
                <p>
                  <strong>Gender:</strong> {mentor.mentorGender}
                </p>
                <p>
                  <strong>Phone:</strong> {mentor.mentorPhoneNo}
                </p>
                <p>
                  <strong>Email:</strong> {mentor.mentorEmail}
                </p>
                <p>
                  <strong>Facebook:</strong>{" "}
                  <a
                    href={mentor.mentorFbProfileLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Profile
                  </a>
                </p>
                <hr />
                <div className="d-flex align-items-center mb-2">
                  <img
                    src={mentor.collegeImage}
                    alt={mentor.collegeName}
                    width="60"
                    height="60"
                    className="rounded me-2"
                  />
                  <div>
                    <strong>{mentor.collegeName}</strong>
                    <p className="mb-0">
                      {mentor.collegeDistrict} |{" "}
                      <a
                        href={mentor.collegeWebsiteLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Website
                      </a>
                    </p>
                  </div>
                </div>
                <p>
                  <strong>Levels:</strong> {mentor.collegeLevels.join(", ")}
                </p>
                <p>
                  <strong>Faculties:</strong>{" "}
                  {mentor.collegeFaculties.join(", ")}
                </p>
              </div>
              <div className="card-footer bg-transparent text-end">
                <button
                  className="btn btn-success"
                  onClick={() => handleApprove(mentor)}
                  disabled={approvingMentorId === mentor._id}
                >
                  {approvingMentorId === mentor._id ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Approving...
                    </>
                  ) : (
                    "Approve"
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
        {mentorRequests.length === 0 && (
          <div className="text-center text-muted">
            No mentor requests found.
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewMentorRequests;
