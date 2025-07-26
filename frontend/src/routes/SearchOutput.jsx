import { useSelector } from "react-redux";
import AllCards from "../components/others/AllCards";

const SearchOutput = () => {
  const items = useSelector((store) => store.search);
  return (
    <>
      <div>
        {items.length < 5 && items.length > 0 && (
          <div className="shadow-lg p-2 mb-3 msgbox text-center">
            <span>Search result for "{items[0].collegeName}"</span>
          </div>
        )}

        <AllCards items={items} />
      </div>
    </>
  );
};
export default SearchOutput;
