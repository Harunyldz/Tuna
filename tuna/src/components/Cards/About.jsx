import React from 'react'
import './cards.css'
import logo3 from "../../assets/logo3.jpg"

function About() {
    return (
        <div className="hakkimizda-container">
            <div className='about-baslik'>
                <div>
                    <h1>TUNA İŞ GÜVENLİĞİ HİZMETLERİ</h1>
                </div>
                <div>
                    <img className='about-img' src={logo3} alt='' width={200} height={150} />
                </div>

            </div>

            <p>İş Sağlığı ve Güvenliği  Birimimiz Türkiye’de 6331 sayılı İş Sağlığı ve Güvenliği Kanunu’nun kabul edilmesinin ardından, T.C. Çalışma ve Sosyal Hizmetler Bakanlığı tarafından iş sağlığı ve güvenliği hizmetleri başlığı altında tüm hizmetleri verebilme adına 2014 yılında yetkilendirilmiş referanslı iş güvenliği firmasıdır.</p>
            <p>
                Amacımız, çalışanların güvenliğini en üst düzeyde tutarak iş yerlerinde daha güvenli ve sağlıklı bir çalışma ortamı oluşturmaktır.
            </p>

            <p>
                Misyonumuz, iş güvenliği konusunda en yüksek standartları sağlayarak çalışanların hayatını korumak ve iş yerlerinde güvenliği artırmaktır. Sürekli gelişim ve yenilikçilik ilkeleri doğrultusunda müşterilerimize en iyi hizmeti sunmayı hedefliyoruz.
            </p>
            <p>
                Vizyonumuz, iş güvenliği alanında dünya çapında tanınan ve tercih edilen bir firma olmaktır. Kaliteli hizmet anlayışımızla sektörde lider olmayı amaçlıyoruz.
            </p>

        </div>
    )
}

export default About