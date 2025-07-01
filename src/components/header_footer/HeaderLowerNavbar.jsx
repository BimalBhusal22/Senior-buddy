import { Link, useNavigate } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store/filterSlice";
import MoreFacultySelection from "./MoreFacultySelection";
import SignIn from "../../routes/SignIn";

const HeaderLowerNavbar = () => {
  const wishlist = useSelector((store) => store.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = (faculty) => {
    navigate("/filter_output");
    dispatch(filterActions.applyDisciplineFilter(faculty));
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
              <span className="ctgy">BBS</span>
            </label>
          </button>
        </li>
        <li>
          <button
            className="noBgBorderBtn"
            onClick={() => handleOnClick("BBA")}
          >
            <label htmlFor="bba">
              <span className="ctgy">BBA</span>
            </label>
          </button>
        </li>
        <li>
          <button
            className="noBgBorderBtn"
            onClick={() => handleOnClick("BHM")}
          >
            <label htmlFor="bhm">
              <span className="ctgy">BHM</span>
            </label>
          </button>
        </li>
        <li>
          <button
            className="noBgBorderBtn"
            onClick={() => handleOnClick("BSc CSIT")}
          >
            <label htmlFor="bsccsit">
              <span className="ctgy">BSc. CSIT</span>
            </label>
          </button>
        </li>
        <li>
          <button
            className="noBgBorderBtn"
            onClick={() => handleOnClick("BCA")}
          >
            <label htmlFor="bca">
              <span className="ctgy">BCA</span>
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
          <Link to="/user_profile">
            <button className="specialTab sCtgy userProfile fw-bold">
              UN
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger myBadge">
                {wishlist.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default HeaderLowerNavbar;
