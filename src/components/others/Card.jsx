import { GoArrowRight } from "react-icons/go";
import AnotherMentor from "./AnotherMentor";
import { TiDeleteOutline } from "react-icons/ti";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

const Card = ({ item }) => {
  let values = ["See Other Senior Friends", "See Less"];
  const [index, setIndex] = useState(0);
  const handleSeeOtherClicked = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  return (
    <>
      <div className="card1 BimalCard shadow-lg">
        <div className="part1">
          <div className="part11">
            <img src={item.mentor1.imageUrl} height="150px" width="150px" />
          </div>
          <div className="part12">
            {item.mentor1.name}
            <br />
            {item.mentor1.present}
            <br />
            {item.mentor1.past}
            <br />
            <button className="howHeHelps">
              <Link to="/mentor_profile" className="fw-bold normalWtMbl">
                How he Helps?
              </Link>
            </button>
            <div></div>
          </div>
        </div>

        <div className="part2">
          <div className="accordion myAccordion" id="accordionEx">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed seeOther"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${item.id.toString()}`}
                  aria-expanded="false"
                  aria-controls={item.id.toString()}
                  onClick={() => handleSeeOtherClicked()}
                >
                  {values[index]}
                </button>
              </h2>
              <div
                id={item.id.toString()}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {item.otherMentors.map((mentor) => (
                    <AnotherMentor key={mentor.id} mentor={mentor} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="part3">
          <div className="part31">
            <img src={item.clzInfo.imageUrl} height="100px" width="100%" />
          </div>
          <div className="part32">
            <div>
              {item.clzInfo.name}, {item.clzInfo.district}
            </div>
            <div className="facultiesSize">{item.clzInfo.faculties} </div>
            <div className="clzBtnsContainer">
              <button className="visitWebsite">
                <a href={item.clzInfo.websiteLink}>
                  Visit Website
                  <GoArrowRight />
                </a>{" "}
              </button>

              <button className="addtoWishlist xWishlist fw-bold">
                <IoMdAddCircleOutline className="addIcon" /> Wish-List
              </button>

              {/* <button className="addtoWishlist xWishlist fw-bold">
                <TiDeleteOutline className="deleteIcon" /> Wishlist
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
