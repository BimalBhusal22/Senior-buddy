import Header from "../components/header_footer/Header.jsx";
import Footer from "../components/header_footer/Footer.jsx";
import AnyQueries from "../components/others/AnyQueries.jsx";
import MobileMenu from "../components/others/MobileMenu.jsx";
import MobileFilter from "../components/others/MobileFilter.jsx";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "../components/others/ScrollToTop.jsx";
import FetchItems from "../components/others/FetchItems.jsx";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/others/LoadingSpinner.jsx";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const handleMobileMenuClicked = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const handleFilterBtnClicked = () => {
    setShowMobileFilter(!showMobileFilter);
  };

  const fetchStatus = useSelector((store) => store.fetchStatus);

  const [name, setName] = useState("Bimal");

  return (
    <>
      <FetchItems />
      <ScrollToTop />
      <Header
        handleMobileMenuClicked={handleMobileMenuClicked}
        handleFilterBtnClicked={handleFilterBtnClicked}
      />

      {/* {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />} */}

      <Outlet/>
      <Footer />
      <AnyQueries />
      {showMobileMenu && (
        <MobileMenu handleMobileMenuClicked={handleMobileMenuClicked} />
      )}
      {showMobileFilter && (
        <MobileFilter handleFilterBtnClicked={handleFilterBtnClicked} />
      )}
    </>
  );
}

export default App;
