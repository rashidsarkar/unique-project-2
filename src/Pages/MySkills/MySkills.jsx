import { FaReact } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import "./mySkill.css";
import star2 from "./images/star-2.png";

function MySkills() {
  return (
    <>
      <section className="service-area">
        <div className="container">
          <h1 className="section-heading" data-aos="fade-up">
            <img src={star2} alt="Star" /> My Skills
            <img src={star2} alt="Star" />
          </h1>

          <div className="row">
            <div className="col-md-4">
              <div className="service-sidebar" data-aos="fade-right">
                <div className="service-sidebar-inner shadow-box">
                  <ul>
                    <li>
                      <FaReact className="skillIcon" />
                      React
                    </li>
                    <li>
                      <TbBrandJavascript className="skillIcon" />
                      JavaScript
                    </li>
                    <li>
                      <SiExpress className="skillIcon" />
                      Express.js
                    </li>
                    <li>
                      <SiMongodb className="skillIcon" />
                      MongoDB
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <h1 className="section-heading" data-aos="fade-up">
                <img src={star2} alt="Star" /> My Skills
                <img src={star2} alt="Star" />
              </h1>

              <div className="service-content-wrap" data-aos="zoom-in">
                <div className="service-content-inner shadow-box">
                  <div className="service-items">
                    <div className="service-item">
                      <h3>React</h3>
                      <p>
                        As a skilled React developer, I specialize in creating
                        dynamic and responsive user interfaces. My expertise
                        lies in crafting efficient and modular React
                        applications to deliver an enhanced user experience.
                      </p>
                    </div>
                    <div className="service-item">
                      <h3>JavaScript</h3>
                      <p>
                        Proficient in JavaScript, I utilize the language to
                        implement interactive and feature-rich components. My
                        coding style focuses on writing clean and maintainable
                        JavaScript code for robust web applications.
                      </p>
                    </div>
                    <div className="service-item">
                      <h3> Express.js</h3>
                      <p>
                        With Express.js, I build scalable and efficient back-end
                        solutions. Leveraging the power of Express, I create
                        RESTful APIs and server-side logic to enhance the
                        overall performance of web applications.
                      </p>
                    </div>
                    <div className="service-item">
                      <h3>MongoDB</h3>
                      <p>
                        Experienced in MongoDB, I design and manage databases
                        for seamless data storage. My skills include handling
                        data operations, ensuring data integrity, and optimizing
                        MongoDB queries for optimal performance.
                      </p>
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

export default MySkills;
