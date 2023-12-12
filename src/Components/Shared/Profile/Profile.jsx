import { FaGithub, FaLinkedin } from "react-icons/fa6";
import bg1 from "../../../assets/about/bg1.png";
import btnIcon from "../../../assets/about/btnIcon.svg";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <div data-aos="zoom-in">
        <div className="about-profile-box info-box shadow-box h-full">
          <img src={bg1} alt="BG" className="bg-img" />
          <div className="inner-profile-icons shadow-box">
            <Link to={`https://www.linkedin.com/in/rashidsarkar/`}>
              <FaLinkedin className="skillIcon" />
            </Link>

            <Link to={`https://github.com/rashidsarkar`}>
              <FaGithub className="skillIcon" />
            </Link>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="infos">
              <h4>Stay with me</h4>
              <h1>Profiles</h1>
            </div>

            <Link to={`/aboutPage`} className="about-btn">
              <img src={btnIcon} alt="Button" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
