import { Outlet } from "react-router-dom";
import SlogansContainer from "../components/home/SlogansContainer";

const Container = () => {
  return (
    <>
      <SlogansContainer />
      <Outlet/>
    </>
  );
};
export default Container;
