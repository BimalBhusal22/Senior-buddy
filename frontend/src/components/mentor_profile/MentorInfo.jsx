import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const MentorInfo = () => {
  const navigate = useNavigate();

  const { mentorImage, mentorName, mentorFaculty, collegeName } = useSelector(
    (store) => store.selectedMentor
  );

  const userProfile = useSelector((store) => store.userProfile);
  const user = JSON.parse(localStorage.getItem("user")) || userProfile;

  const handleOnClickGetHelp = () => {
    user.user.role !== ""
      ? navigate("/extended_mentor_profile")
      : navigate("/sign_up");
  };

  return (
    <div className="introContainer  py-4">
      <div className="part1 shadow-lg intro">
        <div className="part11">
          <img src={mentorImage} height="150px" width="150px" />
        </div>
        <div className="part12 fw-bold">
          {mentorName}
          <br />
          <span className="mentorFaculty">{mentorFaculty}</span>
          <br />
          {collegeName}
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
