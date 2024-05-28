import React from "react";
import "./Navbar.css";

import logo from "../../assets/logo5.png";
import { menuItems } from "../../Data";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="" />
          <div className="logo-text">
            <span className="logo-name">TUNA</span>
            <span className="logo-title">İş Güvenliği</span>
          </div>
        </div>
        <ul className="navbar-links">
          <li className="navbar-link">Ana Sayfa</li>
          <li className="navbar-link">Hakkımızda</li>
          <li className="navbar-link">Hizmetlerimiz</li>
          <li className="navbar-link">Eğitimlerimiz</li>
          <li className="navbar-link">İletişim</li>
          <li >
            <input className='search-input' type="text" placeholder='Birşeyler Ara' />
          </li>
        </ul>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f89715" fill-opacity="1" d="M0,128L60,106.7C120,85,240,43,360,42.7C480,43,600,85,720,112C840,139,960,149,1080,149.3C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
    </div>
  );
};

export default Navbar;
