import { RxCross1 } from "react-icons/rx";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

const MobileMenu = ({ handleMobileMenuClicked }) => {
  return (
    <div className="container-fluid mobileMenuContainer shadow-lg py-5">
      <div className="container">
        <div className="row">
          <div className="col-6 fs-3 fw-bold d-flex justify-content-center pt-2">
            Menu
          </div>

          <div className="col-6 d-flex justify-content-center pt-2">
            <button
              type="button"
              className="crossBtn"
              onClick={() => handleMobileMenuClicked()}
            >
              <RxCross1 className="crossIcon" />
            </button>
          </div>

          <div className="col-6 d-flex justify-content-center mt-4 pt-2">
            <div>
              <Link to="/user_profile">
                <button
                  className="specialTab sCtgy userProfile fw-bold"
                  onClick={() => handleMobileMenuClicked()}
                >
                  UN
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger myBadge">
                    3<span className="visually-hidden">unread messages</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className="col-6 d-flex justify-content-center mt-4 pt-2">
            <span>
              <button
                className="theme darkTheme mobileTheme"
                onClick={() => handleMobileMenuClicked()}
              >
                {" "}
                <MdDarkMode className="mobileDarkThemeIcon" />{" "}
              </button>
              {/* <button className="theme lightTheme mobileTheme"> <MdLightMode className="mobileLightThemeIcon" /> </button> */}
            </span>
          </div>

          <div className="col-6 d-flex justify-content-center mt-4 pt-2">
            <Link
              to="/"
              className="ctgy"
              onClick={() => handleMobileMenuClicked()}
            >
              Home
            </Link>
          </div>

          <div className="col-6 d-flex justify-content-center mt-4 pt-2">
            <Link
              to="/bbs"
              className="ctgy"
              onClick={() => handleMobileMenuClicked()}
            >
              BBS
            </Link>
          </div>

          <div className="col-6 d-flex justify-content-center mt-4 pt-2">
            <Link
              to="/bba"
              className="ctgy"
              onClick={() => handleMobileMenuClicked()}
            >
              BBA
            </Link>
          </div>

          <div className="col-6 d-flex justify-content-center mt-4 pt-2">
            <Link
              to="/bhm"
              className="ctgy"
              onClick={() => handleMobileMenuClicked()}
            >
              BHM
            </Link>
          </div>

          <div className="col-6 d-flex justify-content-center mt-4 pt-2">
            <Link
              href="/bsccsit"
              className="ctgy"
              onClick={() => handleMobileMenuClicked()}
            >
              BSc. CSIT
            </Link>
          </div>

          <div className="col-6 d-flex justify-content-center mt-4 pt-2">
            <Link
              to="bca.html"
              className="ctgy"
              onClick={() => handleMobileMenuClicked()}
            >
              BCA
            </Link>
          </div>

          <div className="col-12 d-flex justify-content-center mt-4 pt-2">
            <span>
              <label htmlFor="more" className="ctgy">
                More:
              </label>

              <select name="moreFaculties" id="moreFaculties">
                <option value="science">
                  <Link to="/science" onClick={() => handleMobileMenuClicked()}>
                    +2 Science
                  </Link>
                </option>
                <option value="management">
                  <Link
                    to="/management"
                    onClick={() => handleMobileMenuClicked()}
                  >
                    +2 Management
                  </Link>{" "}
                </option>
                <option value="education">
                  <Link
                    to="education"
                    onClick={() => handleMobileMenuClicked()}
                  >
                    +2 Education
                  </Link>{" "}
                </option>
                <option value="engineering">
                  <Link
                    to="/engineering"
                    onClick={() => handleMobileMenuClicked()}
                  >
                    Engineering
                  </Link>
                </option>
              </select>
            </span>
          </div>

          <div className="col-12 d-flex justify-content-center mt-4 pt-2">
            <div>
              <Link
                to="become_a_mentor"
                onClick={() => handleMobileMenuClicked()}
              >
                <button className="specialTab sCtgy becomeAMentor">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-award-fill becomeAMentorIcon"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                  </svg>
                  Become a Mentor
                </button>
              </Link>
            </div>
          </div>

          <div className="col-12 d-flex justify-content-center  mt-4 pt-2">
            <span className="signInUp mobileSignInUp">
              <Link to="/sign_in" onClick={() => handleMobileMenuClicked()}>
                <button className="signIn me-2">Sign-In</button>
              </Link>
              <Link to="/sign_up" onClick={() => handleMobileMenuClicked()}>
                <button className="signUp ms-2">Sign-Up</button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
