import { useEffect, useState } from "react";
import "./Info.css";
import { infoData } from "../../utils/Data.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LeftMenu from "../../components/LeftMenu/LeftMenu.jsx";

const Info = () => {
  const [riskLevel, setRiskLevel] = useState("azTehlikeli");
  const [riskData, setRiskData] = useState(infoData.azTehlikeli);
  const [employeeCount, setEmployeeCount] = useState(1);

  useEffect(() => {
    if (infoData[riskLevel]) {
      const data = infoData[riskLevel];
      const updatedData = { ...data, employeeCount };
      setRiskData(updatedData);
    }
  }, [riskLevel, employeeCount]);

  const getTemsilci = (value) => {
    if (value === 1) {
      return "0 Kişi";
    } else if (value >= 2 && value <= 50) {
      return "1 Kişi";
    } else if (value >= 51 && value <= 100) {
      return "2 Kişi";
    } else if (value >= 101 && value <= 500) {
      return "3 Kişi";
    } else if (value >= 501 && value <= 1000) {
      return "4 Kişi";
    } else if (value >= 1001 && value <= 2000) {
      return "5 Kişi";
    } else if (value >= 2001) {
      return "6 Kişi";
    }
  };

  const diSaPe = (value) => {
    let dsp;
    if (value > 10 && value <= 49) {
      dsp = Math.ceil((value * 10) / 60);
    } else if (value >= 50 && value <= 249) {
      dsp = Math.ceil((value * 15) / 60);
    } else if (value >= 250) {
      dsp = Math.ceil((value * 20) / 60);
    }
    return dsp + " Saat";
  };
  return (
    <div className="info-container">
      <LeftMenu />
      <motion.div
        className="info"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="hesapla">
          <h3>İş Güvenliği Gerekli Hizmet Bilgisi</h3>
          <div className="inputs">
            <div className="input">
              <label htmlFor="risk-levels">Tehlike Sınıfı </label>
              <select
                name="risk-levels"
                id="risk-levels"
                onChange={(e) => setRiskLevel(e.target.value)}
              >
                <option value="azTehlikeli">Az Tehlikeli</option>
                <option value="tehlikeli">Tehlikeli</option>
                <option value="cokTehlikeli">Çok Tehlikeli</option>
              </select>
            </div>
            <div className="input">
              <label htmlFor="">Çalışan Sayısı </label>
              <input
                type="number"
                min={1}
                value={employeeCount}
                onChange={(e) => setEmployeeCount(e.target.value)}
              />
            </div>
          </div>
          <p>
            Tehlike sınıfını ve çalışan sayısını girerek iş yeriniz için
            alınması gereken hizmetleri ve gerekli acil durum ekip sayılarını
            öğrenebilirsiniz.
          </p>
        </div>
        <div className="tablo">
          <h3>Alınması Gerekli Hizmetler</h3>
          <div className="tablo-items">
            <div className="tablo-item">
              <span>Tehlike Sınıfı</span>
              <span>{riskData.title}</span>
            </div>
            <div className="tablo-item">
              <span>İş Güvenliği Uzmanı</span>
              <span>
                {Math.ceil((employeeCount * riskData.isGuvenligi) / 60)} Saat
              </span>
            </div>
            <div className="tablo-item">
              <span>İşyeri Hekimi</span>
              <span>
                {Math.ceil((employeeCount * riskData.isyeriHekimi) / 60)} Saat
              </span>
            </div>
            <div className="tablo-item">
              <span>DSP (Diğer Sağlık Personeli)</span>
              <span>
                {riskLevel === "cokTehlikeli" && employeeCount > 10
                  ? diSaPe(employeeCount)
                  : "-"}
              </span>
            </div>
            <div className="tablo-item">
              <span>Risk Analiz Raporu</span>
              <span>{riskData.riskAnalizRaporu} Yılda 1 Defa</span>
            </div>
            <div className="tablo-item">
              <span>Acil Durum Plan</span>
              <span>{riskData.acilDurumPlani} Yılda 1 Defa</span>
            </div>
            <div className="tablo-item">
              <span>İsg Temel Eğitim</span>
              <span>{riskData.isgEgitim} Yılda 1 Defa</span>
            </div>
            <div className="tablo-item">
              <span>Sağlık Raporu </span>
              <span>{riskData.saglikRaporu} Yılda 1 Defa</span>
            </div>
            <div className="tablo-item">
              <span>Çalışan Temsilcisi</span>
              <span>{getTemsilci(employeeCount)}</span>
            </div>
          </div>
          <h3>Acil Durum Ekibi</h3>
          <div className="tablo-items">
            <div className="tablo-item">
              <span>İlk Yardım Ekibi</span>
              <span>
                {Math.ceil(employeeCount / riskData.ilkYardimEkibi)} Kişi
              </span>
            </div>
            <div className="tablo-item">
              <span>Söndürme Ekibi</span>
              <span>
                {Math.ceil(employeeCount / riskData.sondurmeEkibi)} Kişi
              </span>
            </div>
            <div className="tablo-item">
              <span>Koruma-Kurtarma Ekibi</span>
              <span>
                {Math.ceil(employeeCount / riskData.korumaEkibi)} Kişi
              </span>
            </div>
            <div className="tablo-item">
              <span>Tahliye-Haberleşme Ekibi</span>
              <span>
                {Math.ceil(employeeCount / riskData.tahliyeEkibi)} Kişi
              </span>
            </div>
          </div>
          <motion.div
            className="info-links"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p>
              İş güvenliği hizmetlerimizden hemen faydalanmak için{" "}
              <Link to="/teklifAl" className="info-teklif">
                Teklif Al
              </Link>
            </p>
            <p>
              Daha fazla bilgi almak için{" "}
              <Link to="/iletisim" className="info-contact">
                İletişim
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
