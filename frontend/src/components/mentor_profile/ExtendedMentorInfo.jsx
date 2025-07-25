import { useSelector } from "react-redux";

const ExtendedMentorInfo = () => {
  const {
    mentorImage,
    mentorName,
    mentorFaculty,
    collegeName,
    collegeDistrict,
  } = useSelector((store) => store.selectedMentor);
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
          {collegeDistrict}
        </div>
      </div>
    </div>
  );
};
export default ExtendedMentorInfo;
