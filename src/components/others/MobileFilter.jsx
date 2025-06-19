import { RxCross1 } from "react-icons/rx";

const MobileFilter = ({ handleFilterBtnClicked }) => {
  return (
    <section className="mobileFilterContainer shadow-lg pt-4 pt-sm-5">
      <div className="d-flex justify-content-center">
        <div className="filter foggybg mobileFilter d-flex justify-content-center">
          <div>
            <div className="container-fluid ">
              <div className="container p-0">
                <div className="row p-0">
                  <div className="col-6 fs-3 fw-bold p-0 pb-2 pb-sm-3">
                    Filter
                  </div>

                  <div className="col-6 pb-2 pb-sm-3  d-flex justify-content-end p-0">
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

            <div className="filter1">
              <h5>Discipline</h5>
              <input type="text" placeholder="Search..." />
              <br />
              <input type="radio" name="filter1" />
              Science
              <br />
              <input type="radio" name="filter1" />
              Management
              <br />
              <input type="radio" name="filter1" />
              Education
            </div>
            <div className="filter1">
              <h5>District</h5>
              <input type="text" placeholder="Search..." />
              <br />
              <input type="radio" name="filter1" />
              Kathmandu
              <br />
              <input type="radio" name="filter1" />
              Lalitpur
              <br />
              <input type="radio" name="filter1" />
              Rupandehi
            </div>
            <div className="filter1">
              <h5>Level</h5>
              <input type="radio" name="filter1" />
              +2
              <br />
              <input type="radio" name="filter1" />
              Bachelors
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MobileFilter;
