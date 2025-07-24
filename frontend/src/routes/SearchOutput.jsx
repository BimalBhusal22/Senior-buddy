import { useSelector } from "react-redux";
import AllCards from "../components/others/AllCards";

const SearchOutput = () => {
  const items = useSelector((store) => store.search);
    console.log("SearchOutput", items);
  return (
    <>
      <div>
        {items.length < 5 && (
          <center className="shadow-lg p-2 mb-3 msgbox">
            <span>Search result for "{items[0].collegeName}"</span>
          </center>
        )}
        <AllCards items={items} />
      </div>
    </>
  );
};
export default SearchOutput;
