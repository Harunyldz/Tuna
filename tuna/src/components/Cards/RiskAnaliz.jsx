import React from 'react'
import Risk from "../../assets/riskDe.jpg"
import Risk2 from "../../assets/risk-image.jpg"
import './cards.css'
import YanMenu from './YanMenu'
import { Link } from "react-router-dom";


function RiskAnaliz() {
    return (
        <div className='content-item'>
            <div className='content-title'>
                <h1>Risk Analizi Raporu</h1>
            </div>
            <div className='content-center'>
                <div className='content-center-box1'>

                    <p>
                        İş güvenliği risk analizi, işyerindeki potansiyel tehlikeleri belirlemek, bu tehlikelerin çalışanlar üzerindeki olası etkilerini değerlendirmek ve bu riskleri kontrol altına almak için alınacak önlemleri planlamak amacıyla yapılan sistematik bir süreçtir. İş güvenliği risk analizinin aşamaları genellikle şu şekildedir:

                    </p>

                    <h3>1. Hazırlık ve Planlama</h3>
                    <ul>
                        <li><strong>Ekip Oluşturma:</strong> Risk analizi yapmak için uzman kişilerden oluşan bir ekip kurulmalıdır.</li>
                        <li><strong>Bilgi Toplama:</strong> İşyerinin faaliyetleri, kullanılan ekipmanlar, çalışanların görevleri ve mevcut güvenlik önlemleri hakkında bilgi toplanır.</li>
                        <li><strong>Mevzuat ve Standartların İncelenmesi:</strong> İlgili iş sağlığı ve güvenliği mevzuatları, standartlar ve rehberler gözden geçirilir.</li>
                    </ul>


                    <h3>2. Tehlikelerin Belirlenmesi</h3>
                    <ul>
                        <li><strong>İş Yeri Gezisi:</strong> İşyerinin fiziksel olarak incelenmesi, çalışanlarla görüşülmesi ve gözlemler yapılması.</li>
                        <li><strong>Dokümantasyon İncelemesi:</strong> İş kazası kayıtları, meslek hastalığı raporları ve önceki risk analizleri incelenir.</li>
                        <li><strong>Tehlike Tanımlama Teknikleri:</strong> HAZOP, FMEA, What-If analizleri gibi yöntemlerle potansiyel tehlikeler belirlenir.</li>
                    </ul>

                    <h3>3. Risklerin Değerlendirilmesi</h3>
                    <ul>
                        <li><strong>Olasılık ve Şiddet Analizi:</strong> Belirlenen her tehlikenin gerçekleşme olasılığı ve bu tehlikenin gerçekleşmesi durumunda ortaya çıkacak sonuçların şiddeti değerlendirilir.</li>
                        <li><strong>Risk Matrisleri:</strong> Olasılık ve şiddet derecelerine göre riskler sınıflandırılır (düşük, orta, yüksek risk gibi).</li>
                    </ul>

                    <h3>4. Kontrol Önlemlerinin Belirlenmesi</h3>
                    <ul>
                        <li><strong>Önleyici Tedbirler:</strong> Belirlenen risklerin kabul edilebilir seviyelere indirilmesi için alınacak önlemler belirlenir.</li>
                        <li><strong>Kontrol Hiyerarşisi:</strong> Tehlikeleri ortadan kaldırma, mühendislik kontrolleri, idari kontroller ve kişisel koruyucu donanımlar gibi önlemler sıralanır.</li>
                    </ul>

                    <h3>5. Uygulama ve İzleme</h3>
                    <ul>
                        <li><strong>Eylem Planı:</strong> Belirlenen önlemlerin kim tarafından, ne zaman ve nasıl uygulanacağına dair bir plan hazırlanır.</li>
                        <li><strong>Eğitim ve Bilgilendirme:</strong> Çalışanlara riskler ve alınan önlemler hakkında eğitimler verilir.</li>
                        <li><strong>İzleme ve Değerlendirme:</strong> Uygulanan önlemlerin etkinliği düzenli olarak izlenir ve gerektiğinde revize edilir.</li>
                    </ul>


                    <h3>6. Dokümantasyon ve Raporlama</h3>
                    <ul>
                        <li><strong>Rapor Hazırlama:</strong> Yapılan analiz ve alınan önlemler detaylı bir rapor halinde dökümante edilir.</li>
                        <li><strong>Arşivleme:</strong> Analiz raporları ve ilgili dokümanlar düzenli olarak arşivlenir.</li>
                    </ul>

                </div>
                <div className='content-center-box2'>
                    <div className='box-img'>
                        <img className='img1' src={Risk} alt="" width={300} height={200} />
                        <img className='img2' src={Risk2} alt="" width={300} height={200} />
                    </div>
                    <div>
                        <YanMenu />
                        <Link to="/teklifAl"><button className="TeklifBtn">Teklif Al</button></Link>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default RiskAnaliz