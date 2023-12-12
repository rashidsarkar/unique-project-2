import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import myResume from "./MdRashidSarkarResume-MERN Stack Developer.pdf";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutPage"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/worksPage"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : ""
          }
        >
          Works
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactPage"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <header className="header-area">
        <div className="container">
          <div className="gx-row d-flex align-items-center justify-content-between">
            <Link to={`/`} className="logo">
              <img
                className="mylogo"
                src="https://i.ibb.co/Qdjzf6t/My-Logo-Logo-AI-com-removebg-preview-1.png"
                alt="Logo"
              />
            </Link>

            <nav className={`navbar ${isActive ? "active" : ""}`}>
              <ul className="menu">
                {/* <li className="active">
                  <NavLink to={`/`}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={`/aboutPage`}>About</NavLink>
                </li>
                <li>
                  <Link>Works</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li> */}
                {navLinks}
              </ul>
              {/* <Link to={`/contactPage`} className="theme-btn">
                Let's talk
              </Link> */}
              <a
                href={myResume}
                download="RashidSarkarResume.pdf"
                className="theme-btn"
              >
                Download Resume
              </a>
              {/* <a className="about-btn">
                <img src={btnIcon} alt="resume-Button" />
              </a> */}
            </nav>

            <a
              href={myResume}
              download="RashidSarkarResume.pdf"
              className="theme-btn"
            >
              Download Resume
            </a>

            {/* <div className="show-menu">
              <span></span>
              <span></span>
              <span></span>
            </div> */}

            <div
              className={`show-menu ${isActive ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
