import React, { useEffect, useState } from "react";

const ViewMentors = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating API call with sample data for demo
        setTimeout(() => {
          const sampleData = [
            {
              _id: "507f1f77bcf86cd799439011",
              mentorName: "Jivan Gaire",
              mentorGender: "M",
              mentorFaculty: "BSc. CSIT",
              mentorPhoneNo: "9111111111",
              mentorFbProfileLink: "https://www.facebook.com/jivan.gaire.79",
              mentorEmail: "jivangaire@gmail.com",
              collegeName: "Butwal Multiple Campus",
              collegeDistrict: "Rupandehi",
            },
            {
              _id: "507f1f77bcf86cd799439012",
              mentorName: "Sita Sharma",
              mentorGender: "F",
              mentorFaculty: "BBA",
              mentorPhoneNo: "9222222222",
              mentorFbProfileLink: "https://www.facebook.com/sita.sharma",
              mentorEmail: "sita.sharma@gmail.com",
              collegeName: "Kathmandu University",
              collegeDistrict: "Kavre",
            },
            {
              _id: "507f1f77bcf86cd799439013",
              mentorName: "Ram Prasad",
              mentorGender: "M",
              mentorFaculty: "BSc",
              mentorPhoneNo: "9333333333",
              mentorFbProfileLink: "https://www.facebook.com/ram.prasad",
              mentorEmail: "ram.prasad@gmail.com",
              collegeName: "Tribhuvan University",
              collegeDistrict: "Kathmandu",
            },
          ];
          setMentors(sampleData);
          setLoading(false);
        }, 1000);

        // Replace with your actual API call
        // const response = await fetch(
        //   "http://localhost:7000/api/v1/admin/get_all_mentors_for_admin"
        // );
        // if (!response.ok) {
        //   throw new Error("Failed to fetch users");
        // }
        // const data = await response.json();
        // setMentors(data.data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        className="min-vh-100 d-flex align-items-center justify-content-center"
        style={{
          background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
        }}
      >
        <div className="text-center">
          <div
            className="spinner-border text-primary mb-3"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted fs-5">Loading mentors...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="min-vh-100 d-flex align-items-center justify-content-center"
        style={{
          background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
        }}
      >
        <div
          className="alert alert-danger text-center shadow-lg"
          style={{ maxWidth: "400px" }}
        >
          <div className="fs-2 mb-2">⚠️</div>
          <h4 className="alert-heading">Error Loading Data</h4>
          <p className="mb-0">{error}</p>
        </div>
      </div>
    );
  }

  const customStyles = `
    .gradient-header {
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    }
    .mentor-avatar {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
    }
    .table-hover tbody tr:hover {
      background-color: rgba(0,0,0,.05);
      transition: background-color 0.15s ease-in-out;
    }
    .accent-line {
      width: 60px;
      height: 4px;
      background: #6366f1;
      border-radius: 2px;
    }
    .stats-card {
      background: white;
      border-radius: 15px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    .main-card {
      background: white;
      border-radius: 15px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
    .page-background {
      background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
      min-height: 100vh;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="page-background py-5">
        <div className="container-fluid">
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-3">
              Mentors Directory
            </h1>
            <p className="fs-5 text-muted mb-3">
              Connect with experienced mentors from various colleges
            </p>
            <div className="accent-line mx-auto"></div>
          </div>

          {/* Stats Card */}
          <div className="row justify-content-center mb-4">
            <div className="col-md-4">
              <div className="stats-card p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="text-muted mb-1">Total Mentors</h5>
                    <h2 className="text-primary fw-bold mb-0">
                      {mentors.length}
                    </h2>
                  </div>
                  <div className="fs-1">👨‍🏫</div>
                </div>
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="main-card overflow-hidden">
            <div className="table-responsive">
              <table className="table table-hover mb-0 align-middle">
                <thead className="gradient-header text-white">
                  <tr>
                    <th className="px-4 py-3 fw-semibold text-uppercase small">
                      S.N.
                    </th>
                    <th className="px-4 py-3 fw-semibold text-uppercase small">
                      ID
                    </th>
                    <th className="px-4 py-3 fw-semibold text-uppercase small">
                      Name
                    </th>
                    <th className="px-4 py-3 fw-semibold text-uppercase small">
                      Gender
                    </th>
                    <th className="px-4 py-3 fw-semibold text-uppercase small">
                      Faculty
                    </th>
                    <th className="px-4 py-3 fw-semibold text-uppercase small">
                      Phone
                    </th>
                    <th className="px-4 py-3 fw-semibold text-uppercase small">
                      Email
                    </th>
                    <th className="px-4 py-3 fw-semibold text-uppercase small">
                      Facebook
                    </th>
                    <th className="px-4 py-3 fw-semibold text-uppercase small">
                      College
                    </th>
                    <th className="px-4 py-3 fw-semibold text-uppercase small">
                      District
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mentors.map((mentor, index) => (
                    <tr key={mentor._id}>
                      <td className="px-4 py-3">
                        <span className="fw-semibold">{index + 1}</span>
                      </td>
                      <td className="px-4 py-3">
                        <code className="text-muted small">{mentor._id}</code>
                      </td>
                      <td className="px-4 py-3">
                        <div className="d-flex align-items-center">
                          <div className="mentor-avatar me-3">
                            {mentor.mentorName.charAt(0)}
                          </div>
                          <div>
                            <div className="fw-semibold">
                              {mentor.mentorName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`badge ${
                            mentor.mentorGender === "M"
                              ? "bg-primary"
                              : "bg-danger"
                          }`}
                        >
                          {mentor.mentorGender === "M" ? "Male" : "Female"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="badge bg-success">
                          {mentor.mentorFaculty}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <code className="text-dark">
                          {mentor.mentorPhoneNo}
                        </code>
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href={`mailto:${mentor.mentorEmail}`}
                          className="text-decoration-none text-primary"
                        >
                          {mentor.mentorEmail}
                        </a>
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href={mentor.mentorFbProfileLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-primary d-flex align-items-center justify-content-center"
                          style={{ minWidth: "80px" }}
                        >
                          <svg
                            width="14"
                            height="14"
                            fill="currentColor"
                            className="me-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                          Profile
                        </a>
                      </td>
                      <td className="px-4 py-3">
                        <div className="fw-medium">{mentor.collegeName}</div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="badge bg-warning text-dark">
                          {mentor.collegeDistrict}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Empty State */}
          {mentors.length === 0 && (
            <div className="text-center py-5">
              <div className="display-1 text-muted mb-3">👥</div>
              <h3 className="text-muted mb-2">No mentors found</h3>
              <p className="text-muted">
                There are currently no mentors available.
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-4">
            <small className="text-muted">
              Total {mentors.length} mentor{mentors.length !== 1 ? "s" : ""}{" "}
              found
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMentors;
