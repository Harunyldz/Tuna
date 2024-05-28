import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import logo from "../../assets/logo5.png";
import { menuItems } from "../../Data";

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
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="TUNA Logo" />
          <div className="logo-text">
            <span className="logo-name">TUNA</span>
            <span className="logo-title">İş Güvenliği Hizmetleri</span>
          </div>
        </div>
        <ul className="navbar-links">
          {menuItems.map((menu) => (
            <li
              className="navbar-link"
              key={menu.id}
              onMouseEnter={menu.subMenu ? handleMouseEnter : null}
              onMouseLeave={menu.subMenu ? handleMouseLeave : null}
            >
              <a href={menu.href}>{menu.title}</a>
              {menu.subMenu && (
                <AnimatePresence>
                  {dropdown && (
                    <motion.ul
                      className="dropdown-menu"
                      initial={{ opacity: 0, y:10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.5 }}
                    >
                      {menu.subMenu.map((submenu, index) => (
                        <li key={index}>
                          <a href={submenu.href}>{submenu.title}</a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
          <li>
            <input
              className="search-input"
              type="text"
              placeholder="Birşeyler Ara"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
