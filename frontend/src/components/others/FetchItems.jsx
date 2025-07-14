import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardsActions } from "../../store/cardsSlice";
import { fetchStatusActions } from "../../store/fetchStatusSlice";
import { searchActions } from "../../store/searchSlice";
import { filterActions } from "../../store/filterSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchdone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((items) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(cardsActions.addInitialCards(items));
        dispatch(searchActions.addInitialCards(items));
        dispatch(filterActions.addInitialCards(items));
      });

    return () => {
      controller.abort();
    };
  }, []);

  return <></>;
};
export default FetchItems;
