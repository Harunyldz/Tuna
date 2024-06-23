import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import logo from "../../assets/logo5.png";
import { menuItems } from "../../utils/Data.js";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    <div className="navbar-container" >
      <div className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="TUNA Logo" />
          <div className="logo-text">
            <span className="logo-name">TUNA</span>
            <span className="logo-title">İş Güvenliği Hizmetleri</span>
          </div>
        </Link>
        <ul className="navbar-links">
          {menuItems.map((menu) => (
            <li
              className="navbar-link"
              key={menu.id}
              onMouseEnter={menu.subMenu ? handleMouseEnter : null}
              onMouseLeave={menu.subMenu ? handleMouseLeave : null}
            >
              <Link to={menu.href}>{menu.title}</Link>
              {menu.subMenu && (
                <span className="menu-icon">
                  <FaChevronDown />
                </span>
              )}
              {menu.subMenu && (
                <AnimatePresence>
                  {dropdown && (
                    <motion.ul
                      className="dropdown-menu"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.7 }}
                    >
                      {menu.subMenu.map((submenu) => (
                        <li key={submenu.id}>
                          <Link to={`${menu.href}/${submenu.href}`}>{submenu.title}</Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
          <li>
            <Link to="/teklifAl">
              <button className="navbar-btn">Teklif Al</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
