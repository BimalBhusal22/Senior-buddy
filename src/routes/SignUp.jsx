import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 fs-2 fw-bold text-center">Sign Up</div>
            <div className="col-12 text-center signUpSlogan">
              {/* Sign up now to get the help! */}
              It takes only 5 seconds!
            </div>

            <div className="col-12 d-flex justify-content-center py4top">
              <div>
                <div className="col-12 py-1">Full Name</div>
                <div className="col-12 py-1">
                  <input
                    type="text"
                    className="myInputBox"
                    placeholder="Your Name"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center py4top">
              <div>
                <div className="col-12 py-1">Phone Number</div>
                <div className="col-12 py-1">
                  <input type="text" className="myInputBox" />
                </div>
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center py4top">
              <div>
                <div className="col-12 py-1">Email Address</div>
                <div className="col-12 py-1">
                  <input
                    type="text"
                    className="myInputBox"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center py4top">
              <div>
                <div className="col-12 py-1">Password</div>
                <div className="col-12 py-1">
                  <input
                    type="password"
                    className="myInputBox"
                    placeholder="Your Password"
                  />
                </div>
              </div>
            </div>

            <div className="col-12  d-flex justify-content-center py4top">
              <div className="mySignUpBtnContainer">
                <button
                  type="button"
                  className="mySignUpBtn my-1"
                  onClick={() => navigate("/")}
                >
                  Sign Up
                </button>
                <div className="col-12 py-1 text-center lightSmallFont">
                  Already have an account?{" "}
                  <span className="logInHere">Sign in here.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
