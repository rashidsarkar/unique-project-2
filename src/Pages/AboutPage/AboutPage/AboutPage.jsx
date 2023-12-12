import bg1 from "../../../assets/about/bg1.png";
import star2 from "../../MySkills/images/star-2.png";
import icon2 from "../../MySkills/images/icon2.png";

function AboutPage() {
  return (
    <>
      <section className="about-area">
        <div className="container">
          <div className="d-flex about-me-wrap align-items-start gap-24">
            <div data-aos="zoom-in">
              <div className="about-image-box shadow-box">
                <img src={bg1} alt="BG" className="bg-img" />
                <div className="image-inner">
                  <img
                    src="https://i.ibb.co/DkxszhN/myImg.png"
                    alt="About Me"
                  />
                </div>
              </div>
            </div>

            <div className="about-details" data-aos="zoom-in">
              <h1 className="section-heading" data-aos="fade-up">
                <img src={star2} alt="Star" /> Self-summary
                <img src={star2} alt="Star" />
              </h1>
              <div className="about-details-inner shadow-box">
                <img src={icon2} alt="Star" />
                <h1>Rashid Sarkar</h1>
                <p>
                  I am a passionate web developer based in Bangladesh, with a
                  focus on creating innovative and user-centric web solutions.
                  My expertise lies in crafting engaging user interfaces,
                  developing robust back-end systems, and ensuring a seamless
                  user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-24">
            <div className="col-md-6" data-aos="zoom-in">
              <div className="about-edc-exp about-experience shadow-box">
                <img src={bg1} alt="BG" className="bg-img" />
                <h3>EXPERIENCE</h3>

                <ul>
                  <li>
                    <p className="date">2021 - 2022</p>
                    <h2>Web Design Instructor</h2>
                    <p className="type">at Total Computer</p>
                    <p className="type">Gazipur, Dhaka</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6" data-aos="zoom-in">
              <div className="about-edc-exp about-education shadow-box">
                <img src={bg1} alt="BG" className="bg-img" />
                <h3>EDUCATION</h3>

                <ul>
                  <li>
                    <p className="date">2020 - 2024</p>
                    <h2>Bachelor of Business Administration</h2>
                    <p className="type">
                      Sreepur Muktijuddha Rahmat Ali Govt College
                    </p>
                    <p className="type">Gazipur, Dhaka</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
