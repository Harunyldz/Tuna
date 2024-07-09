import "./Navbar.css";
import logo from "../../assets/logo5.png";
import { menuItems } from "../../utils/Data.js";

import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

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
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Tuna Logo" />
            <div className="logo-text">
              <span>TUNA</span>
              <span>İş Güvenliği Hizmetleri</span>
            </div>
          </div>
          <nav className="navbar-menu">
            <ul className={`nav-items ${opened ? 'opened' : ''}`}>
              {menuItems.map((menuItem) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-item active-item" : "nav-item"
                  }
                  onClick={()=>setOpened(!opened)}
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
              <Link onClick={()=>setOpened(!opened)} to="/teklifAl" className="teklif-btn">
                Teklif Al
              </Link>
            </ul>
          </nav>

          <div className="navbar-icon">
            <i onClick={()=>setOpened(!opened)}>{opened ? <FaTimes /> : <FaBars />}</i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
