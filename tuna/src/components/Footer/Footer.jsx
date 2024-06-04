import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo5.png"

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer">
                <div className="footer-left">
                    <h2>Tuna İş Güvenliği Hizmetleri</h2>
                    <ul>
                        <li>İş Güvenliği Uzmanı</li>
                        <li>İşyeri Hekimi</li>
                        <li>Diğer Sağlık Personeli (İşyeri Hemşiresi)</li>
                        <li>Risk Değerlendirmesi</li>
                        <li>Acil Durum Eylem Planı</li>
                        <li>Hijyen Eğitimi</li>
                        <li>Tatbikatlı Yangın Eğitimi</li>
                        <li>Yüksekte Çalışma Eğitimi</li>
                    </ul>
                </div>
                <div className="footer-center">
                    <div className="footer-logo">
                        <img src={logo} alt="" />
                        <div className="logo-name">TUNA</div>
                    </div>
                    <h3>Bizi Takip Edin</h3>
                    <ul className="icons">
                        <li><FaInstagram /></li>
                        <li><FaFacebook /></li>
                        <li><FaTwitter /></li>

                    </ul>
                </div>
                <div className="footer-right">
                    <div>
                        <h2>İletişim</h2>
                        <ul>
                            <li>İnönü Mah. 375. Sokak No:7 Bağcılar/İstanbul</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer