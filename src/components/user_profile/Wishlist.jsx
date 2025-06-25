import { useSelector } from "react-redux";
import AllCards from "../others/AllCards";

const Wishlist = () => {
  // let items = {
  //   items: [
  //     {
  //       id: 1,
  //       clzInfo: {
  //         imageUrl: "images/ButwalMultiple.jpg",
  //         name: "Butwal Multiple Campus",
  //         district: "Rupandehi",
  //         levels: ["bachelor", "master"],
  //         faculties: ["BSc CSIT", "BBA", "BSc", "BBS", "more"],
  //         websiteLink: "https://bumc.tu.edu.np/",
  //       },
  //       mentor1: {
  //         id: 1,
  //         imageUrl: "images/senior1.png",
  //         name: "Jivan",
  //         present: "3rd Yr, BSc. CSIT",
  //         past: "1st Yr: 85%, 87%",
  //         pageLink: "profile.html",
  //         phoneNo: "9111111111",
  //         fbProfileLink: "https://www.facebook.com/jivan.gaire.79",
  //         email: "jivangaire@gmail.com",
  //       },
  //       noOfOtherMentors: 2,
  //       otherMentors: [
  //         {
  //           id: 2,
  //           imageUrl: "images/senior2.png",
  //           name: "Anuradha",
  //           present: "12, Management",
  //           past: "11: 3.7 GPA",
  //           pageLink: "profile.html",
  //           phoneNo: "9111111111",
  //           fbProfileLink: "https://www.facebook.com/jivan.gaire.79",
  //           email: "jivangaire@gmail.com",
  //         },
  //         {
  //           id: 3,
  //           imageUrl: "images/senior3.png",
  //           name: "Sushila",
  //           present: "12, Science",
  //           past: "11: 3.86 GPA",
  //           pageLink: "profile.html",
  //           phoneNo: "9111111111",
  //           fbProfileLink: "https://www.facebook.com/jivan.gaire.79",
  //           email: "jivangaire@gmail.com",
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       clzInfo: {
  //         imageUrl: "images/KathmanduModal.jpg",
  //         name: "Kathmandu Model Campus",
  //         district: "Kathmandu",
  //         levels: ["+2", "Bachelor"],
  //         faculties: ["+2 Sc", "+2 Mgt", "BBA", "BBS", "more"],
  //         websiteLink: "https://ktmmodelcollege.edu.np/",
  //       },
  //       mentor1: {
  //         id: 1,
  //         imageUrl: "images/senior2.png",
  //         name: "Anuradha",
  //         present: "12, Management",
  //         past: "11: 3.7 GPA",
  //         pageLink: "profile.html",
  //         phoneNo: "9111111111",
  //         fbProfileLink: "https://www.facebook.com/jivan.gaire.79",
  //         email: "jivangaire@gmail.com",
  //       },
  //       noOfOtherMentors: 2,
  //       otherMentors: [
  //         {
  //           id: 2,
  //           imageUrl: "images/senior2.png",
  //           name: "Anuradha",
  //           present: "12, Management",
  //           past: "11: 3.7 GPA",
  //           pageLink: "profile.html",
  //           phoneNo: "9111111111",
  //           fbProfileLink: "https://www.facebook.com/jivan.gaire.79",
  //           email: "jivangaire@gmail.com",
  //         },
  //         {
  //           id: 3,
  //           imageUrl: "images/senior3.png",
  //           name: "Sushila",
  //           present: "12, Science",
  //           past: "11: 3.86 GPA",
  //           pageLink: "profile.html",
  //           phoneNo: "9111111111",
  //           fbProfileLink: "https://www.facebook.com/jivan.gaire.79",
  //           email: "jivangaire@gmail.com",
  //         },
  //       ],
  //     },
  //   ],
  // };

  const { items } = useSelector((store) => store.cards);
  const wishlist = useSelector((store) => store.wishlist);

  const wishlistItems = items.filter((item) => wishlist.includes(item.id));
  return (
    <>
      <div className="text-center fs-3 myHeading py3bottom mt-2">
        Your Wishlist
      </div>
      <div className="py4bottom">
        {wishlistItems.length === 0 ? (
          <p className="wishlistEmptyMsg">Your Wishlist is Empty for Now !</p>
        ) : (
          <AllCards items={wishlistItems} />
        )}
      </div>
    </>
  );
};
export default Wishlist;
