import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";

const HeaderLowerNavbar = () => {
  return (
    <nav className="lowerNavbar">
      <ul id="navItems">
        <li>
          <Link to="/" className="ctgy">
            <button type="button" className="homeBtn">
              <ImHome className="homeIcon ctgy" />
            </button>
          </Link>
        </li>
        <li>
          <a href="bbs.html" className="ctgy">
            BBS
          </a>
        </li>
        <li>
          <a href="bba.html" className="ctgy">
            BBA
          </a>
        </li>
        <li>
          <a href="bhm.html" className="ctgy">
            BHM
          </a>
        </li>
        <li>
          <a href="bsccsit.html" className="ctgy">
            BSc. CSIT
          </a>
        </li>
        <li>
          <a href="bca.html" className="ctgy">
            BCA
          </a>
        </li>
        <li>
          <span>
            <label htmlFor="more" className="ctgy">
              More:
            </label>

            <select name="moreFaculties" id="moreFaculties">
              <option value="science">+2 Science</option>
              <option value="management">+2 Management</option>
              <option value="education">+2 Education</option>
              <option value="engineering">Engineering</option>
            </select>
          </span>
        </li>

        <li>
          <Link to="/become_a_mentor">
            <button className="specialTab sCtgy becomeAMentor">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-award-fill becomeAMentorIcon"
                viewBox="0 0 16 16"
              >
                <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
              </svg>
              Become a Mentor
            </button>
          </Link>
        </li>

        <li>
          <Link to="/user_profile">
            <button className="specialTab sCtgy userProfile fw-bold">
              UN
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger myBadge">
                3<span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default HeaderLowerNavbar;
