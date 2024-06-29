import "./Navbar2.css";
import logo from "../../assets/logo5.png";
import { menuItems } from "../../utils/Data.js";

import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 960) {
      setDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 960) {
      setDropdown(false);
    }
  };

  return (
    <>
      <div className="navbar-links">
        <div>
          <div className="navbar-mail">
            <MdEmail className="mail-icon" />
            <Link to="/iletisim">tunaisghizmetleri@gmail.com</Link>
          </div>
          <div className="navbar-socialLinks">
            <a
              href="https://www.instagram.com/tunaisguvenligihizmetleri/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/tunaisguvenligihizmetleri?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/tunaisguvenligi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.youtube.com/@TunaIsGuvenligi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Tuna Logo" />
            <div className="logo-text">
              <span>TUNA</span>
              <span>İş Güvenliği Hizmetleri</span>
            </div>
          </div>
          <nav className={`navbar-menu ${opened ? "open" : ""}`}>
            <ul className="nav-items">
              {menuItems.map((menuItem) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-item active-item" : "nav-item"
                  }
                  to={menuItem.href}
                  key={menuItem.id}
                  onMouseEnter={menuItem.subMenu ? handleMouseEnter : null}
                  onMouseLeave={menuItem.subMenu ? handleMouseLeave : null}
                >
                  {menuItem.title}
                  {menuItem.subMenu && (
                    <i>
                      <FaChevronDown />
                    </i>
                  )}
                  {menuItem.subMenu && dropdown && (
                    <ul className="dropdown-menu">
                      {menuItem.subMenu.map((subMenu) => (
                        <li key={subMenu.id}>
                          <Link
                            className="dropdown-menu-item"
                            to={`${menuItem.href}/${subMenu.href}`}
                          >
                            {subMenu.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </NavLink>
              ))}
            </ul>
          </nav>
          <div className="navbar-btn">
            <Link to="/teklifAl" className="teklif-btn">
              Teklif Al
            </Link>
          </div>
          <div className="navbar-icon">
            <i onClick={() => setOpened(!opened)}>
              {opened ? <FaTimes /> : <FaBars />}
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
