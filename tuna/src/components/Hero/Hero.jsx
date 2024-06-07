import "./Hero.css";
import { FaHelmetSafety } from "react-icons/fa6";
import { CgDanger } from "react-icons/cg";
import { FaCheckCircle } from "react-icons/fa";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-cards">
        <Link to="/info" className="card">
          <div className="card-icon">
            <FaHelmetSafety />
          </div>
          <div className="card-content">
            <h2 className="card-header">
              İş Güvenliği Gereksinimlerini <span>Öğren</span>
            </h2>
          </div>
        </Link>
        <Link to="/nace" className="card">
          <div className="card-icon">
            <CgDanger />
          </div>
          <div className="card-content">
            <h2 className="card-header">
              Tehlike Sınıfı Nace Kodu <span>Öğren</span>
            </h2>
          </div>
        </Link>
        <Link to="/isgKatipNasil" className="card">
          <div className="card-icon">
            <FaCheckCircle />
          </div>
          <div className="card-content">
            <h2 className="card-header">İSG Katip Onayı <br /> <span>Nasıl Yapılır</span> </h2>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
