import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { SiTelegram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid">
        <div className="footerUpper row p-4 p-sm-5 ">
          <section className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center py-3 py-sm-0 px-5">
            <div className="text-center d-flex">
              <div>
                <div className="d-flex justify-content-center">
                  <button
                    className="noBgBorderBtn logoContainer"
                    onClick={() => {
                      navigate("/");
                      window.location.reload();
                    }}
                  >
                    <img
                      className="logo footerLogoImage"
                      src="images/Logo.png"
                    />
                    <span className="platformName">
                      <span className="fs-2 fw-bold senior">Senior </span>
                      <span className="fs-2 fw-bold buddy">buddy</span>
                    </span>
                  </button>
                </div>
                <div>
                  Senior buddy is a near-peer mentorship platform which provides
                  guidance from senior topper students.
                </div>
              </div>
            </div>
          </section>

          <section className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center py-4 py-sm-0 tCenter">
            <div>
              <h3>Important Links</h3>
              <ul className="impLinks">
                <li>
                  <a href="aboutus.html" className="impLink">About Us</a>
                </li>
                <li>
                  <a href="faqs.html" className="impLink">FAQs</a>
                </li>
                <li>
                  <Link to="/become_a_mentor" className="impLink">Become a Mentor</Link>
                </li>
                <li>
                  <Link to="/dashboard" className="impLink">Dashboard</Link>
                </li>
              </ul>
            </div>
          </section>

          <section className="col-12 col-lg-4 d-flex justify-content-center tCenter contactPadding">
            <div>
              <h3>Contact</h3>
              <div className="contactBody">
                <div>
                  <FaFacebook className="contactIcon" />
                  <RiInstagramFill className="contactIcon" />
                  <FaXTwitter className="contactIcon" />
                  <SiTelegram className="contactIcon" />
                  <FaLinkedin className="contactIcon" />
                </div>
                <div>9840457433</div>
                <div>seniorbuddy@gmail.com</div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="footerLower">
        <div className="footerLowerChild">
          <div>
            &copy; 2025 <a href="www.seniorbuddy.com">www.seniorbuddy.com</a>
          </div>
          <div>All Rights Reserved</div>
        </div>
      </div>
    </>
  );
};
export default Footer;
