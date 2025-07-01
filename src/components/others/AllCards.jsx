import { useSelector } from "react-redux";
import Card from "./Card";
import store from "../../store";
import LoadingSpinner from "./LoadingSpinner";

const AllCards = ({ items }) => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      {fetchStatus.currentlyFetching ? (
        <LoadingSpinner />
      ) : items.length === 0 ? (
        <p className="fs-3 fw-bold noResultsMsg">
          No Matching Results to Show !
        </p>
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
