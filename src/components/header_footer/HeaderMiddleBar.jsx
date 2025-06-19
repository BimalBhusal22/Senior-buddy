import { MdOutlineTune } from "react-icons/md";

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
    </div>
  );
};
export default HeaderMiddleBar;
