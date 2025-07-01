import { Outlet } from "react-router-dom";
import PCFilter from "./PCFilter.jsx";

const BigContainer = () => {
  return (
    <div className="bigContent mb-4">
      <PCFilter />
      <Outlet />
    </div>
  );
};
export default BigContainer;
