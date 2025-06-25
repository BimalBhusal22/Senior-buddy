import { MdEdit } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const UserInfo = () => {
  let userInfo = {
    name: "Bimal Bhusal",
    intrestedDomain: "Science",
    phoneno: "9840457433",
    email: "bimalbhusal1st2075@gmail.com",
    password: "1234",
  };
  return (
    <div className="container-fluid py-4">
      <div className="container">
        <div className="row ">
          <div className="col-12 text-center fs-3 myHeading">Your Details</div>
          <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
            <span className="float-sm-end">
              <span className="keyPart">Name:</span>
              <input
                type="text"
                className="valuePart"
                value={userInfo.name}
                readOnly
              />
            </span>
          </div>
          <div className="col-12 col-sm-6 py-3 d-flex justify-content-center justify-content-sm-start">
            <span>
              <span className="keyPart">Intrested Domain:</span>
              <input
                type="text"
                className="valuePart"
                value={userInfo.intrestedDomain}
                readOnly
              />
            </span>
          </div>
          <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
            <span className="float-sm-end">
              <span className="keyPart">Phone No:</span>
              <input
                type="text"
                className="valuePart"
                value={userInfo.phoneno}
                readOnly
              />
            </span>
          </div>
          <div className="col-12 col-sm-6 py-3 d-flex justify-content-center justify-content-sm-start">
            <span>
              <span className="keyPart">Email:</span>
              <input
                type="email"
                className="valuePart"
                value={userInfo.email}
                readOnly
              />
            </span>
          </div>
          <div className="col-12 col-sm-6 px-sm-4 pt-3 d-flex justify-content-center justify-content-sm-end">
            <span className="float-sm-end">
              <span className="keyPart">Password:</span>
              <span>
                <input
                  type="password"
                  className="valuePart"
                  value={userInfo.password}
                  readOnly
                />
                <div>
                  <button type="button" className="showBtn">
                    <BiShow className="showIcon" />
                  </button>
                  {/* <button type="button" className="hideBtn"><BiHide  className="hideIcon" />
              </button> */}
                </div>
              </span>
            </span>
          </div>

          <div className="col-12 d-flex justify-content-center">
            <button type="button" className="btn btn-primary editBtn">
              <MdEdit className="editIcon" /> Edit
            </button>

            {/* <button type="button" className="btn btn-primary confirmBtn">
              <GiConfirmed className="confirmIcon" /> Confirm
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserInfo;
