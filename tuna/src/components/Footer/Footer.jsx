import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo5.png"
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import WhatsAppLink from './WhatsAppLink';



const Footer = () => {
    const phoneNumber = "905322505784"; // Ülke kodu ile birlikte telefon numarası
    const message = "Tuna iş güvenliği!";
    return (
        <div className='footer-container'>
            <div className="footer">
                <div className="footer-left">
                    <h2>Tuna İş Güvenliği Hizmetleri</h2>
                    <ul>
                        <Link to='/info'> <li><FaAngleRight />İş Güvenliği Gereksinimlerini Öğren</li></Link>
                        <Link to='/nace'> <li><FaAngleRight />Nace Kodu Öğren</li></Link>
                        <Link to='/isgKatipNasil'> <li><FaAngleRight />İsg Katip Onayı Nasıl Yapılır</li></Link>
                        <Link to='/hizmetlerimiz/is-guvenligi-uzmani'><li><FaAngleRight />İş Güvenliği Uzmanlığı</li></Link>
                        <Link to='/hizmetlerimiz/is-yeri-hekimi'><li><FaAngleRight />İşyeri Hekimliği</li></Link>
                        <Link to='/hizmetlerimiz/diger-saglik-personeli'><li><FaAngleRight />Diğer Sağlık Personeli</li></Link>
                        <Link to='/hizmetlerimiz/risk-analizi'><li><FaAngleRight />Risk Analizi Raporu</li></Link>
                        <Link to='/hizmetlerimiz/acil-durum-plani'><li><FaAngleRight />Acil Durum Planı</li></Link>
                        <Link to='/egitimlerimiz/is-guvenligi-egitimi'> <li><FaAngleRight />İş Güvenliği Eğitimi</li></Link>
                        <Link to='/egitimlerimiz/hijyen-egitimi'> <li><FaAngleRight />Hijyen Eğitimi</li></Link>
                        <Link to='/egitimlerimiz/yangin-egitimi'> <li><FaAngleRight />Yangın Eğitimi</li></Link>
                        <Link to='/egitimlerimiz/yuksekte-calisma-egitimi'> <li><FaAngleRight />Yüksekte Çalışma Eğitimi</li></Link>
                    </ul>
                </div>
                <div className="footer-center">
                    <div className="footer-logo">
                        <img src={logo} alt="" />
                        <div className="logo-name">TUNA</div>
                    </div>
                    <h3>Bizi Takip Edin</h3>
                    <ul className="icons">
                        <a href="https://www.instagram.com/tunaisguvenligihizmetleri/" target="_blank" rel="noopener noreferrer"><li><FaInstagram /></li></a>
                        <a href="https://www.facebook.com/tunaisguvenligihizmetleri?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><li><FaFacebook /></li></a>
                        <a href="https://x.com/tunaisguvenligi" target="_blank" rel="noopener noreferrer" ><li><FaTwitter /></li></a>
                        <a href="https://www.youtube.com/@TunaIsGuvenligi" target='_blank' rel='noopener noreferrer'><li><FaYoutube /></li></a>

                    </ul>
                </div>
                <div className="footer-right">
                    <div>
                        <h2>İletişim</h2>
                        <ul>
                            <Link to="/iletisim" className='footer-contact'>tunaisguvenligihizmetleri@gmail.com</Link>
                            <li>İnönü Mah. 375. Sokak No:7 Bağcılar/İstanbul</li>
                            <li className='arama'>
                                <div className='cepNumber'><a href="tel:+905322505784">+90 532 250 5784</a></div>
                                <div>
                                    <WhatsAppLink phoneNumber={phoneNumber} message={message} /></div>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer