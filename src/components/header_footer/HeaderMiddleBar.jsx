import { MdOutlineTune } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const HeaderMiddleBar = ({ handleFilterBtnClicked }) => {
  return (
    <div className="middleBar">
      <button
        className=" filterBtn"
        type="button"
        onClick={() => handleFilterBtnClicked()}
      >
        <MdOutlineTune className="filterIcon" />
        <span className="filterWord">Filter</span>
      </button>

      <input
        type="text"
        placeholder="Search colleges . . ."
        className="searchBar2"
      />

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
  );
};
export default HeaderMiddleBar;
