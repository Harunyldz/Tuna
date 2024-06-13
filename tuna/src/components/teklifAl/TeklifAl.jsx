import React from 'react'
import './teklifAl.css'
import { useState } from 'react';
import emailjs from "@emailjs/browser";

function TeklifAl() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [numPeople, setNumPeople] = useState("");
    const [services, setServices] = useState([]);
    const [additionalRequest, setAdditionalRequest] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = "service_1rigzui";
        const templateId = "template_0oq9o8b";
        const publicKey = "Sp1DH0OemN8mGvZNC";

        const templateParams = {
            from_name: name,
            from_email: email,
            from_phone: phone,
            num_people: numPeople,
            selected_services: services.join(", "),
            additional_request: additionalRequest,
            to_name: "Tuna"
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
        <form onSubmit={handleSubmit}>
            <label>
                Adınız Soyadınız:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <br />
            <label>
                E-Posta Adresiniz:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <br />
            <label>
                Telefon:
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </label>
            <br />
            <label>
                Kişi Sayısı:
                <input type="number" value={numPeople} onChange={(e) => setNumPeople(e.target.value)} required />
            </label>
            <br />
            <label>
                İstediğiniz hizmetleri seçiniz:
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="İş Güvenliği Uzmanlık Hizmeti"
                        checked={services.includes("İş Güvenliği Uzmanlık Hizmeti")}
                        onChange={handleCheckboxChange}
                    />
                    İş Güvenliği Uzmanlık Hizmeti
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="İşyeri Hekimlik Hizmeti"
                        checked={services.includes("İşyeri Hekimlik Hizmeti")}
                        onChange={handleCheckboxChange}
                    />
                    İşyeri Hekimlik Hizmeti
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="Risk Analiz Raporu"
                        checked={services.includes("Risk Analiz Raporu")}
                        onChange={handleCheckboxChange}
                    />
                    Risk Analiz Raporu
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="Acil Durum Eylem Planı"
                        checked={services.includes("Acil Durum Eylem Planı")}
                        onChange={handleCheckboxChange}
                    />
                    Acil Durum Eylem Planı
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="Yangın Eğitimi Ve Tatbikatı"
                        checked={services.includes("Yangın Eğitimi Ve Tatbikatı")}
                        onChange={handleCheckboxChange}
                    />
                    Yangın Eğitimi Ve Tatbikatı
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="İşe Giriş Sağlık Raporu"
                        checked={services.includes("İşe Giriş Sağlık Raporu")}
                        onChange={handleCheckboxChange}
                    />
                    İşe Giriş Sağlık Raporu
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="Mobil Sağlık Tarama Hizmeti"
                        checked={services.includes("Mobil Sağlık Tarama Hizmeti")}
                        onChange={handleCheckboxChange}
                    />
                    Mobil Sağlık Tarama Hizmeti
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="Sedex Denetim Danışmanlığı"
                        checked={services.includes("Sedex Denetim Danışmanlığı")}
                        onChange={handleCheckboxChange}
                    />
                    Sedex Denetim Danışmanlığı
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="Bscı Denetim Danışmanlığı"
                        checked={services.includes("Bscı Denetim Danışmanlığı")}
                        onChange={handleCheckboxChange}
                    />
                    Bscı Denetim Danışmanlığı
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="Fama Denetim Danışmanlığı"
                        checked={services.includes("Fama Denetim Danışmanlığı")}
                        onChange={handleCheckboxChange}
                    />
                    Fama Denetim Danışmanlığı
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="Sosyal Uygunluk Denetim Danışmanlığı"
                        checked={services.includes("Sosyal Uygunluk Denetim Danışmanlığı")}
                        onChange={handleCheckboxChange}
                    />
                    Sosyal Uygunluk Denetim Danışmanlığı
                </label>
            </label>
            <br />
            <label>
                Ek hizmet talebiniz varsa bu alana yazarak belirtebilirsiniz:
                <textarea value={additionalRequest} onChange={(e) => setAdditionalRequest(e.target.value)} />
            </label>
            <br />
            <button type="submit">Gönder</button>
        </form>
    );
};


export default TeklifAl