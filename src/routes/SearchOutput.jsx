import { useSelector } from "react-redux";
import BigContainer from "../components/home/BigContainer";
import SlogansContainer from "../components/home/SlogansContainer";

const SearchOutput = () => {
  const items = useSelector((store) => store.search);
  //   console.log("SearchOutput", items[0]);
  return (
    <>
      <SlogansContainer />
      {items.length === 1 && (
        <p className="text-center mt30px">
          Search result for "{items[0].clzInfo.name}"
        </p>
      )}

      <BigContainer items={items} />
    </>
  );
};
export default SearchOutput;
