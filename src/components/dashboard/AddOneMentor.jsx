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
                  name="name"
                  className="valuePart"
                  placeholder="Mentor Name"
                  required
                />
              </span>
            </div>

            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-start">
              <span className="float-sm-end">
                <span className="keyPart">Gender: </span>
                <input
                  type="text"
                  name="gender"
                  className="valuePart"
                  placeholder="M or F"
                  required
                />
              </span>
            </div>

            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
              <span className="float-sm-end">
                <span className="keyPart">Present: </span>
                <input
                  type="text"
                  name="present"
                  className="valuePart"
                  placeholder="Year/Grade, % or GPA"
                  required
                />
              </span>
            </div>

            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-start">
              <span className="float-sm-end">
                <span className="keyPart">Past: </span>
                <input
                  type="text"
                  name="past"
                  className="valuePart"
                  placeholder="Year/Grade, % or GPA"
                />
              </span>
            </div>

            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
              <span className="float-sm-end">
                <span className="keyPart">Phone Number: </span>
                <input
                  type="text"
                  name="phoneNo"
                  className="valuePart"
                  placeholder=""
                  required
                />
              </span>
            </div>

            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-start">
              <span className="float-sm-end">
                <span className="keyPart">Facebook Link: </span>
                <input
                  type="url"
                  name="fbProfileLink"
                  className="valuePart"
                  placeholder="facebook profile link"
                />
              </span>
            </div>

            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
              <span className="float-sm-end">
                <span className="keyPart">Email: </span>
                <input
                  type="email"
                  name="email"
                  className="valuePart"
                  placeholder="mentor@email.com"
                  required
                />
              </span>
            </div>

            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-start">
              <span className="float-sm-end">
                <span className="keyPart">Image: </span>
                <input
                  type="file"
                  name="imageUrl"
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
