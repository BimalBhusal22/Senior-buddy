import UpdateCollegeInfo from "./UpdateCollegeInfo";
import UpdateMentor from "./UpdateMentor";

const UpdateCollege = () => {
  let collegeToUpdate = {
    id: 1,
    clzInfo: {
      imageUrl: "images/ButwalMultiple.jpg",
      name: "Butwal Multiple Campus",
      district: "Rupandehi",
      levels: ["bachelor", "master"],
      faculties: ["BSc CSIT", "BBA", "BSc", "BBS", "more"],
      websiteLink: "https://bumc.tu.edu.np/",
    },
    mentor1: {
      id: 1,
      imageUrl: "images/senior1.png",
      name: "Jivan",
      present: "3rd Yr, BSc. CSIT",
      past: "1st Yr: 85%, 87%",
      pageLink: "profile.html",
      phoneNo: "9111111111",
      fbProfileLink: "https://www.facebook.com/jivan.gaire.79",
      email: "jivangaire@gmail.com",
    },
    noOfOtherMentors: 2,
    otherMentors: [
      {
        id: 2,
        imageUrl: "images/senior2.png",
        name: "Anuradha",
        present: "12, Management",
        past: "11: 3.7 GPA",
        pageLink: "profile.html",
        phoneNo: "9111111111",
        fbProfileLink: "https://www.facebook.com/jivan.gaire.79",
        email: "jivangaire@gmail.com",
      },
      {
        id: 3,
        imageUrl: "images/senior3.png",
        name: "Sushila",
        present: "12, Science",
        past: "11: 3.86 GPA",
        pageLink: "profile.html",
        phoneNo: "9111111111",
        fbProfileLink: "https://www.facebook.com/jivan.gaire.79",
        email: "jivangaire@gmail.com",
      },
    ],
  };
  return (
    <div className="my-5">
      <h1 className="text-center px-3">
        Update College and it's Mentors Information
      </h1>

      <h3 className="text-center p-3">
        Enter College Name:{" "}
        <input
          type="text"
          id="collegeNameInputBox"
          className=" valuePart collegeNameInput ms-sm-3"
          placeholder="College Name"
        />{" "}
      </h3>

      <UpdateCollegeInfo data={collegeToUpdate.clzInfo} />

      <div className="col-12 text-center fs-3 myHeading mt-3">
        Update Mentors' Information
      </div>

      <UpdateMentor rank={1} data={collegeToUpdate.mentor1} />

      <div className="col-12 px-4 px-sm-4 py-3 d-flex justify-content-center">
        <span>
          <b className="keyPart">No of Other Mentors: </b>
          <input
            type="number"
            className="valuePart"
            defaultValue={collegeToUpdate.noOfOtherMentors}
            placeholder="1 or 2 or 3 ..."
            onChange={(event) => handleOnChange(event)}
          />
        </span>
      </div>

      {collegeToUpdate.otherMentors.length > 0 &&
        collegeToUpdate.otherMentors.map((anotherMentor) => (
          <UpdateMentor
            key={anotherMentor.id}
            rank={collegeToUpdate.otherMentors.indexOf(anotherMentor) + 2}
            data={anotherMentor}
          />
        ))}

      <div className="d-flex justify-content-center py-5">
        <div>
          <button className="mySignUpBtn" id="updateCollegeAndMentorsBtn">
            Update College & Mentors
          </button>
        </div>
      </div>
    </div>
  );
};
export default UpdateCollege;
