import { Link } from "react-router-dom";

const AnotherMentor = ({ mentor }) => {
  return (
    <div className="part1">
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
        <button className="howHeHelps">
          <Link to="/mentor_profile" className="fw-bold normalWtMbl">
            How she Helps?
          </Link>
        </button>
      </div>
    </div>
  );
};
export default AnotherMentor;
