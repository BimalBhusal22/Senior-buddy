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
    fetch("http://localhost:7000/api/v1/admin/get_all_mentors", { signal })
      .then((res) => res.json())
      .then((items) => {
        items.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(cardsActions.addInitialCards(items.data));
        dispatch(searchActions.addInitialCards(items.data));
        dispatch(filterActions.addInitialCards(items.data));
      });

    return () => {
      controller.abort();
    };
  }, []);

  return <></>;
};
export default FetchItems;
