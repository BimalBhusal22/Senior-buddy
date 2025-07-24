import { Link, useNavigate } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store/filterSlice";
import MoreFacultySelection from "./MoreFacultySelection";
import { IoMdPerson } from "react-icons/io";

const HeaderLowerNavbar = () => {
  const wishlist = useSelector((store) => store.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userProfile = useSelector((store) => store.userProfile);
  const user = JSON.parse(localStorage.getItem("user")) || userProfile;

  const handleOnClick = (faculty) => {
    navigate("/filter_output");
    dispatch(filterActions.applyDisciplineFilter(faculty));
  };

  const handleOnClickUserProfile = () => {
    user.user.role !== "" ? navigate("/user_profile") : navigate("/sign_up");
  };
  return (
    <nav className="lowerNavbar">
      <ul id="navItems">
        <li>
          <span className="ctgy">
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
          </span>
        </li>
        <li>
          <button
            className="noBgBorderBtn"
            onClick={() => handleOnClick("BBS")}
          >
            <label htmlFor="bbs">
              <div className="ctgy">BBS</div>
            </label>
          </button>
        </li>
        <li>
          <button
            className="noBgBorderBtn"
            onClick={() => handleOnClick("BBA")}
          >
            <label htmlFor="bba">
              <div className="ctgy">BBA</div>
            </label>
          </button>
        </li>
        <li>
          <button
            className="noBgBorderBtn"
            onClick={() => handleOnClick("BHM")}
          >
            <label htmlFor="bhm">
              <div className="ctgy">BHM</div>
            </label>
          </button>
        </li>
        <li>
          <button
            className="noBgBorderBtn"
            onClick={() => handleOnClick("BSc CSIT")}
          >
            <label htmlFor="bsccsit">
              <div className="ctgy">BSc. CSIT</div>
            </label>
          </button>
        </li>
        <li>
          <button
            className="noBgBorderBtn"
            onClick={() => handleOnClick("BCA")}
          >
            <label htmlFor="bca">
              <div className="ctgy">BCA</div>
            </label>
          </button>
        </li>
        <li>
          <span>
            <label htmlFor="more" className="ctgy">
              More:
            </label>
            <MoreFacultySelection />
          </span>
        </li>

        <li>
          <Link to="/become_a_mentor">
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
        </li>

        <li>
          <button
            className="specialTab sCtgy userProfile fw-bold"
            onClick={handleOnClickUserProfile}
          >
            <IoMdPerson className="fs-4" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger myBadge">
              {wishlist.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default HeaderLowerNavbar;
