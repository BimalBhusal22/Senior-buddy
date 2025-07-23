import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const ViewMentorRequests = () => {
  const [mentorRequests, setMentorRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        console.log(data.data);
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
    try {
      // Replace the URL below with your real backend endpoint
      const response = await fetch(
        "http://localhost:7000/api/v1/admin/add_mentor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mentorRequests),
        }
      );

      if (response.ok) {
        alert("Mentor approved successfully!");
        // Optionally remove the approved mentor from the list
        setMentorRequests((prev) =>
          prev.filter((m) => m.mentorEmail !== mentorData.mentorEmail)
        );
      } else {
        alert("Failed to approve mentor.");
      }
    } catch (error) {
      console.error("Error approving mentor:", error);
      alert("An error occurred.");
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
                >
                  Approve
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
