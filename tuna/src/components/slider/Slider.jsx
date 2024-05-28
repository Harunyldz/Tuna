import React from 'react'
import './slider.css'

function Slider() {
    return (
        <div className='slider-box'>
            <div className='box1'>
                <h1>Tuna İş Güvenliği </h1>
                <p>İş Sağlığı ve Güvenliği  Birimimiz Türkiye’de 6331 sayılı İş Sağlığı ve Güvenliği Kanunu’nun kabul edilmesinin ardından, T.C. Çalışma ve Sosyal Hizmetler Bakanlığı tarafından iş sağlığı ve güvenliği hizmetleri başlığı altında tüm hizmetleri verebilme adına 2014 yılında yetkilendirilmiş referanslı iş güvenliği firmasıdır.</p>

                <button className='sliderBtn'>Devamını Oku</button>
            </div>
            <div className='box2'>
                <h3>Firmanız için İş Güvenliği Gereksinimlerini Öğrenmek için</h3>
                <button className='box2-btn1'>Göster</button><hr />
                <button className='box2-btn'>Firmanız için İş Güvenliği Gereksinimlerini Öğren</button><hr />
                <button className='box2-btn'>Tehlike Sınıfı - Nace kodu Öğren</button>
                <hr />
                <button className='box2-btn'>İsg Katip Onayı Nasıl Yapılır</button>
            </div>
        </div>
    )
}

export default Slider