import React, { useEffect, useState } from "react";

const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate fetching from backend
  useEffect(() => {
    const fetchUsers = async () => {
      // Replace this with an actual API call using fetch/axios
      try {
        const response = await fetch(
          "http://localhost:7000/api/v1/user/get_all_users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        console.log(data.data);
        setUsers(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // // Mock data for demonstration
    // const userData = [
    //   {
    //     name: "Virat Kohli",
    //     phoneNo: "9867510254",
    //     email: "virat@gmail.com",
    //   },
    //   {
    //     name: "MS Dhoni",
    //     phoneNo: "9876543210",
    //     email: "dhoni@gmail.com",
    //   },
    //   {
    //     name: "Rohit Sharma",
    //     phoneNo: "9123456789",
    //     email: "rohit@gmail.com",
    //   },
    //   {
    //     name: "Sachin Tendulkar",
    //     phoneNo: "9988776655",
    //     email: "sachin@gmail.com",
    //   },
    // ];
    // setTimeout(() => {
    //   setUsers(userData);
    //   setLoading(false);
    // }, 1000);

    fetchUsers();
  }, []);

  if (loading)
    return (
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div
              className="spinner-border text-primary"
              role="status"
              style={{ width: "3rem", height: "3rem" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted">Loading users...</p>
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="alert alert-danger d-flex align-items-center"
              role="alert"
            >
              <div className="flex-shrink-0 me-3">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <strong>Error:</strong> {error}
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div
      className="min-vh-100"
      style={{
        backgroundColor: "#f8f9fa",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="card shadow-lg border-0"
              style={{ borderRadius: "0.75rem", overflow: "hidden" }}
            >
              <div
                className="card-header text-white text-center py-3 border-0"
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                }}
              >
                <h2 className="mb-2 fw-bold fs-1">👥 All Registered Users</h2>
                <p
                  className="mb-0"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  Manage and view all registered users
                </p>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead
                      style={{ backgroundColor: "#343a40" }}
                      className="text-white"
                    >
                      <tr>
                        <th className="px-4 py-3 fw-semibold border-0">#</th>
                        <th className="px-4 py-3 fw-semibold border-0">
                          👤 Full Name
                        </th>
                        <th className="px-4 py-3 fw-semibold border-0">
                          📞 Phone Number
                        </th>
                        <th className="px-4 py-3 fw-semibold border-0">
                          ✉️ Email
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.length === 0 ? (
                        <tr>
                          <td colSpan="4" className="text-center py-5">
                            <div className="text-muted">
                              <div
                                style={{ fontSize: "4rem" }}
                                className="mb-4"
                              >
                                👥
                              </div>
                              <p className="fs-5 fw-medium mb-2">
                                No users found.
                              </p>
                              <small>
                                Users will appear here once they register.
                              </small>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        users.map((user, index) => (
                          <tr
                            key={index}
                            className="table-hover-row"
                            style={{ transition: "background-color 0.2s ease" }}
                          >
                            <td className="px-4 py-3 align-middle">
                              <span
                                className="badge bg-primary rounded-pill d-inline-flex align-items-center justify-content-center"
                                style={{
                                  width: "32px",
                                  height: "32px",
                                  fontSize: "0.875rem",
                                }}
                              >
                                {index + 1}
                              </span>
                            </td>
                            <td className="px-4 py-3 align-middle">
                              <div className="d-flex align-items-center">
                                <div
                                  className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold me-3"
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    fontSize: "0.875rem",
                                    background:
                                      "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                                  }}
                                >
                                  {user.name?.charAt(0)?.toUpperCase() || "U"}
                                </div>
                                <div className="fw-semibold text-dark">
                                  {user.name}
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 align-middle">
                              <span className="text-muted d-flex align-items-center">
                                <span className="text-success me-2">📱</span>
                                {user.phoneNo}
                              </span>
                            </td>
                            <td className="px-4 py-3 align-middle">
                              <a
                                href={`mailto:${user.email}`}
                                className="text-decoration-none d-flex align-items-center"
                                style={{
                                  color: "#2563eb",
                                  transition: "color 0.2s ease",
                                }}
                              >
                                <span className="me-2">📧</span>
                                {user.email}
                              </a>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              {users.length > 0 && (
                <div
                  className="card-footer text-center py-3 border-top"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <small className="text-muted">
                    ℹ️ Showing {users.length} registered user
                    {users.length !== 1 ? "s" : ""}
                  </small>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for hover effects */}
      <style>{`
        .table-hover-row:hover {
          background-color: #f8f9fa !important;
        }
        a[href^="mailto:"]:hover {
          color: #1d4ed8 !important;
        }
      `}</style>
    </div>
  );
};

export default ViewUsers;
