import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  // Simulate fetching from backend
  useEffect(() => {
    const fetchUsers = async () => {
      // Replace this with an actual API call using fetch/axios
      const userData = [
        {
          fullName: "Virat Kohli",
          phoneNumber: "9867510254",
          email: "virat@gmail.com",
          password: "vamika",
        },
        {
          fullName: "Virat Kohli",
          phoneNumber: "9867510254",
          email: "virat@gmail.com",
          password: "vamika",
        },
        {
          fullName: "Virat Kohli",
          phoneNumber: "9867510254",
          email: "virat@gmail.com",
          password: "vamika",
        },
        {
          fullName: "Virat Kohli",
          phoneNumber: "9867510254",
          email: "virat@gmail.com",
          password: "vamika",
        },
      ];
      setUsers(userData);
    };

    fetchUsers();
  }, []);

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
              <th>Password</th>
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
                  <td>{user.fullName}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
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
