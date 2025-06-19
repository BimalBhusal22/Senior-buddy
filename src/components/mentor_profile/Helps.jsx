import { Link } from "react-router-dom";

const Helps = () => {
  let mentor = {
    id: 1,
    imageUrl: "images/senior1.png",
    name: "Jivan",
    present: "3rd Yr, BSc. CSIT",
    past: "1st Yr: 85%, 87%",
    pageLink: "profile.html",
    phoneNo: "9111111111",
    fbProfileLink: "https://www.facebook.com/jivan.gaire.79",
    email: "jivangaire@gmail.com",
  };
  return (
    <div className="container-fluid mb-5">
      <div className="container">
        <div className="row gx-5">
          <div className="col-12 text-center">
            <div className="heading fw-bold">
              Your Senior friend{" "}
              <span className="heading fw-bold seniorName">{mentor.name}</span>{" "}
              can Help You in:
            </div>{" "}
          </div>
          <div className="col-12 col-md-6 ">
            {" "}
            <div className=" d-flex align-items-center point text-center ps-md-5 pe-md-5 pe-md-0 py-4 g1p g1m">
              <img src="images/Teaching_Learning.png" className="icon" />
              Understanding Reality of Teaching Learning Environment in the
              College{" "}
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            {" "}
            <div className=" d-flex align-items-center point text-center ps-md-5 pe-md-5 pe-md-0 py-4 g2p g2m">
              <img src="images/Future_Scope.png" className="icon" />
              Reality of Course, Difficulty Level, Future Scope & Job
              Opportunities{" "}
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            {" "}
            <div className=" d-flex align-items-center point text-center ps-md-5 pe-md-5 pe-md-0 py-4 g2p g1m">
              <img src="images/Expenses.png" className="icon" />
              Different Expenses and Fees Througout Your Study Period{" "}
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            {" "}
            <div className=" d-flex align-items-center point text-center ps-md-5 pe-md-5 pe-md-0 py-4 g1p g2m">
              <img src="images/Scholarships.png" className="icon" />
              Scholarships Available and How to Get them?{" "}
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            {" "}
            <div className=" d-flex align-items-center point text-center ps-md-5 pe-md-5 pe-md-0 py-4 g1p g1m">
              <img src="images/Admission.png" className="icon" />
              How to Get Admission and Minimum Qualifications{" "}
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            {" "}
            <div className=" d-flex align-items-center point text-center ps-md-5 pe-md-5 pe-md-0 py-4 g2p g2m">
              <img src="images/Hostel.png" className="icon" />
              Hostel Facilities, Room Rent Near College{" "}
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            {" "}
            <div className=" d-flex align-items-center point text-center ps-md-5 pe-md-5 pe-md-0 py-4 g2p g1m">
              <img src="images/Notes.png" className="icon" />
              How to Study? How to Make Notes? Old Books, Learning Sources
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            {" "}
            <div className=" d-flex align-items-center point text-center ps-md-5 pe-md-5 pe-md-0 py-4 g1p g2m">
              <img src="images/Cricket.png" className="icon" />
              Reality of Extra-cirriculum Activities{" "}
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            {" "}
            <div className=" d-flex align-items-center point text-center ps-md-5 pe-md-5 pe-md-0 py-4 g1p g1m">
              <img
                src="images/Part_Time_Job.png"
                className="icon iconPartTime"
              />
              Part-Time Jobs{" "}
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            {" "}
            <div className=" d-flex align-items-center point text-center ps-md-5 pe-md-5 pe-md-0 py-4 g2p g2m">
              <img
                src="images/Differently_Able_Friendly.png"
                className="icon iconDifferentlyAble"
              />
              Differently-able Friendly or Not?
            </div>
          </div>

          <div className="col-12 col-sm-6 pt-4 text-center text-sm-end ">
            {" "}
            <Link to="/">
              <button className="signIn goBack">Go Back</button>
            </Link>
          </div>

          <div className="col-12 col-sm-6 text-center text-sm-start pt-3 pt-sm-4">
            {" "}
            <button className="fw-bold howHeHelps getHelp2 ">Get Help</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Helps;
