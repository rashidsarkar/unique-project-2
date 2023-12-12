import bg1 from "../../../assets/about/bg1.png";
import icon2 from "../../../assets/about/icon2.png";
import btnIcon from "../../../assets/about/btnIcon.svg";
import { Link } from "react-router-dom";
function WorkTogeth() {
  return (
    <>
      <div className="col-md-6" data-aos="zoom-in">
        <div className="about-contact-box info-box shadow-box">
          <img src={bg1} alt="BG" className="bg-img" />
          <img src={icon2} alt="Icon" className="star-icon" />
          <h1>
            Let's <br />
            work <span>together.</span>
          </h1>
          <Link to={`contactPage`} className="about-btn">
            <img src={btnIcon} alt="Button" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default WorkTogeth;
