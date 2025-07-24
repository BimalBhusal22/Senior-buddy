import { useEffect, useState } from "react";
import "../../css/10_popUpNotification.css";

const PopupNotification = ({ message, isSuccess }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`popup-notification ${isSuccess ? "success" : "error"}`}>
      <div className="message">{message}</div>
      {/* <div className="progress-bar-container">
        <div className="progress-bar"></div>
      </div> */}
    </div>
  );
};

export default PopupNotification;
