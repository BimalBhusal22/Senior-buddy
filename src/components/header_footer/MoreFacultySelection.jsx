import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "../../store/filterSlice";
import { useNavigate } from "react-router-dom";

function MoreFacultySelection() {
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const dispath = useDispatch();

  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedFaculty(event.target.value);
    event.target.value &&
      dispath(filterActions.applyDisciplineFilter(event.target.value));
    navigate("/filter_output");
  };

  return (
    <span>
      <select value={selectedFaculty} onChange={handleChange}>
        <option value="">select others</option>
        <option value="+2 Sc">+2 Science</option>
        <option value="+2 Mgt">+2 Management</option>
        <option value="+2 Edu">+2 Education</option>
        <option value="BE">Engineering</option>
      </select>
    </span>
  );
}

export default MoreFacultySelection;
