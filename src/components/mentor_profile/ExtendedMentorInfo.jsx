import { useSelector } from "react-redux";

const ExtendedMentorInfo = () => {
  const { mentor, college } = useSelector(
    (store) => store.selectedMentor
  );
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
          {college}
        </div>
      </div>
    </div>
  );
};
export default ExtendedMentorInfo;
