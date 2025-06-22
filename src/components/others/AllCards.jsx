import { useSelector } from "react-redux";
import Card from "./Card";
import store from "../../store";

const AllCards = () => {
  const data = useSelector((store) => store.cards);
  return (
    <div className="allCards foggybg ">
      {data[0].items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};
export default AllCards;
