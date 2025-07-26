import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userProfileActions } from "../../store/userProfileSlice";
import { filterActions } from "../../store/filterSlice";
import { ImHome } from "react-icons/im";
import MoreFacultySelection from "../header_footer/MoreFacultySelection";
import { IoMdPerson } from "react-icons/io";

const MobileMenu = ({ handleMobileMenuClicked }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((store) => store.wishlist);
  const userProfile = useSelector((store) => store.userProfile);
  const { user } = JSON.parse(localStorage.getItem("user")) || userProfile;

  const handleOnClick = (faculty) => {
    navigate("/filter_output");
    dispatch(filterActions.applyDisciplineFilter(faculty));
  };

  const handleSignOutClick = async () => {
    const userDublicate = JSON.parse(localStorage.getItem("user"));
    const res = await fetch("http://localhost:7000/api/v1/user/sign_out", {
      method: "POST",
      body: JSON.stringify([user, userDublicate]),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    console.log("Response from server after sign out: ", result);
    dispatch(userProfileActions.removeUserInfo());
    navigate("/");
  };

  const handleOnClickUserProfile = () => {
    user.role !== "" ? navigate("/user_profile") : navigate("/sign_up");
  };

  return (
    <div className="container-fluid mobileMenuContainer shadow-lg py-5">
      <div className="container">
        <div className="row">
          <div className="col-6 fs-3 fw-bold d-flex justify-content-center pt-4">
            Menu
          </div>

          <div className="col-6 d-flex justify-content-center pt-4">
            <button
              type="button"
              className="crossBtn"
              onClick={() => handleMobileMenuClicked()}
            >
              <RxCross1 className="crossIcon" />
            </button>
          </div>

          <div className="col-6 d-flex justify-content-center mt-3 pt-2">
            <button
              type="button"
              className="homeBtn"
              onClick={() => {
                navigate("/");
                window.location.reload();
              }}
            >
              <ImHome className="homeIcon ctgy" />
            </button>
          </div>

          <div className="col-6 d-flex justify-content-center mt-3 pt-2">
            <button
              className="noBgBorderBtn"
              onClick={() => {
                handleOnClick("BBS"), handleMobileMenuClicked();
              }}
            >
              <label htmlFor="bbs">
                <div className="ctgy">BBS</div>
              </label>
            </button>
          </div>

          <div className="col-6 d-flex justify-content-center mt-3 pt-2">
            <button
              className="noBgBorderBtn"
              onClick={() => handleOnClick("BBA")}
            >
              <label htmlFor="bba">
                <div className="ctgy">BBA</div>
              </label>
            </button>
          </div>

          <div className="col-6 d-flex justify-content-center mt-3 pt-2">
            <button
              className="noBgBorderBtn"
              onClick={() => handleOnClick("BHM")}
            >
              <label htmlFor="bhm">
                <div className="ctgy">BHM</div>
              </label>
            </button>
          </div>

          <div className="col-6 d-flex justify-content-center mt-3 pt-2">
            <button
              className="noBgBorderBtn"
              onClick={() => handleOnClick("BSc CSIT")}
            >
              <label htmlFor="bsccsit">
                <div className="ctgy">BSc. CSIT</div>
              </label>
            </button>
          </div>

          <div className="col-6 d-flex justify-content-center mt-3 pt-2">
            <button
              className="noBgBorderBtn"
              onClick={() => handleOnClick("BCA")}
            >
              <label htmlFor="bca">
                <div className="ctgy">BCA</div>
              </label>
            </button>
          </div>

          <div className="col-12 d-flex justify-content-center mt-3 pt-2">
            <span>
              <label htmlFor="more" className="ctgy">
                More:
              </label>
              <MoreFacultySelection />
            </span>
          </div>

          <div className="col-12 d-flex justify-content-center mt-3 pt-2">
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

          <div className="col-12 d-flex justify-content-center  mt-3 pt-2">
            {user.name !== "" ? (
              <span className="signOut mobileSignOut">
                <button
                  className="signIn"
                  onClick={() => {
                    handleSignOutClick(), handleMobileMenuClicked();
                  }}
                >
                  Sign-Out
                </button>
              </span>
            ) : (
              <span className="signInUp mobileSignInUp">
                <Link to="/sign_in" onClick={() => handleMobileMenuClicked()}>
                  <button className="signIn me-2">Sign-In</button>
                </Link>
                <Link to="/sign_up" onClick={() => handleMobileMenuClicked()}>
                  <button className="signUp ms-2">Sign-Up</button>
                </Link>
              </span>
            )}
          </div>

          <div className="col-12 d-flex justify-content-center mt-3 pt-2">
            <div>
              <button
                className="specialTab sCtgy userProfile fw-bold"
                onClick={() => {
                  handleOnClickUserProfile(), handleMobileMenuClicked();
                }}
              >
                <IoMdPerson className="fs-4" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger myBadge">
                  {wishlist.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
