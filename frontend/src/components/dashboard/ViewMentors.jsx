import React, { useEffect, useState } from "react";

const ViewMentors = () => {
  // const mentors = [
  //   {
  //     mentorImage: "images/mentors/senior1.png",
  //     mentorName: "Jivan",
  //     mentorGender: "M",
  //     mentorFaculty: "BSc. CSIT",
  //     mentorPhoneNo: "9111111111",
  //     mentorFbProfileLink: "https://www.facebook.com/jivan.gaire.79",
  //     mentorEmail: "jivangaire@gmail.com",
  //     collegeImage: "images/colleges/ButwalMultiple.jpg",
  //     collegeName: "Butwal Multiple Campus",
  //     collegeDistrict: "Rupandehi",
  //     collegeLevels: ["bachelor", "master"],
  //     collegeFaculties: ["BSc CSIT", "BBA", "BSc", "BBS", "more"],
  //     collegeWebsiteLink: "https://bumc.tu.edu.np/",
  //   },
  //   {
  //     mentorImage: "images/mentors/senior1.png",
  //     mentorName: "Jivan",
  //     mentorGender: "M",
  //     mentorFaculty: "BSc. CSIT",
  //     mentorPhoneNo: "9111111111",
  //     mentorFbProfileLink: "https://www.facebook.com/jivan.gaire.79",
  //     mentorEmail: "jivangaire@gmail.com",
  //     collegeImage: "images/colleges/ButwalMultiple.jpg",
  //     collegeName: "Butwal Multiple Campus",
  //     collegeDistrict: "Rupandehi",
  //     collegeLevels: ["bachelor", "master"],
  //     collegeFaculties: ["BSc CSIT", "BBA", "BSc", "BBS", "more"],
  //     collegeWebsiteLink: "https://bumc.tu.edu.np/",
  //   },
  //   {
  //     mentorImage:
  //       "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",
  //     mentorName: "Jivan",
  //     mentorGender: "M",
  //     mentorFaculty: "BSc. CSIT",
  //     mentorPhoneNo: "9111111111",
  //     mentorFbProfileLink: "https://www.facebook.com/jivan.gaire.79",
  //     mentorEmail: "jivangaire@gmail.com",
  //     collegeImage: "images/colleges/ButwalMultiple.jpg",
  //     collegeName: "Butwal Multiple Campus",
  //     collegeDistrict: "Rupandehi",
  //     collegeLevels: ["bachelor", "master"],
  //     collegeFaculties: ["BSc CSIT", "BBA", "BSc", "BBS", "more"],
  //     collegeWebsiteLink: "https://bumc.tu.edu.np/",
  //   },
  // ];

  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with actual API call
        const response = await fetch(
          "http://localhost:7000/api/v1/admin/get_all_mentors"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        console.log(data.data);
        setMentors(data.data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // if (mentors.length === 0) {
  //   return (
  //     <div className="text-center mt-5 text-muted">
  //       Loading mentor details...
  //     </div>
  //   );
  // }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Mentors List</h2>
      <div className="table-responsive shadow-sm rounded">
        <table className="table table-bordered table-hover align-middle bg-white text-center">
          <thead style={{ backgroundColor: "aqua", color: "red" }}>
            <tr>
              <th>Mentor Image</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Faculty</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Facebook</th>
              <th>College Image</th>
              <th>College Name</th>
              <th>District</th>
              <th>Levels</th>
              <th>Faculties</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {mentors.map((mentor, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={mentor.mentorImage}
                    alt={mentor.mentorName}
                    className="rounded-circle"
                    style={{
                      height: "60px",
                      width: "60px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>{mentor.mentorName}</td>
                <td>{mentor.mentorGender === "M" ? "Male" : "Female"}</td>
                <td>{mentor.mentorFaculty}</td>
                <td>{mentor.mentorPhoneNo}</td>
                <td>{mentor.mentorEmail}</td>
                <td>
                  <a
                    href={mentor.mentorFbProfileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Profile
                  </a>
                </td>
                <td>
                  <img
                    src={mentor.collegeImage}
                    alt={mentor.collegeName}
                    className="img-thumbnail"
                    style={{
                      height: "60px",
                      width: "100px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>{mentor.collegeName}</td>
                <td>{mentor.collegeDistrict}</td>
                <td>{mentor.collegeLevels.join(", ")}</td>
                <td>{mentor.collegeFaculties.join(", ")}</td>
                <td>
                  <a
                    href={mentor.collegeWebsiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewMentors;
