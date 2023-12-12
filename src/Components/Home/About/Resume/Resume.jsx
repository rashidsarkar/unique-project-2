import bg1 from "../../../../assets/about/bg1.png";
import resumeIcon from "../../../../assets/about/resumeIcon2.png";
import btnIcon from "../../../../assets/about/btnIcon.svg";
import myResume from "./MdRashidSarkarResume-MERN Stack Developer.pdf";
import { Link } from "react-router-dom";
function Resume() {
  return (
    <>
      <div data-aos="zoom-in">
        <div className="about-blog-box info-box shadow-box h-full">
          <img src={bg1} alt="BG" className="bg-img" />
          <img src={resumeIcon} className="resumeIcon" alt="GFonts" />
          <div className="d-flex align-items-center justify-content-between">
            <div className="infos">
              <h4>My Resume</h4>
              <h1>Download Now</h1>
            </div>

            <a className="about-btn" href={myResume} download="MyResume.pdf">
              <img src={btnIcon} alt="resume-Button" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
