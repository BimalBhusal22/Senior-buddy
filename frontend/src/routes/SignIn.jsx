import { Form, useActionData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userProfileActions } from "../store/userProfileSlice.js";

const SignIn = () => {
  const actionData = useActionData();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (actionData?.user) {
      dispatch(userProfileActions.addUserInfo(actionData.user));
      console.log("hello");
      navigate("/"); // Redirect after Redux update
    }
  }, [actionData, dispatch, navigate]);

  return (
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
                  {actionData?.email && (
                    <p style={styles.error}>{actionData.email}</p>
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
                  {actionData?.password && (
                    <p style={styles.error}>{actionData.password}</p>
                  )}
                </div>
              </div>
            </div>

            {actionData?.general && (
              <div className="col-12 text-center mt-2">
                <p style={styles.error}>{actionData.general}</p>
              </div>
            )}

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
  );
};

export default SignIn;

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

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  console.log("Data sent to server from Sign In: ", JSON.stringify(data));

  try {
    const res = await fetch("http://localhost:7000/api/v1/user/sign_in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      return { general: result.message || "Failed to sign in" };
    }
    // if (res.ok) {
    //   console.log("Response from server after sign in: ", result.data);
    // }

    // Pass data back to component via redirect or loader state
    return { user: result.data }; // or save to session instead
  } catch (error) {
    return { general: "Something went wrong. Try again later." };
  }
}
