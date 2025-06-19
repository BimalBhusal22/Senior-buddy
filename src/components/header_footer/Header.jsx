import HeaderLowerNavbar from "./HeaderLowerNavbar";
import HeaderMiddleBar from "./HeaderMiddleBar";
import HeaderUpperNavbar from "./HeaderUpperNavbar";

const Header = ({ handleMobileMenuClicked, handleFilterBtnClicked }) => {
  return (
    <header className="shadow myHeader">
      <HeaderUpperNavbar handleMobileMenuClicked={handleMobileMenuClicked} />
      <HeaderMiddleBar handleFilterBtnClicked={handleFilterBtnClicked} />
      <HeaderLowerNavbar />
    </header>
  );
};
export default Header;
