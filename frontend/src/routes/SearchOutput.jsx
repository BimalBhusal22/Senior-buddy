import { useSelector } from "react-redux";
import AllCards from "../components/others/AllCards";

const SearchOutput = () => {
  const items = useSelector((store) => store.search);
  //   console.log("SearchOutput", items[0]);
  return (
    <>
      <div>
        {items.length === 1 && (
          <center className="shadow-lg p-2 mb-3 msgbox">
            <span>Search result for "{items[0].clzInfo.name}"</span>
          </center>
        )}
        <AllCards items={items} />
      </div>
    </>
  );
};
export default SearchOutput;
