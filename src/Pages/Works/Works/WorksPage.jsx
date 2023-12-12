import star2 from "../../MySkills/images/star-2.png";
import bg1 from "../../MySkills/images/bg1.png";
import btnIcom from "../../MySkills/images/icon.svg";
import Luxe from "../assets/Luxe-Home(1).png";
import RongilaWedding from "../assets/Rongila-Wedding-Planner.png";
import Serfix from "../assets/Serfix.png";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import unsplashProject from "../assets/ben-kolde-bs2Ba7t69mM-unsplash.jpg";
import resi1 from "../assets/resi1.jpg";
import resi2 from "../assets/res2.png";
import resi3 from "../assets/res3.png";
import carres from "../assets/car-res.png";
import luxeRes1 from "../assets/luxe-res1.png";
import "./workPage.css";
import { Link } from "react-router-dom";
function WorksPage() {
  return (
    <>
      <section className="projects-area">
        <div className="container">
          {/* <h1 className="section-heading" data-aos="fade-up">
            <img src={star2} alt="Star" /> All Projects
            <img src={star2} alt="Star" />
          </h1> */}
          <div className="row">
            <div className="col-md-4">
              <div data-aos="zoom-in">
                <div className="project-item shadow-box">
                  <img src={bg1} alt="BG" className="bg-img" />
                  <div className="project-img projectHight d-flex  justify-content-center  align-items-center ">
                    {/* <img
                      src={`https://i.ibb.co/myJTqML/Am-I-Responsive.png`}
                      alt="Project"
                    /> */}
                    <img src={luxeRes1} alt="Project" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="project-info">
                      <p>Luxe Living Platform</p>
                      {/* <h1>Luxe Living Platform</h1> */}
                      <div className="d-flex gap-2 ">
                        <Link
                          to={`https://github.com/rashidsarkar/Luxe---Modern-Living-Platform---a12-p2`}
                          type="button"
                          className="btn btn-success"
                          data-mdb-ripple-init
                        >
                          Clinet Code
                        </Link>
                        <Link
                          to={`https://github.com/rashidsarkar/Luxe-Modern-Living-Platform-server-a12-p2`}
                          type="button"
                          className="btn btn-info"
                          data-mdb-ripple-init
                        >
                          Server Code
                        </Link>
                      </div>
                    </div>
                    <Link
                      to={`https://stellar-malasada-952ea2.netlify.app/`}
                      className="project-btn"
                    >
                      <img src={btnIcom} alt="Button" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <h1 className="section-heading" data-aos="fade-up">
                <img src={star2} alt="Star" /> All Projects
                <img src={star2} alt="Star" />
              </h1>

              <div className="d-flex align-items-start gap-24">
                <div data-aos="zoom-in" className="flex-1">
                  <div className="project-item shadow-box">
                    <img src={bg1} alt="BG" className="bg-img" />
                    <div className="project-img projectHight2 d-flex  justify-content-center align-items-center ">
                      {/* <img
                        src={`https://i.ibb.co/rfb880y/Am-I-Responsive.png`}
                        alt="Project"
                      /> */}
                      <img src={resi2} alt="Project" />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="project-info">
                        <p>Assignment Management</p>
                        {/* <h1>Assignment Management</h1> */}
                        <div className="d-flex gap-2 ">
                          <Link
                            to={`https://github.com/rashidsarkar/Educoda---Assignment-Management-System---a11-p2`}
                            type="button"
                            className="btn btn-success"
                            data-mdb-ripple-init
                          >
                            Clinet Code
                          </Link>
                          <Link
                            to={`https://github.com/rashidsarkar/Educoda---Assignment-Management-System--server--a11-p2`}
                            type="button"
                            className="btn btn-info"
                            data-mdb-ripple-init
                          >
                            Server Code
                          </Link>
                        </div>
                      </div>
                      <Link
                        to={`https://fanciful-dango-1d1745.netlify.app/`}
                        className="project-btn"
                      >
                        <img src={btnIcom} alt="Button" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div data-aos="zoom-in" className="flex-1">
                  <div className="project-item shadow-box">
                    <img src={bg1} alt="BG" className="bg-img" />
                    <div className="project-img projectHight2 d-flex  justify-content-center align-items-center">
                      {/* <img
                        src={`https://i.ibb.co/Nx72Knv/Am-I-Responsive-1.png`}
                        alt="Project"
                      /> */}
                      <img src={carres} alt="" />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="project-info">
                        <p>Automotive Marketplace</p>
                        {/* <h1>Rongila Wedding Planner</h1> */}
                        <div className="d-flex gap-2 ">
                          <Link
                            to={`https://github.com/rashidsarkar/Serfix-Marketplace---a10-p2`}
                            type="button"
                            className="btn btn-success"
                            data-mdb-ripple-init
                          >
                            Clinet Code
                          </Link>
                          <Link
                            to={`https://github.com/rashidsarkar/Serfix-Automotive-Server---a10-p2`}
                            type="button"
                            className="btn btn-info"
                            data-mdb-ripple-init
                          >
                            Server Code
                          </Link>
                        </div>
                      </div>
                      <Link
                        to={`https://sunny-klepon-b6a36d.netlify.app`}
                        className="project-btn"
                      >
                        <img src={btnIcom} alt="Button" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorksPage;
