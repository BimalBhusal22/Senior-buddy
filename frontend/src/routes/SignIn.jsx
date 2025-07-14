import { Form, redirect } from "react-router-dom";
import React, { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
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

  const validate = () => {
    const newErrors = {};
    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = "Email is invalid";
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
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <Form method="POST" onSubmit={handleSubmit}>
        <div className="container-fluid py-4">
          <div className="container">
            <div className="row">
              <div className="col-12 fs-2 fw-bold text-center">Sign In</div>
              <div className="col-12 text-center signUpSlogan">
                {/* Sign up now to get the help! */}
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
                  </div>
                </div>
              </div>

              <div className="col-12  d-flex justify-content-center py4top">
                <div className="mySignUpBtnContainer">
                  <button className="mySignUpBtn my-1">Sign In</button>
                  <div className="col-12 py-1 text-center lightSmallFont">
                    Don't have an account yet?{" "}
                    <span className="logInHere"> Sign up.</span>
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
  const formDatas = await request.formData();
  const data = Object.fromEntries(formDatas);
  console.log(data);
  return redirect("/");
}

export default SignIn;
