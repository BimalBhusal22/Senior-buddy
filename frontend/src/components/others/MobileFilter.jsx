import { RxCross1 } from "react-icons/rx";
import Filter from "../home/Filter";

const MobileFilter = ({ handleFilterBtnClicked }) => {
  return (
    <section className="mobileFilterContainer shadow-lg pt-4 pt-sm-5">
      <div className="d-flex justify-content-center">
        <div className=" foggybg mobileFilter d-flex justify-content-center">
          <div>
            <div className="container-fluid ">
              <div className="container p-0">
                <div className="row p-0">
                  <div className="col-12 d-flex justify-content-end p-0">
                    <button
                      type="button"
                      className="crossBtn"
                      onClick={() => handleFilterBtnClicked()}
                    >
                      <RxCross1 className="crossIcon colorBlack" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Filter />
          </div>
        </div>
      </div>
    </section>
  );
};
export default MobileFilter;
