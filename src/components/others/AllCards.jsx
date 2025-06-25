import { useSelector } from "react-redux";
import Card from "./Card";
import store from "../../store";
import LoadingSpinner from "./LoadingSpinner";

const AllCards = ({items}) => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      {fetchStatus.currentlyFetching ? (
        <LoadingSpinner />
      ) : (
        <div className="allCards foggybg ">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};
export default AllCards;
