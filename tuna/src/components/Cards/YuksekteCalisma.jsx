import React from 'react'
import { ImArrowRight } from "react-icons/im";
import hight from "../../assets/hightWorking.jpg"
import hight2 from "../../assets/yuksek2.jpg"
import './cards.css'


function YuksekteCalisma() {
    return (
        <div className='content-item'>
            <div className='content-title'>
                <h1>Yüksekte Çalışma Eğitimi</h1>
            </div>
            <div className='content-center'>
                <div className='content-center-box1'>
                    <p>Yüksekte çalışma eğitimi, yüksekte çalışırken oluşabilecek riskleri en aza indirgemek ve güvenli çalışma yöntemlerini öğretmek amacıyla verilen bir eğitimdir. Bu eğitim özellikle inşaat, bakım, temizlik gibi sektörlerde çalışanlar için büyük önem taşır. Eğitimin içeriği genellikle aşağıdaki başlıkları kapsar:

                    </p>
                    <h3>1. Temel Kavramlar ve Hukuki Mevzuat</h3>
                    <ul>
                        <li><strong>Yüksekte Çalışmanın Tanımı:</strong> Yüksekte çalışmanın ne anlama geldiği ve hangi durumların bu kategoriye girdiği.</li>
                        <li><strong>İlgili Mevzuat ve Yönetmelikler:</strong> İş Sağlığı ve Güvenliği Kanunu ve yönetmeliklere uygun olarak yüksekte çalışma kuralları.</li>
                    </ul>

                    <h3>2. Risk Değerlendirmesi ve Tehlike Analizi</h3>
                    <ul>
                        <li><strong>Risk Değerlendirme Yöntemleri:</strong> Yüksekte çalışmada karşılaşılabilecek risklerin tanımlanması ve analiz edilmesi.</li>
                        <li><strong>Tehlike Analizi:</strong> Potansiyel tehlikelerin belirlenmesi ve bu tehlikelerin nasıl azaltılabileceği.</li>
                    </ul>

                    <h3>3. Kişisel Koruyucu Donanımlar (KKD)</h3>
                    <ul>
                        <li><strong>KKD Kullanımı:</strong> Baret, emniyet kemeri, halat, koruyucu ayakkabı gibi kişisel koruyucu donanımların doğru kullanımı.</li>
                        <li><strong>KKD Bakımı:</strong> Kişisel koruyucu donanımların düzenli bakım ve kontrollerinin nasıl yapılacağı.</li>
                    </ul>

                    <h3>4. Ekipman ve Araç Kullanımı</h3>
                    <ul>
                        <li><strong>Merdiven ve İskele Kullanımı:</strong> Güvenli merdiven ve iskele kullanma teknikleri.</li>
                        <li><strong>Yüksekte Çalışma Platformları:</strong> Mobil çalışma platformları, asansörler ve diğer yüksekte çalışma araçlarının güvenli kullanımı.</li>
                    </ul>

                    <h3>5. Düşme Koruma Sistemleri</h3>
                    <ul>
                        <li><strong>Düşme Önleyici Sistemler:</strong> Korkuluklar, ağlar ve güvenlik hatları gibi düşme önleyici sistemlerin kullanımı.</li>
                        <li><strong>Düşme Durdurucu Sistemler:</strong> Emniyet kemerleri ve düşme durdurucu cihazların kullanımı.</li>
                    </ul>

                    <h3>6. Acil Durum ve Kurtarma Planları</h3>
                    <ul>
                        <li><strong>Acil Durum Prosedürleri:</strong> Yüksekte çalışırken acil durumlarda yapılması gerekenler.</li>
                        <li><strong>Kurtarma Yöntemleri:</strong> Düşme veya kaza durumunda kurtarma operasyonlarının nasıl gerçekleştirileceği.</li>
                    </ul>

                    <h3>7. Uygulamalı Eğitim</h3>
                    <ul>
                        <li><strong>Pratik Eğitim:</strong> Teorik bilgilerin pratiğe dökülmesi, güvenli çalışma tekniklerinin uygulamalı olarak gösterilmesi.</li>
                        <li><strong>Tatbikatlar:</strong> Gerçekçi senaryolarla yapılan tatbikatlar.</li>
                    </ul>

                    <h3>Yüksekte Çalışma Eğitimine Kimler Katılmalı?</h3>
                    <ul>
                        <li><strong>İnşaat Çalışanları:</strong> İnşaat sektöründe çalışan tüm işçiler.</li>
                        <li><strong>Bakım ve Onarım Ekipleri:</strong> Fabrika, tesis ve binalarda bakım-onarım yapan ekipler.</li>
                        <li><strong>Temizlik Personeli:</strong> Yüksek binalarda veya ulaşılması zor yerlerde çalışan temizlik personeli.</li>
                        <li><strong>Çatı İşçileri:</strong> Çatılarda çalışan kişiler.</li>
                    </ul>

                    <h3>Eğitim Yöntemleri</h3>
                    <ul>
                        <li><strong>Teorik Dersler:</strong> Sınıf ortamında verilen dersler ve sunumlar.</li>
                        <li><strong>Online Eğitim:</strong> İnternet üzerinden erişilebilen kurslar ve modüller.</li>
                        <li><strong>Uygulamalı Eğitim:</strong> Pratik tatbikatlar ve yüksekte çalışma tekniklerinin uygulamalı olarak gösterilmesi.</li>

                    </ul>

                </div>
                <div className='content-center-box2'>
                    <img className='img1' src={hight} alt="" width={300} height={200} />
                    <img className='img2' src={hight2} alt="" width={300} height={200} />
                </div>
            </div>

        </div>
    )
}

export default YuksekteCalisma