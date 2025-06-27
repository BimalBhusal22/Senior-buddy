import { Form, redirect } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <Form method="POST">
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
                      name="password"
                      className="myInputBox"
                      placeholder="Your Password"
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

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return redirect("/");
}

export default SignIn;
