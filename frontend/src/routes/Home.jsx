import { useSelector } from "react-redux";
import AllCards from "../components/others/AllCards";

const Home = () => {
  const items = useSelector((store) => store.cards);
  return (
    <>
      <AllCards items={items} />
    </>
  );
};
export default Home;
