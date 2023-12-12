import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="footer-content text-center">
            <Link to={`/`} className="logo">
              <img
                className="mylogo"
                src="https://i.ibb.co/Qdjzf6t/My-Logo-Logo-AI-com-removebg-preview-1.png"
                alt="Logo"
              />
            </Link>
            <ul className="footer-menu">
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/aboutPage`}>About</Link>
              </li>
              <li>
                <Link to={`/worksPage`}>Works</Link>
              </li>
              <li>
                <Link to={`/contactPage`}>Contact</Link>
              </li>
            </ul>
            <p className="copyright">
              &copy; All rights reserved by{" "}
              <span className="poinerCarsul">Rashid Sarkar</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
