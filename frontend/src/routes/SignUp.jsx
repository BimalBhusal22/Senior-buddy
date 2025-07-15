import { Form, redirect } from "react-router-dom";
import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate fields
  const validate = () => {
    const newErrors = {};
    const alphabetRegex = /^[A-Za-z\s]+$/;

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full Name must be at least 3 characters";
    } else if (!alphabetRegex.test(formData.fullName.trim())) {
      newErrors.fullName = "Full name must contain only letters.";
    }

    // Phone Number
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d+$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = "Phone Number must contain only digits";
    } else if (formData.phoneNumber.trim().length < 10) {
      newErrors.phoneNumber = "Phone Number must be at least 10 digits";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = "Email is invalid";
    }

    // Password
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.trim().length < 4) {
      newErrors.password = "Password must be at least 4 characters";
    }

    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted successfully!", formData);
      // Here you might send data to an API, etc.
      // Reset form if desired
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <div className="container-fluid py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 fs-2 fw-bold text-center">Sign Up</div>
            <div className="col-12 text-center signUpSlogan">
              {/* Sign up now to get the help! */}
              It takes only few seconds!
            </div>
            <Form method="POST" action="/sign_up" onSubmit={handleSubmit}>
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Full Name</div>
                  <div className="col-12 py-1">
                    <input
                      type="text"
                      name="fullName"
                      className="myInputBox"
                      placeholder="Your Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                    {errors.fullName && (
                      <p style={styles.error}>{errors.fullName}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Phone Number</div>
                  <div className="col-12 py-1">
                    <input
                      type="text"
                      name="phoneNumber"
                      className="myInputBox"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                    {errors.phoneNumber && (
                      <p style={styles.error}>{errors.phoneNumber}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Email Address</div>
                  <div className="col-12 py-1">
                    <input
                      type="text"
                      name="email"
                      className="myInputBox"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && <p style={styles.error}>{errors.email}</p>}
                  </div>
                </div>
              </div>

              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Password</div>
                  <div className="col-12 py-1">
                    <input
                      type="password"
                      name="password"
                      className="myInputBox"
                      placeholder="Your Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    {errors.password && (
                      <p style={styles.error}>{errors.password}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-12  d-flex justify-content-center py4top">
                <div className="mySignUpBtnContainer">
                  <button
                    className="mySignUpBtn my-1"
                    // onClick={() => navigate("/")}
                  >
                    Sign Up
                  </button>
                  <div className="col-12 py-1 text-center lightSmallFont">
                    Already have an account?{" "}
                    <span className="logInHere">Sign in here.</span>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  error: {
    color: "red",
    fontSize: "0.8em",
    marginTop: "5px",
  },
};

export async function action({ request }) {
  const formDatas = await request.formData();
  const data = Object.fromEntries(formDatas);
  console.log(data);
  return redirect("/");
}

export default SignUp;
