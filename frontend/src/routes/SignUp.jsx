import { Form, useActionData, redirect, Link } from "react-router-dom";
import React, { useState } from "react";

const SignUp = () => {
  const actionErrors = useActionData();

  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container-fluid py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 fs-2 fw-bold text-center">Sign Up</div>
          <div className="col-12 text-center signUpSlogan">
            It takes only few seconds!
          </div>
          <Form method="POST" action="/sign_up">
            <div className="col-12 d-flex justify-content-center py4top">
              <div>
                <div className="col-12 py-1">Full Name</div>
                <div className="col-12 py-1">
                  <input
                    type="text"
                    name="name"
                    className="myInputBox"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {actionErrors?.name && (
                    <p style={styles.error}>{actionErrors.name}</p>
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
                    name="phoneNo"
                    className="myInputBox"
                    value={formData.phoneNo}
                    onChange={handleChange}
                  />
                  {actionErrors?.phoneNo && (
                    <p style={styles.error}>{actionErrors.phoneNo}</p>
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
                  />
                  {actionErrors?.email && (
                    <p style={styles.error}>{actionErrors.email}</p>
                  )}
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
                  />
                  {actionErrors?.password && (
                    <p style={styles.error}>{actionErrors.password}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center py4top">
              <div className="mySignUpBtnContainer">
                <button className="mySignUpBtn my-1">Sign Up</button>
                <div className="col-12 py-1 text-center lightSmallFont">
                  Already have an account?{" "}
                  <Link to="/sign_in">
                    <span className="logInHere">Sign in here.</span>
                  </Link>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
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
  const formData = Object.fromEntries(await request.formData());

  const errors = {};
  const alphabetRegex = /^[A-Za-z\s]+$/;

  if (!formData.name?.trim()) {
    errors.name = "Full Name is required";
  } else if (formData.name.trim().length < 3) {
    errors.name = "Full Name must be at least 3 characters";
  } else if (!alphabetRegex.test(formData.name.trim())) {
    errors.name = "Full name must contain only letters.";
  }

  if (!formData.phoneNo?.trim()) {
    errors.phoneNo = "Phone Number is required";
  } else if (!/^\d+$/.test(formData.phoneNo.trim())) {
    errors.phoneNo = "Phone Number must contain only digits";
  } else if (formData.phoneNo.trim().length < 10) {
    errors.phoneNo = "Phone Number must be at least 10 digits";
  }

  if (!formData.email?.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
  ) {
    errors.email = "Email is invalid";
  }

  if (!formData.password?.trim()) {
    errors.password = "Password is required";
  } else if (formData.password.trim().length < 4) {
    errors.password = "Password must be at least 4 characters";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  // ✅ If passed validation
  console.log("Data submitted after Sign Up to backend:", formData);
  fetch("http://localhost:7000/api/v1/user/sign_up", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("Response from server to frontend after Sign Up:", res);
    });
  return redirect("/sign_in");
}

export default SignUp;
