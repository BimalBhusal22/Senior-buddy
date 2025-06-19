const UpdateCollegeInfo = ({ data }) => {
  return (
    <>
      <div className="container-fluid py-1">
        <div className="container">
          <div className="row ">
            <div className="col-12 text-center fs-3 myHeading">
              Update College Information
            </div>

            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
              <span className="float-sm-end">
                <span className="keyPart">Name: </span>
                <input
                  type="text"
                  className="valuePart"
                  placeholder="College Name"
                  defaultValue={data.name}
                />
              </span>
            </div>

            <div className="col-12 col-sm-6 py-3 d-flex justify-content-center justify-content-sm-start">
              <span>
                <span className="keyPart">District: </span>
                <input
                  type="text"
                  className="valuePart"
                  placeholder="College District"
                  defaultValue={data.district}
                />
              </span>
            </div>

            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
              <span className="float-sm-end">
                <span className="keyPart">Faculties: </span>
                <input
                  type="text"
                  className="valuePart"
                  placeholder="faculty1 o faculty2 o more"
                  defaultValue={data.faculties}
                />
              </span>
            </div>

            <div className="col-12 col-sm-6 py-3 d-flex justify-content-center justify-content-sm-start">
              <span>
                <span className="keyPart">Website Link:</span>
                <input
                  type="url"
                  className="valuePart"
                  placeholder="www.collegename.com"
                  defaultValue={data.websiteLink}
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
export default UpdateCollegeInfo;
