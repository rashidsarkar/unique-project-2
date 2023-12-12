import "./contactpage.css";
import { CiMail } from "react-icons/ci";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg1 from "../../MySkills/images/bg1.png";
import icon2 from "../../MySkills/images/icon2.png";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
const serviceID = "service_d0s91zk";
const templateID = "template_sky0u9h";
const publicKey = "HeqpLKIzL6j-ywhuC";
function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fullName = formData.get("full-name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    // console.log(fullName, email, subject, message);
    const params = {
      from_name: fullName,
      from_email: email,
      subject,
      message,
    };
    // Send the email using EmailJS

    // emailjs.sendForm(serviceID, templateID, params).then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
    emailjs
      .send(serviceID, templateID, params, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        toast("Your information sent successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <>
      <section className="contact-area">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="container">
          <div className="gx-row d-flex justify-content-between gap-24">
            <div className="contact-infos">
              <h3 data-aos="fade-up">Contact Info</h3>
              <ul className="contact-details">
                <li className="d-flex align-items-center" data-aos="zoom-in">
                  <div className="icon-box shadow-box d-flex  justify-content-center align-items-center ">
                    <CiMail />
                  </div>
                  <div className="right">
                    <span>MAIL Me</span>
                    <h4>rashidsarkar558@gmail.com</h4>
                    <h4>rashidrock1234@gmail.com</h4>
                  </div>
                </li>

                <li className="d-flex align-items-center" data-aos="zoom-in">
                  <div className="icon-box shadow-box d-flex  justify-content-center align-items-center">
                    <FaPhone />
                  </div>
                  <div className="right">
                    <span>Contact Me</span>
                    <h4>+8801872970928</h4>
                    <h4>+8801516503622</h4>
                  </div>
                </li>

                <li className="d-flex align-items-center" data-aos="zoom-in">
                  <div className="icon-box shadow-box d-flex  justify-content-center align-items-center ">
                    <FaLocationDot />
                  </div>
                  <div className="right">
                    <span>Location</span>
                    <h4>
                      Joydebpur <br />
                      Gazipur <br />
                      Bangladesh
                    </h4>
                  </div>
                </li>
              </ul>

              <h3 data-aos="fade-up">Social Info</h3>
              <ul
                className="social-links d-flex align-center"
                data-aos="zoom-in"
              >
                <li>
                  <Link
                    className="shadow-box d-flex  justify-content-center align-items-center"
                    to={`https://github.com/rashidsarkar`}
                  >
                    <FaGithub />
                  </Link>
                </li>
                <li>
                  <Link
                    className="shadow-box d-flex  justify-content-center align-items-center"
                    to={`https://www.linkedin.com/in/rashidsarkar/`}
                  >
                    <FaLinkedin />
                  </Link>
                </li>
                <li>
                  <Link
                    className="shadow-box d-flex  justify-content-center align-items-center"
                    to={`https://www.facebook.com/RongilaRashid`}
                  >
                    <FaFacebook />
                  </Link>
                </li>
              </ul>
            </div>

            <div data-aos="zoom-in" className="contact-form">
              <div className="shadow-box">
                <img src={bg1} alt="BG" className="bg-img" />
                <img src={icon2} alt="Icon" />
                <h1>
                  Let’s work <span>together.</span>
                </h1>
                <form onSubmit={handleSubmit}>
                  <div
                    className="alert alert-success messenger-box-contact__msg"
                    style={{ display: "none" }}
                    role="alert"
                  >
                    Your message was sent successfully.
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      placeholder="Name *"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email *"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Your Subject *"
                    />
                  </div>
                  <div className="input-group">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your Message *"
                    ></textarea>
                  </div>
                  <div className="input-group">
                    <button
                      className="theme-btn submit-btn"
                      name="submit"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
