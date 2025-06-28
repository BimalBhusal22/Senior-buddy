import { MdOutlineTune } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import FuzzySearchInput from "./FuzzySearchInput";

const HeaderMiddleBar = ({ handleFilterBtnClicked }) => {
  return (
    <div className="middleBar">
      <div className="d-flex justify-content-evenly align-items-center">
        <button
          className=" filterBtn"
          type="button"
          onClick={() => handleFilterBtnClicked()}
        >
          <MdOutlineTune className="filterIcon" />
          <span className="filterWord">Filter</span>
        </button>

        {/* <input
        type="text"
        placeholder="Search colleges . . ."
        className="searchBar2"
      /> */}
        <span className="mSearchBar">
          <FuzzySearchInput />
        </span>
        <span>
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
        </span>
      </div>
    </div>
  );
};
export default HeaderMiddleBar;
