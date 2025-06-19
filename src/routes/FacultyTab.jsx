import { useState } from "react";
import AllCards from "../components/others/AllCards";

const FacultyTab = ({ selectedFaculty }) => {
  let data = {
    items: [
      {
        id: 1,
        clzInfo: {
          imageUrl: "images/ButwalMultiple.jpg",
          name: "Butwal Multiple Campus",
          district: "Butwal",
          faculties: "o Bsc. CSIT o BBA o BSc o BBS o more",
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
      },
      {
        id: 2,
        clzInfo: {
          imageUrl: "images/KathmanduModal.jpg",
          name: "Kathmandu Modal Campus",
          district: "Kathmandu",
          faculties: "o +2 Sc o +2 Mgt o BBA o BBS o more",
          websiteLink: "https://ktmmodelcollege.edu.np/",
        },
        mentor1: {
          id: 1,
          imageUrl: "images/senior2.png",
          name: "Anuradha",
          present: "12, Management",
          past: "11: 3.7 GPA",
          pageLink: "profile.html",
          phoneNo: "9111111111",
          fbProfileLink: "https://www.facebook.com/jivan.gaire.79",
          email: "jivangaire@gmail.com",
        },
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
      },
    ],
  };

  const [selectedFaculty, setSelectedFaculty] = useState();

  const handleOnFacultyClicked = (clickedFaculty) => {
    setSelectedFaculty(clickedFaculty);
  };

  return (
    <>
      <div className="text-center fs-3 py3bottom ">
        Available{" "}
        <span className="myHeading">{selectedFaculty.toUpperCase()} </span>
        Colleges and Mentors for You
      </div>
      <div className="py4bottom">
        <AllCards data={data} />
      </div>
    </>
  );
};
export default FacultyTab;
