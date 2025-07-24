import { useSelector } from "react-redux";
import Card from "./Card";
import LoadingSpinner from "./LoadingSpinner";
import { useState } from "react";

const AllCards = ({ items }) => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / 9);

  const startIndex = (currentPage - 1) * 9;
  const currentItems = items.slice(startIndex, startIndex + 9);

  const handleOnPreviousPageClicked = () => {
    setCurrentPage((p) => p - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleOnNextPageClicked = () => {
    setCurrentPage((p) => p + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {fetchStatus.currentlyFetching ? (
        <LoadingSpinner />
      ) : items.length === 0 ? (
        <p className="fs-3 fw-bold noResultsMsg">
          No Matching Results to Show !
        </p>
      ) : (
        <div>
          <div className="allCards foggybg ">
            {currentItems.map((item) => (
              <Card key={item._id} item={item} />
            ))}
          </div>

          {/* Pagination Logic */}
          <div className="mt-4 flex items-center gap-4 d-flex justify-content-center align-items-center">
            <button
              onClick={handleOnPreviousPageClicked}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 paginationBtn"
            >
              Previous
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleOnNextPageClicked}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 paginationBtn"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default AllCards;
