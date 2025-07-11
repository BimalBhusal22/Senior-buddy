import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedMentorActions } from "../../store/selectedMentorSlice";

const AnotherMentor = ({ mentor, college, district }) => {
  const dispatch = useDispatch();

  const handleOnClickHowHeHelps = () => {
    dispatch(
      selectedMentorActions.setSelectedMentor({
        mentor: mentor,
        college: college,
        district: district,
      })
    );
  };
  return (
    <div className="part1 my-2">
      <div className="part11">
        <img src={mentor.imageUrl} height="150px" width="150px" />
      </div>
      <div className="part12">
        {mentor.name}
        <br />
        {mentor.present}
        <br />
        {mentor.past}
        <br />
        <button className="howHeHelps" onClick={handleOnClickHowHeHelps}>
          <Link to="/mentor_profile" className="fw-bold normalWtMbl">
            How {mentor.gender === "M" ? "he" : "she"} Helps?
          </Link>
        </button>
      </div>
    </div>
  );
};
export default AnotherMentor;
