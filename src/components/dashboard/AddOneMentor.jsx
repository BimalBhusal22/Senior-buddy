const AddOneMentor = ({ rank }) => {
  return (
    <>
      <div className="container-fluid py-1">
        <div className="container">
          <div className="row ">
            <div className="col-12 fs-4 fw-bold text-center">Mentor {rank}</div>

            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
              <span className="float-sm-end">
                <span className="keyPart">Name: </span>
                <input
                  type="text"
                  className="valuePart"
                  placeholder="Mentor Name"
                />
              </span>
            </div>

            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-start">
              <span className="float-sm-end">
                <span className="keyPart">Present: </span>
                <input
                  type="text"
                  className="valuePart"
                  placeholder="Year/Grade, % or GPA"
                />
              </span>
            </div>

            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
              <span className="float-sm-end">
                <span className="keyPart">Past: </span>
                <input
                  type="text"
                  className="valuePart"
                  placeholder="Year/Grade, % or GPA"
                />
              </span>
            </div>

            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-start">
              <span className="float-sm-end">
                <span className="keyPart">Phone Number: </span>
                <input type="text" className="valuePart" placeholder="" />
              </span>
            </div>

            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
              <span className="float-sm-end">
                <span className="keyPart">Facebook Link: </span>
                <input
                  type="url"
                  className="valuePart"
                  placeholder="facebook profile link"
                />
              </span>
            </div>

            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-start">
              <span className="float-sm-end">
                <span className="keyPart">Email: </span>
                <input
                  type="email"
                  className="valuePart"
                  placeholder="mentor@email.com"
                />
              </span>
            </div>

            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
              <span className="float-sm-end">
                <span className="keyPart">Image: </span>
                <input
                  type="file"
                  accept="image/*"
                  className="valuePart imageInput"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddOneMentor;
