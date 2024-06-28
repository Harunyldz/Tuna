import logo5 from "../../assets/logo5.png";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="about-header">
        <div className="about-img">
          <img src={logo5} alt="Tuna isg logo" />
        </div>
        <div>
          <h1>
            <span>TUNA</span> İŞ GÜVENLİĞİ HİZMETLERİ
          </h1>
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
      </div>
    </motion.div>
  );
};

export default About;
