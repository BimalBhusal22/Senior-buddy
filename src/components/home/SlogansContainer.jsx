import TypingText from "./TypingText";

const SlogansContainer = () => {
  return (
    <div className="slogansContainer ">
      
      <div className="slogan1 fs-1 fw-bold">
        Get Full <span className="guidance fs-1 fw-bold">Guidance</span> from
        Senior <span className="topper fs-1 fw-bold">Topper</span> Students
      </div>

      <TypingText text="Know ground reality of colleges and courses that colleges will never tell you" speed={40} />

      {/* <div className="slogan2 fs-3 fw-bold">
        Know ground reality of colleges and courses that colleges will never tell you
      </div> */}
    </div>
  );
};
export default SlogansContainer;
