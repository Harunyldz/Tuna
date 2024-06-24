import React from "react";
import "./TeklifAl.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function TeklifAl() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [services, setServices] = useState([]);
  const [additionalRequest, setAdditionalRequest] = useState("");
  const [riskClass, setRiskClass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_1rigzui";
    const templateId = "template_6r9jbm9";
    const publicKey = "Sp1DH0OemN8mGvZNC";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      num_people: numPeople,
      selected_services: services.join(", "),
      additional_request: additionalRequest,
      risk_class: riskClass,
      to_name: "Tuna",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setPhone("");
        setNumPeople("");
        setServices([]);
        setAdditionalRequest("");
        setRiskClass("");
      })
      .catch((error) => {
        console.log("Error sending email", error);
      });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setServices([...services, value]);
    } else {
      setServices(services.filter((service) => service !== value));
    }
  };

  return (
    <div className="teklif">
      <p className="teklif-text">
        Hizmetlerimiz hakkında detaylı bilgi almak veya teklif talebinde
        bulunmak için aşağıdaki formu doldurun. Size en kısa sürede geri dönüş
        yapacağız.
      </p>
      <form className="teklif-form" onSubmit={handleSubmit}>
        <div className="form-top">
          <div className="form-left">
            <label className="name">
              Adınız Soyadınız
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label className="email">
              E-Posta Adresiniz
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="phone">
              Telefon
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
            <label className="person-count">
              Çalışan Sayısı
              <input
                type="number"
                min={1}
                value={numPeople}
                onChange={(e) => setNumPeople(e.target.value)}
                required
              />
            </label>
            <label>
              İşyeri Tehlike Sınıfı
              <select
                value={riskClass}
                onChange={(e) => setRiskClass(e.target.value)}
              >
                <option value="Az Tehlikeli">Az Tehlikeli</option>
                <option value="Tehlikeli">Tehlikeli</option>
                <option value="Çok Tehlikeli">Çok Tehlikeli</option>
              </select>
            </label>
          </div>
          <label className="form-right">
            <h3>İstediğiniz hizmetleri seçiniz</h3>
            <label>
              <input
                type="checkbox"
                value="İş Güvenliği Uzmanlık Hizmeti"
                checked={services.includes("İş Güvenliği Uzmanlık Hizmeti")}
                onChange={handleCheckboxChange}
              />
              İş Güvenliği Uzmanlık Hizmeti
            </label>
            <label>
              <input
                type="checkbox"
                value="İşyeri Hekimlik Hizmeti"
                checked={services.includes("İşyeri Hekimlik Hizmeti")}
                onChange={handleCheckboxChange}
              />
              İşyeri Hekimlik Hizmeti
            </label>
            <label>
              <input
                type="checkbox"
                value="Risk Analiz Raporu"
                checked={services.includes("Risk Analiz Raporu")}
                onChange={handleCheckboxChange}
              />
              Risk Analiz Raporu
            </label>
            <label>
              <input
                type="checkbox"
                value="Acil Durum Eylem Planı"
                checked={services.includes("Acil Durum Eylem Planı")}
                onChange={handleCheckboxChange}
              />
              Acil Durum Eylem Planı
            </label>
            <label>
              <input
                type="checkbox"
                value="Yangın Eğitimi Ve Tatbikatı"
                checked={services.includes("Yangın Eğitimi Ve Tatbikatı")}
                onChange={handleCheckboxChange}
              />
              Yangın Eğitimi Ve Tatbikatı
            </label>
            <label>
              <input
                type="checkbox"
                value="İşe Giriş Sağlık Raporu"
                checked={services.includes("İşe Giriş Sağlık Raporu")}
                onChange={handleCheckboxChange}
              />
              İşe Giriş Sağlık Raporu
            </label>
            <label>
              <input
                type="checkbox"
                value="Yüksekte Çalışma Eğitimi"
                checked={services.includes("Yüksekte Çalışma Eğitimi")}
                onChange={handleCheckboxChange}
              />
              Yüksekte Çalışma Eğitimi
            </label>
            <label>
              <input
                type="checkbox"
                value="Hijyen Eğitimi"
                checked={services.includes("Hijyen Eğitimi")}
                onChange={handleCheckboxChange}
              />
              Hijyen Eğitimi (E-Devlet Onaylı)
            </label>
          </label>
        </div>
        <div className="form-bottom">
          <label>
            Ek hizmet talebiniz varsa bu alana yazarak belirtebilirsiniz
            <textarea
              value={additionalRequest}
              onChange={(e) => setAdditionalRequest(e.target.value)}
            />
          </label>
          <button type="submit">Gönder</button>
        </div>
      </form>
    </div>
  );
}

export default TeklifAl;
