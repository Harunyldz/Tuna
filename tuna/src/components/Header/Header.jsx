import "./Header.css";
import { Link } from "react-router-dom";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <motion.div
          className="header-content"
          initial={{ opacity: 0, x: -200 }}
          transition={{ type: "tween", duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h1>
            <span>TUNA</span> İş Güvenliği Hizmetleri{" "}
          </h1>
          <p>
            İş Sağlığı ve Güvenliği Birimimiz Türkiye’de 6331 sayılı İş Sağlığı
            ve Güvenliği Kanunu’nun kabul edilmesinin ardından, T.C. Çalışma ve
            Sosyal Hizmetler Bakanlığı tarafından iş sağlığı ve güvenliği
            hizmetleri başlığı altında tüm hizmetleri verebilme adına 2014
            yılında yetkilendirilmiş referanslı iş güvenliği firmasıdır.
          </p>

          <Link to="/hakkimizda">
            <button className="header-btn">Devamını Oku</button>
          </Link>
        </motion.div>
        <motion.div
          className="header-links"
          initial={{ opacity: 0, x: 200 }}
          transition={{ type: "tween", duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <HeaderMenu />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
