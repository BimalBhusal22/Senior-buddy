import { useSelector } from "react-redux";
import AllCards from "../components/others/AllCards";
import {
  selectedDiscipline,
  selectedDistrict,
  selectedLevel,
} from "../store/filterSlice";

const FilterOutput = () => {
  const items = useSelector((store) => store.filter);
  //   console.log("FilterOutput", items[0]);
  return (
    <div>
      {(selectedDiscipline || selectedDistrict || selectedLevel) && (
        <div className="shadow-lg py-2 px-3 mb-3 msgbox d-flex flex-wrap justify-content-center">
          {selectedDiscipline && (
            <span className="mx-3">
              <span className="fw-bold facultyColor">Discipline</span> :{" "}
              {selectedDiscipline}
            </span>
          )}
          {selectedDistrict && (
            <span className="mx-3">
              <span className="fw-bold facultyColor">District</span> :{" "}
              {selectedDistrict}
            </span>
          )}
          {selectedLevel && (
            <span className="mx-3">
              <span className="fw-bold facultyColor">Level</span> :{" "}
              {selectedLevel}
            </span>
          )}
        </div>
      )}

      <AllCards items={items} />
    </div>
  );
};
export default FilterOutput;
