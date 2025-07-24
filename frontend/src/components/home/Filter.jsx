import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterActions } from "../../store/filterSlice";
import AllDistricts from "./AllDistricts";

const Filter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClickFaculty = (faculty) => {
    navigate("/filter_output");
    dispatch(filterActions.applyDisciplineFilter(faculty));
  };
  const handleOnClickLevel = (level) => {
    navigate("/filter_output");
    dispatch(filterActions.applyLevelFilter(level));
  };

  return (
    <div className="test">
      <div className="filter1 d-flex justify-content-center">
        <div>
          <h2>Filter</h2>
          <div>
            <h3 className="filterHeading">Discipline</h3>
            <div className="ms-1 ps-1 oneFilter shadow-sm">
              <input
                type="radio"
                id="bbs"
                name="filter1"
                onClick={() => handleOnClickFaculty("BBS")}
              />
              <label htmlFor="bbs">
                <span className="ms-1">BBS</span>
              </label>
              <br />
              <input
                type="radio"
                id="bba"
                name="filter1"
                onClick={() => handleOnClickFaculty("BBA")}
              />
              <label htmlFor="bba">
                <span className="ms-1">BBA</span>
              </label>
              <br />
              <input
                type="radio"
                id="bhm"
                name="filter1"
                onClick={() => handleOnClickFaculty("BHM")}
              />
              <label htmlFor="bhm">
                <span className="ms-1">BHM</span>
              </label>
              <br />
              <input
                type="radio"
                id="bsccsit"
                name="filter1"
                onClick={() => handleOnClickFaculty("BSc CSIT")}
              />
              <label htmlFor="bsccsit">
                <span className="ms-1">BSc. CSIT</span>
              </label>
              <br />
              <input
                type="radio"
                id="bca"
                name="filter1"
                onClick={() => handleOnClickFaculty("BCA")}
              />
              <label htmlFor="bca">
                <span className="ms-1">BCA</span>
              </label>
              <br />
              <input
                type="radio"
                id="+2Sc"
                name="filter1"
                onClick={() => handleOnClickFaculty("+2 Sc")}
              />
              <label htmlFor="+2Sc">
                <span className="ms-1">+2 Science</span>
              </label>
              <br />
              <input
                type="radio"
                id="+2Mgt"
                name="filter1"
                onClick={() => handleOnClickFaculty("+2 Mgt")}
              />
              <label htmlFor="+2Mgt">
                <span className="ms-1">+2 Management</span>
              </label>
              <br />
              <input
                type="radio"
                id="+2Edu"
                name="filter1"
                onClick={() => handleOnClickFaculty("+2 Edu")}
              />
              <label htmlFor="+2Edu">
                <span className="ms-1">+2 Education</span>
              </label>
              <br />
              <input
                type="radio"
                id="engineering"
                name="filter1"
                onClick={() => handleOnClickFaculty("Engineering")}
              />
              <label htmlFor="engineering">
                <span className="ms-1">Engineering</span>
              </label>
              <br />
            </div>
          </div>

          <div>
            <h3 className="filterHeading mt-2">District</h3>
            <AllDistricts />
          </div>

          <div>
            <h3 className="filterHeading mt-2">Level</h3>
            <div className="ms-1 shadow-sm">
              <input
                type="radio"
                id="+2"
                name="filter3"
                onClick={() => handleOnClickLevel("+2")}
              />
              <label htmlFor="+2">
                <span className="ms-1">+2</span>
              </label>
              <br />
              <input
                type="radio"
                id="bachelor"
                name="filter3"
                onClick={() => handleOnClickLevel("bachelor")}
              />
              <label htmlFor="bachelor">
                <span className="ms-1">Bachelor</span>
              </label>
              <br />
              <input
                type="radio"
                id="master"
                name="filter3"
                onClick={() => handleOnClickLevel("master")}
              />
              <label htmlFor="master">
                <span className="ms-1">Master</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;
