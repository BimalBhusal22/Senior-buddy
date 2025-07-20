import { MdEdit } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { BiShow, BiHide } from "react-icons/bi";
import { useState } from "react";

const UserInfo = () => {
  let userInfo = {
    name: "Bimal Bhusal",
    phoneno: "9840457433",
    email: "bimalbhusal1st2075@gmail.com",
    password: "1234",
  };

  const [userData, setUserData] = useState(userInfo);
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let tempErrors = {};

    if (!userData.name.trim()) {
      tempErrors.name = "Name is required.";
    }

    if (!/^\d{10}$/.test(userData.phoneno)) {
      tempErrors.phoneno = "Phone number must be 10 digits.";
    }

    if (!/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(userData.email)) {
      tempErrors.email = "Invalid email format.";
    }

    if (userData.password.length < 4) {
      tempErrors.password = "Password must be at least 4 characters.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="container-fluid py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center fs-3 fw-bold myHeading">
            Your Details
          </div>

          {/* Name */}
          <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
            <span>
              <span className="keyPart">Name:</span>
              <input
                type="text"
                name="name"
                className="valuePart"
                value={userData.name}
                onChange={handleChange}
                disabled={!isEditing}
              />
              {errors.name && (
                <div className="text-danger small">{errors.name}</div>
              )}
            </span>
          </div>

          {/* Phone Number */}
          <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
            <span>
              <span className="keyPart">Phone No:</span>
              <input
                type="text"
                name="phoneno"
                className="valuePart"
                value={userData.phoneno}
                onChange={handleChange}
                disabled={!isEditing}
              />
              {errors.phoneno && (
                <div className="text-danger small">{errors.phoneno}</div>
              )}
            </span>
          </div>

          {/* Email */}
          <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
            <span>
              <span className="keyPart">Email:</span>
              <input
                type="email"
                name="email"
                className="valuePart"
                value={userData.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
              {errors.email && (
                <div className="text-danger small">{errors.email}</div>
              )}
            </span>
          </div>

          {/* Password */}
          <div className="col-12 col-sm-6 px-sm-4 pt-3 d-flex justify-content-center justify-content-sm-end">
            <span>
              <span className="keyPart">Password:</span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="valuePart"
                value={userData.password}
                onChange={handleChange}
                disabled={!isEditing}
              />
              {isEditing && (
                <div>
                  <button
                    type="button"
                    className="showBtn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <BiHide className="hideIcon" />
                    ) : (
                      <BiShow className="showIcon" />
                    )}
                  </button>
                </div>
              )}

              {errors.password && (
                <div className="text-danger small">{errors.password}</div>
              )}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="col-12 d-flex justify-content-center">
            {!isEditing && (
              <button
                type="button"
                className="editBtn"
                onClick={handleEditClick}
              >
                <MdEdit className="editIcon" /> Edit
              </button>
            )}

            {isEditing && (
              <button
                type="submit" // ✅ Now submits the form to action
                className="btn btn-primary confirmBtn"
                onClick={(e) => {
                  if (!validate()) e.preventDefault(); // prevent submission if invalid
                }}
              >
                <GiConfirmed className="confirmIcon" /> Confirm
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
