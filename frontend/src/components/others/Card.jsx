import { GoArrowRight } from "react-icons/go";
import AnotherMentor from "./AnotherMentor";
import { TiDeleteOutline } from "react-icons/ti";
import { TiDelete } from "react-icons/ti";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wishlistActions } from "../../store/wishlistSlice";
import { selectedMentorActions } from "../../store/selectedMentorSlice";

const Card = ({ item }) => {
  let values = ["See Other Senior Friends", "See Less"];
  const [index, setIndex] = useState(0);
  const handleSeeOtherClicked = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  const wishlist = useSelector((store) => store.wishlist);
  let elementFound = wishlist.indexOf(item) >= 0;

  const dispatch = useDispatch();
  const handleAddToWishlist = () => {
    dispatch(wishlistActions.addToWishlist(item));
  };

  const handleRemoveFromWishlist = () => {
    dispatch(wishlistActions.removeFromWishlist(item));
  };

  const handleOnClickHowHeHelps = () => {
    dispatch(
      selectedMentorActions.setSelectedMentor({
        mentorImage: item.mentorImage,
        mentorName: item.mentorName,
        mentorFaculty: item.mentorFaculty,
        collegeName: item.collegeName,
        collegeDistrict: item.collegeDistrict,
      })
    );
  };
  return (
    <>
      <div className="card1 BimalCard shadow-lg">
        <div className="part1">
          <div className="part11">
            <img src={item.mentorImage} height="150px" width="150px" />
          </div>
          <div className="part12">
            <div className="lineHeight">
              <span>{item.mentorName}</span>
              <br />
              <span className="mentorFaculty">{item.mentorFaculty}</span>
              <br />
              <div className="lh-small">{item.collegeName}</div>
            </div>
            <button className="howHeHelps" onClick={handleOnClickHowHeHelps}>
              <Link to="/mentor_profile" className="fw-bold normalWtMbl">
                How {item.mentorGender === "M" ? "he" : "she"} Helps?
              </Link>
            </button>
            <div></div>
          </div>
        </div>

        {/* <div className="part2">
          <div className="accordion myAccordion" id="accordionEx">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${item.id.toString()}`}
                  aria-expanded="false"
                  aria-controls={item.id.toString()}
                  onClick={() => handleSeeOtherClicked()}
                >
                  <div className="text-center seeOther"> {values[index]}</div>
                </button>
              </h2>
              <div
                id={item.id.toString()}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {item.otherMentors.map((mentor) => (
                    <AnotherMentor
                      key={mentor.id}
                      mentor={mentor}
                      college={item.clzInfo.name}
                      district={item.clzInfo.district}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="part3">
          <div className="part31">
            <img src={item.collegeImage} height="100px" width="100%" />
          </div>
          <div className="part32">
            <div>
              {item.collegeName}, {item.collegeDistrict}
            </div>
            <div className="facultiesSize">
              {item.collegeFaculties.map((faculty) => (
                <span className="mx-1" key={faculty}>
                  {" "}
                  {faculty}
                </span>
              ))}
            </div>
            <div className="clzBtnsContainer">
              <button className="visitWebsite">
                <a href={item.collegeWebsiteLink} target="_blank">
                  Visit Website
                  <GoArrowRight />
                </a>{" "}
              </button>

              {elementFound ? (
                <button
                  className="addtoWishlist removeWishlist fw-bold"
                  onClick={handleRemoveFromWishlist}
                >
                  <TiDelete className="deleteIcon" /> Wishlist
                </button>
              ) : (
                <button
                  className="addtoWishlist addWishlist fw-bold"
                  onClick={handleAddToWishlist}
                >
                  <IoMdAddCircle className="addIcon" /> Wishlist
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
