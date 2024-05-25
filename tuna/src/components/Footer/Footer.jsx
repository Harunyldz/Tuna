import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo5.png"

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer">
            <div className="footer-left">
                <h2>Yüksekte Çalışma Ürünleri</h2>
                <ul>
                    <li>Emniyet Kemerleri</li>
                    <li>Lanyard ve Şok Emiciler</li>
                    <li>Karabinalar</li>
                    <li>Geri Sarımlı Düşüş Durdurucular</li>
                    <li>Halatlar</li>
                    <li>Ankrajlar</li>
                    <li>Mobil Düşüş Durdurucular</li>
                    <li>Çantalar ve Aksesuarlar</li>
                    <li>Tripod ve Kurtarma Vinçleri</li>
                    <li>Makaralar</li>
                    <li>Kasklar</li>
                    <li>Güvenlik Ağları</li>
                </ul>
            </div>
            <div className="footer-center">
                <div className="footer-logo">
                    <img src={logo} alt="" />
                    <div className="logo-name">TUNA</div>
                </div>
                <h3>Bizi Takip Edin</h3>
                <ul className="icons">
                    <li><FaInstagram/></li>
                    <li><FaFacebook /></li>
                    <li><FaTwitter /></li>
                    <li><FaYoutube/></li>
                    <li><FaLinkedin /></li>
                </ul>
            </div>
            <div className="footer-right">
                <div>
                    <h2>Yaşam Hatları</h2>
                    <ul>
                        <li>Sabit Yaşam Hatları</li>
                        <li>Mobil Yaşam Hatları</li>
                    </ul>
                </div>
                <div>
                    <h2>Kurumsal</h2>
                    <ul>
                        <li>Hakkımızda</li>
                        <li>Referanslarımız</li>
                        <li>Kalite Politikamız</li>
                    </ul>
                </div>
                <div>
                    <h2>İletişim</h2>
                    <ul>
                        <li>İletişim</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer