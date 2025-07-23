import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import FuzzySearchInput from "./FuzzySearchInput";
import DarkMode from "../DarkMode/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { userProfileActions } from "../../store/userProfileSlice";

const HeaderUpperNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userProfile = useSelector((store) => store.userProfile);

  const { user } = JSON.parse(localStorage.getItem("user")) || userProfile;
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

  return (
    <nav className="upperNavbar">
      <button
        className="noBgBorderBtn logoContainer"
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}
      >
        <img className="logo" src="images/Logo.png" />
        <span className="platformName">
          <span className="fs-1 fw-bold senior">Senior </span>
          <span className="fs-1 fw-bold buddy">buddy</span>
        </span>
      </button>

      {/* <input
        name="searchBar"
        type="text"
        placeholder="Search colleges . . ."
        className="searchBar"
      /> */}
      <span className="pcSearchBar">
        <FuzzySearchInput />
      </span>

      {user.name !== "" ? (
        <span className="signOut">
          <button className="signIn" onClick={handleSignOutClick}>
            Sign-Out
          </button>
        </span>
      ) : (
        <span className="signInUp">
          <Link to="/sign_in">
            <button className="signIn">Sign-In</button>
          </Link>
          <Link to="/sign_up">
            <button className="signUp">Sign-Up</button>
          </Link>
        </span>
      )}
      {/* <span>
        <button className="theme darkTheme">
          {" "}
          <MdDarkMode />{" "}
        </button>
        <button className="theme lightTheme"> <MdLightMode /> </button>
      </span> */}
      <span className="theme"></span>

      <DarkMode />
    </nav>
  );
};
export default HeaderUpperNavbar;
