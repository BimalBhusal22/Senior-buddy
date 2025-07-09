import { useSelector } from "react-redux";
import ExtendedMentorInfo from "../components/mentor_profile/ExtendedMentorInfo";

const ExtendedMentorProfile = () => {
  const { mentor } = useSelector((store) => store.selectedMentor);
  return (
    <>
      <ExtendedMentorInfo />
      <h4 className="paymentStatement text-center mt-2 px-3 fw-bold">
        Isn't it Fair to Pay NRs. 200 for{" "}
        <span className="seniorName fontSize1-5rem fw-bold">{mentor.name}</span>
        's Valuable Time and Serious Efforts throught Your Journey?
      </h4>
      <p className="text-center fw-bold colorGray px-3">
        *Choose your desired payment method
      </p>
      <div className="d-flex flex-wrap justify-content-center mb-5 mt-4">
        <button type="button" className="paymentBtn mx-4 px-4 esewaBtn">
          <img src="images/esewa.webp" height="50px" className="esewaImg"></img>
        </button>
        <button type="button" className="paymentBtn mx-4 px-4 pb-1 khaltiBtn">
          <img src="images/khalti.png" height="40px"></img>
        </button>
      </div>
    </>
  );
};

export default ExtendedMentorProfile;
