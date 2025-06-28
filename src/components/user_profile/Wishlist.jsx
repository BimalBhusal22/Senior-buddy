import { useSelector } from "react-redux";
import AllCards from "../others/AllCards";

const Wishlist = () => {
  const wishlist = useSelector((store) => store.wishlist);

  return (
    <>
      <div className="text-center fs-3 myHeading py3bottom mt-2">
        Your Wishlist
      </div>
      <div className="py4bottom">
        {wishlist.length === 0 ? (
          <p className="wishlistEmptyMsg">Your Wishlist is Empty for Now !</p>
        ) : (
          <AllCards items={wishlist} />
        )}
      </div>
    </>
  );
};
export default Wishlist;
