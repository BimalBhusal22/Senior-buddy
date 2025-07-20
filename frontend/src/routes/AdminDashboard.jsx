import { Outlet } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <div className="text-center mb-4">
        <h1 className="adminDashboardHeading py-4">
          Admin Dashboard{" "}
          <span className="float-end pe-5">
            <Link to="/">
              <button type="button" className="dashboardCrossBtn">
                <RxCross2 className="fs-1" />
              </button>
            </Link>
          </span>
        </h1>

        <div className="d-flex flex-wrap justify-content-center">
          <div className="mx-2">
            <Link to="/dashboard/add_mentor">
              <button
                type="button"
                className="btn btn-success dashboardBtn mt-4 py-2"
              >
                Add Mentor
              </button>
            </Link>
          </div>

          <div className="mx-2">
            <Link to="/dashboard/update_mentor">
              <button
                type="button"
                className="btn btn-info dashboardBtn mt-4 py-2"
              >
                Update Mentor
              </button>
            </Link>
          </div>

          <div className="mx-2">
            <Link to="/dashboard/delete_mentor">
              <button
                type="button"
                className="btn btn-danger dashboardBtn mt-4 py-2"
              >
                Delete Mentor
              </button>
            </Link>
          </div>

          <div className="mx-2">
            <Link to="/dashboard/view_mentors">
              <button
                type="button"
                className="btn btn-info dashboardBtn mt-4 py-2"
              >
                View Mentors
              </button>
            </Link>
          </div>

          <div className="mx-2">
            <Link to="/dashboard/view_mentor_requests">
              <button
                type="button"
                className="btn btn-info dashboardBtn mt-4 py-2"
              >
                View Mentor Requests
              </button>
            </Link>
          </div>

          <div className="mx-2">
            <Link to="/dashboard/view_users">
              <button
                type="button"
                className="btn btn-info dashboardBtn mt-4 py-2"
              >
                View Users
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default AdminDashboard;
