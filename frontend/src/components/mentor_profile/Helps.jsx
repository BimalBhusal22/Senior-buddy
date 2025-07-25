import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Helps = () => {
  const navigate = useNavigate();

  const { mentorName } = useSelector((store) => store.selectedMentor);

  const handleOnClickGetHelp = () => {
    let signedIn = true;
    signedIn ? navigate("/extended_mentor_profile") : navigate("/sign_up");
  };

  return (
    <div className="container-fluid mb-5">
      <div className="container pb-4">
        <div className="row gx-5">
          <div className="col-12 text-center">
            <div className="heading fw-bold">
              Your Senior friend{" "}
              <span className="heading fw-bold seniorName">{mentorName}</span>{" "}
              can Help You in:
            </div>{" "}
          </div>
          <div className="col-12 col-md-6 ">
            <div className="d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center point text-center ps-md-5 pe-md-5 pe-md-0 py-4 py-sm-5 g1p g1m">
              <img
                src="images/illustrations/Teaching_Learning2.png"
                className="icon"
              />
              Understanding Reality of Teaching Learning Environment in the
              College
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            <div className="d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center text-center ps-md-5 pe-md-5 pe-md-0 py-4 py-sm-5 g2p g2m">
              <img
                src="images/illustrations/Future_Scope.png"
                className="icon"
              />
              <span className="point mt-2 mt-sm-0">
                Reality of Course, Difficulty Level, Future Scope & Job
                Opportunities
              </span>
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            <div className="d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center text-center ps-md-5 pe-md-5 pe-md-0 py-4 py-sm-5 g2p g1m">
              <img src="images/illustrations/Expenses.png" className="icon" />
              <span className="point mt-2 mt-sm-0">
                Different Expenses and Fees Througout Your Study Period
              </span>
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            <div className="d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center point text-center ps-md-5 pe-md-5 pe-md-0 py-4 py-sm-5 g1p g2m">
              <img
                src="images/illustrations/Scholarships.png"
                className="icon"
              />
              Scholarships Available and How to Get them?{" "}
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            <div className="d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center text-center ps-md-5 pe-md-5 pe-md-0 py-4 py-sm-5 g1p g1m">
              <img src="images/illustrations/Admission.png" className="icon" />
              <span className="point mt-2 mt-sm-0">
                How to Get Admission and Minimum Qualifications
              </span>
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            <div className="d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center point text-center ps-md-5 pe-md-5 pe-md-0 py-4 py-sm-5 g2p g2m">
              <img src="images/illustrations/Hostel.png" className="icon" />
              Hostel Facilities, Room Rent Near College{" "}
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            <div className="d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center point text-center ps-md-5 pe-md-5 pe-md-0 pt-0 pb-4 py-sm-5 g2p g1m">
              <img src="images/illustrations/Notes.png" className="icon" />
              How to Study? How to Make Notes? Old Books, Learning Sources
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            <div className="d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center point text-center ps-md-5 pe-md-5 pe-md-0 py-4 py-sm-5 g1p g2m">
              <img src="images/illustrations/Cricket.png" className="icon" />
              Reality of Extra-cirriculum Activities{" "}
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            <div className="d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center point text-center ps-md-5 pe-md-5 pe-md-0 py-4 py-sm-5 g1p g1m">
              <img
                src="images/illustrations/Part_Time_Job.png"
                className="icon iconPartTime"
              />
              Part-Time Jobs{" "}
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            <div className="d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center point text-center ps-md-5 pe-md-5 pe-md-0 pb-5 py-sm-5 g2p g2m ">
              <img
                src="images/illustrations/Differently_Able_Friendly.png"
                className="icon iconDifferentlyAble"
              />
              <span className="pointDifferentlyAble">
                Differently-able Friendly or Not?
              </span>
            </div>
          </div>

          <div className="col-12 col-sm-6  text-center text-sm-end mb-4 mb-sm-0">
            <Link to="/">
              <button className="signIn goBack">Go Back</button>
            </Link>
          </div>

          <div className="col-12 col-sm-6 text-center text-sm-start ">
            <button
              className="fw-bold howHeHelps getHelp2"
              onClick={handleOnClickGetHelp}
            >
              Get Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Helps;
