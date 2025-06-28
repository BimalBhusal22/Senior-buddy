import { useSelector } from "react-redux";
import BigContainer from "../components/home/BigContainer";
import SlogansContainer from "../components/home/SlogansContainer";

const Home = () => {
  const items = useSelector((store) => store.cards);
  // console.log("Home", items);
  return (
    <>
      <SlogansContainer />
      <BigContainer items={items} />
    </>
  );
};
export default Home;
