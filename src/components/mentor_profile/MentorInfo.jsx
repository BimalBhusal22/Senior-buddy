import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const MentorInfo = () => {
  const navigate = useNavigate();

  const { mentor } = useSelector((store) => store.selectedMentor);

  const handleOnClickGetHelp = () => {
    let signedIn = true;
    signedIn ? navigate("/extended_mentor_profile") : navigate("/sign_up");
  };

  return (
    <div className="introContainer  py-4">
      <div className="part1 shadow-lg intro">
        <div className="part11">
          <img src={mentor.imageUrl} height="150px" width="150px" />
        </div>
        <div className="part12 fw-bold">
          {mentor.name}
          <br />
          {mentor.present}
          <br />
          {mentor.past}
          <br />
          <button className="fw-bold howHeHelps" onClick={handleOnClickGetHelp}>
            Get Help
          </button>
        </div>
      </div>
    </div>
  );
};
export default MentorInfo;
