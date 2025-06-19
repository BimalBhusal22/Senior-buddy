import { useNavigate } from "react-router-dom";

const BecomeAMentor = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 fs-2 fw-bold text-center">
              Become A Mentor
            </div>
            <div className="col-12 text-center ">
              {/* Sign up now to get the help! */}
              <span className="specialWord">Help</span> newcomers and get{" "}
              <span className="specialWord">Paid</span> for your valuable{" "}
              <span className="specialWord">Guidance</span> !
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
                <div className="col-12 py-1"> College</div>
                <div className="col-12 py-1">
                  <input
                    type="text"
                    className="myInputBox"
                    placeholder="Your College Name"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center py4top">
              <div>
                <div className="col-12 py-1">Faculty</div>
                <div className="col-12 py-1">
                  <input
                    type="text"
                    className="myInputBox"
                    placeholder="Your Faculty"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center py4top">
              <div>
                <div className="col-12 py-1">Year / Grade</div>
                <div className="col-12 py-1">
                  <select className="myInputBox">
                    <option>Grade 12</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center py4top">
              <div>
                <div className="col-12 py-1">Semester (Optional)</div>
                <div className="col-12 py-1">
                  <input
                    type="text"
                    className="myInputBox"
                    placeholder="Current Semester"
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

            <div className="col-12  d-flex justify-content-center py4top">
              <div className="mySignUpBtnContainer">
                <button
                  type="button"
                  className="mySignUpBtn my-1"
                  onClick={() => navigate("/")}
                >
                  Submit
                </button>
                <div className="col-12 py-1 text-center lightSmallFont">
                  We will contact you as soon as possible!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BecomeAMentor;
