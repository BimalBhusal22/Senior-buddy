import { MdOutlineTune } from "react-icons/md";
import FuzzySearchInput from "./FuzzySearchInput";
import { RxHamburgerMenu } from "react-icons/rx";

const HeaderMiddleBar = ({
  handleFilterBtnClicked,
  handleMobileMenuClicked,
}) => {
  return (
    <div className="middleBar">
      <div className="d-flex justify-content-evenly align-items-center">
        <button
          type="button"
          className="mobileMenu"
          onClick={() => handleMobileMenuClicked()}
        >
          <RxHamburgerMenu className="mobileMenuIcon" />
        </button>

        {/* <input
        type="text"
        placeholder="Search colleges . . ."
        className="searchBar2"
      /> */}
        <span className="mSearchBar">
          <FuzzySearchInput />
        </span>

        <button
          className=" filterBtn"
          type="button"
          onClick={() => handleFilterBtnClicked()}
        >
          <MdOutlineTune className="filterIcon" />
          <span className="filterWord">Filter</span>
        </button>
      </div>
    </div>
  );
};
export default HeaderMiddleBar;
