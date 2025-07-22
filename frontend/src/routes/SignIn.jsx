import { Form, Link, redirect, useActionData } from "react-router-dom";
import React, { useState } from "react";

const SignIn = () => {
  const actionErrors = useActionData();

  const [formData, setFormData] = useState({
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
    <>
      <Form method="POST" replace>
        <div className="container-fluid py-4">
          <div className="container">
            <div className="row">
              <div className="col-12 fs-2 fw-bold text-center">Sign In</div>
              <div className="col-12 text-center signUpSlogan">
                Sign in to access your account!
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
                      required
                    />
                    {actionErrors?.password && (
                      <p style={styles.error}>{actionErrors.password}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-12  d-flex justify-content-center py4top">
                <div className="mySignUpBtnContainer">
                  <button className="mySignUpBtn my-1">Sign In</button>
                  <div className="col-12 py-1 text-center lightSmallFont">
                    Don't have an account yet?{" "}
                    <Link to="/sign_up">
                      {" "}
                      <span className="logInHere"> Sign up.</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
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
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // Validation
  const errors = {};
  if (!data.email?.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email.trim())
  ) {
    errors.email = "Email is invalid";
  }

  if (!data.password?.trim()) {
    errors.password = "Password is required";
  } else if (data.password.trim().length < 4) {
    errors.password = "Password is incorrect";
  }

  // Return errors if any
  if (Object.keys(errors).length > 0) {
    return errors; // This will be accessible via useActionData
  }

  console.log("Form data received at backend:", data);

  // You can now send this `data` to your backend API if needed

  return redirect("/");
}

export default SignIn;
