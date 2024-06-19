import "./Info.css";

const Info = () => {
  return (
    <div className="info">
      <div className="hesapla">
        <h3>İş Güvenliği Gerekli Hizmet Bilgisi</h3>
        <div className="inputs">
          <div className="input">
            <label htmlFor="risk-levels">Tehlike Sınıfı : </label>
            <select name="risk-levels" id="risk-levels">
              <option value="azTehlikeli">Az Tehlikeli</option>
              <option value="Tehlikeli">Tehlikeli</option>
              <option value="cokTehlikeli">Çok Tehlikeli</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="">Çalışan Sayısı : </label>
            <input type="number" min={1} />
          </div>
        </div>
        <button className="hesapla-btn">Hesapla</button>
      </div>
      <div className="tablo">
        <h3>Alınması Gerekli Hizmetler</h3>
        <div className="tablo-items">
          <div className="tablo-item">
            <span>Tehlike Sınıfı</span>
            <span>-</span>
          </div>
          <div className="tablo-item">
            <span>İş Güvenliği Uzmanı</span>
            <span>-</span>
          </div>
          <div className="tablo-item">
            <span>İşyeri Hekimi</span>
            <span>-</span>
          </div>
          <div className="tablo-item">
            <span>DSP</span>
            <span>-</span>
          </div>
          <div className="tablo-item">
            <span>Risk Analiz Raporu</span>
            <span>-</span>
          </div>
          <div className="tablo-item">
            <span>Acil Durum Plan</span>
            <span>-</span>
          </div>
          <div className="tablo-item">
            <span>İsg Temel Eğitim</span>
            <span>-</span>
          </div>
          <div className="tablo-item">
            <span>Sağlık Raporu </span>
            <span>-</span>
          </div>
          <div className="tablo-item">
            <span>Çalışan Temsilcisi</span>
            <span>-</span>
          </div>
        </div>
        <h3>Acil Durum Ekibi</h3>
        <div className="tablo-items">
          <div className="tablo-item">
            <span>İlk Yardım Ekibi</span>
            <span>-</span>
          </div>
          <div className="tablo-item">
            <span>Söndürme Ekibi</span>
            <span>-</span>
          </div>
          <div className="tablo-item">
            <span>Koruma-Kurtarma Ekibi</span>
            <span>-</span>
          </div>
          <div className="tablo-item">
            <span>Tahliye-Haberleşme Ekibi</span>
            <span>-</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
