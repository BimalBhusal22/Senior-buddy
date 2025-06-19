const MentorInfo = () => {
  let mentor = {
    id: 1,
    imageUrl: "images/senior1.png",
    name: "Jivan",
    present: "3rd Yr, BSc. CSIT",
    past: "1st Yr: 85%, 87%",
    pageLink: "profile.html",
    phoneNo: "9111111111",
    fbProfileLink: "https://www.facebook.com/jivan.gaire.79",
    email: "jivangaire@gmail.com",
  };
  return (
    <div className="introContainer  py-3 m4bottom">
      <div className="part1 shadow-lg intro">
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
          <button className="fw-bold howHeHelps">Get Help</button>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default MentorInfo;
