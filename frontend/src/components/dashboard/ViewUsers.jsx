import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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

    //   const userData = [
    //     {
    //       fullName: "Virat Kohli",
    //       phoneNumber: "9867510254",
    //       email: "virat@gmail.com",
    //     },
    //     {
    //       fullName: "Virat Kohli",
    //       phoneNumber: "9867510254",
    //       email: "virat@gmail.com",
    //     },
    //     {
    //       fullName: "Virat Kohli",
    //       phoneNumber: "9867510254",
    //       email: "virat@gmail.com",
    //     },
    //     {
    //       fullName: "Virat Kohli",
    //       phoneNumber: "9867510254",
    //       email: "virat@gmail.com",
    //     },
    //   ];
    //   setUsers(userData);
    // };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">All Registered Users</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.phoneNo}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUsers;
