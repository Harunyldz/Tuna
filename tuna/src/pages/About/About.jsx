import logo5 from "../../assets/logo5.png";
import { Link } from "react-router-dom";
import "./About.css";
import Referans from "../../components/Cards/Referans";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <div className="about-img">
          <img src={logo5} alt="" />
        </div>
        <div>
          <h1>TUNA İŞ GÜVENLİĞİ HİZMETLERİ</h1>
        </div>
      </div>

      <div className="about-content">
        <p>
          İş Sağlığı ve Güvenliği Birimimiz Türkiye’de 6331 sayılı İş Sağlığı ve
          Güvenliği Kanunu’nun kabul edilmesinin ardından, T.C. Çalışma ve
          Sosyal Hizmetler Bakanlığı tarafından iş sağlığı ve güvenliği
          hizmetleri başlığı altında tüm hizmetleri verebilme adına 2014 yılında
          yetkilendirilmiş referanslı iş güvenliği firmasıdır.
        </p>
        <p>
          Amacımız, çalışanların güvenliğini en üst düzeyde tutarak iş
          yerlerinde daha güvenli ve sağlıklı bir çalışma ortamı oluşturmaktır.
        </p>

        <p>
          Misyonumuz, iş güvenliği konusunda en yüksek standartları sağlayarak
          çalışanların hayatını korumak ve iş yerlerinde güvenliği artırmaktır.
          Sürekli gelişim ve yenilikçilik ilkeleri doğrultusunda müşterilerimize
          en iyi hizmeti sunmayı hedefliyoruz.
        </p>
        <p>
          Vizyonumuz, iş güvenliği alanında dünya çapında tanınan ve tercih
          edilen bir firma olmaktır. Kaliteli hizmet anlayışımızla sektörde
          lider olmayı amaçlıyoruz.
        </p>
        <Link to="/referans"><p>Refranslar için tıkla</p></Link>
      </div>
      {/* <Referans /> */}
    </div>
  );
};

export default About;
