import { useNavigate } from "react-router-dom";

const Failure = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center py-5 my-5">
      <div>
        <h1>Payment Failed!</h1>
        <p>There was an issue with your payment. Please try again.</p>
        <p className="text-center">
        <button onClick={() => navigate("/")} className="go-home-button">
          Go to Homepage
        </button>
        </p>
      </div>
    </div>
  );
};

export default Failure;
