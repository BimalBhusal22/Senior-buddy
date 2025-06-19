import Helps from "../components/mentor_profile/Helps";
import MentorInfo from "../components/mentor_profile/MentorInfo";

const MentorProfile = () => {
  return (
    <>
      <div className="myHeading text-center fs-3 m4top">Mentor Profile</div>
      <MentorInfo />
      <Helps />
    </>
  );
};
export default MentorProfile;
