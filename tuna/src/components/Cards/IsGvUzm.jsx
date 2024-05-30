import React from 'react'
import igu from "../../assets/igu.jpg"
import igu2 from "../../assets/igu2.jpg"
import './cards.css'

function IsGvUzm() {
    return (
        <div className='content-item'>
            <div className='content-title'>
                <h1>İş Güvenliği Uzmanı</h1>
            </div>
            <div className='content-center'>
                <div className='content-center-box1'>
                    <p>
                        İş güvenliği uzmanı, iş yerlerinde çalışanların sağlığını ve güvenliğini sağlamak amacıyla çeşitli önlemler alarak riskleri minimize eden profesyonellerdir. İş güvenliği uzmanlarının görevleri, iş yerinde meydana gelebilecek iş kazalarını ve meslek hastalıklarını önlemek, çalışanların güvenli ve sağlıklı bir çalışma ortamında çalışmasını sağlamak için gerekli tedbirleri almak ve uygulamaktır.
                    </p>
                    <p>
                        İş güvenliği uzmanlarımız, iş yerlerinde meydana gelebilecek tehlikeleri ve riskleri belirler, önlemek için stratejiler geliştirir, çalışanları bu konuda eğitir ve sağlık ve güvenlik düzenlemeleri ile uyumu sağlar. Bu hizmetlerin sağlanması, 6331 sayılı İş Sağlığı ve Güvenliği Kanunu’na uygun olarak gerçekleşir ve bu kanuna göre işverenler, iş yerlerinde iş sağlığı ve güvenliği hizmetlerini sağlamakla yükümlüdür.
                    </p>
                    <h3>İş Güvenliği Uzmanlığı Nedir?</h3>
                    <p>
                        İş güvenliği uzmanlığı, iş yerlerinde çalışanların güvenliğini ve sağlığını korumak amacıyla yapılan düzenlemeler ve uygulamalar üzerine uzmanlaşmış bir meslektir. Bu alanda çalışan uzmanlar, iş yerlerinde olası tehlikeleri tespit eder, risk değerlendirmeleri yapar ve iş kazalarını önlemek için gerekli tedbirleri alır. İş güvenliği uzmanlığı, özellikle sanayi, inşaat ve madencilik gibi yüksek riskli sektörlerde hayati öneme sahiptir.</p>
                    <h3>İş Güvenliği Uzmanının Görevleri</h3>
                    <ol>
                        <li><b>Risk Değerlendirmesi:</b> İş yerindeki potansiyel tehlikeleri belirlemek ve bu tehlikelerin risk seviyelerini değerlendirmek.</li>
                        <li><b>Eğitim ve Bilgilendirme:</b>Çalışanlara iş güvenliği konularında eğitimler vermek ve farkındalıklarını artırmak.</li>
                        <li><b>Acil Durum Planları:</b> Yangın, patlama, kimyasal sızıntı gibi acil durumlar için önceden planlar hazırlamak ve tatbikatlar düzenlemek.</li>
                        <li><b>Denetim ve Kontrol:</b> İş yerinde güvenlik standartlarına uyulup uyulmadığını düzenli olarak denetlemek ve gerektiğinde iyileştirme önerilerinde bulunmak.</li>
                        <li><b>Kaza Araştırması:</b> Meydana gelen iş kazalarını ve meslek hastalıklarını araştırarak nedenlerini tespit etmek ve tekrarını önlemek için çözümler geliştirmek.</li>
                        <li><b>Dokümantasyon: </b> İş güvenliği ile ilgili tüm faaliyetleri belgelemek ve raporlamak.</li>
                    </ol>
                    <h3>İş Güvenliği Uzmanı Olma Süreci</h3>
                    <ul>
                        <li><b>Eğitim:</b>İş güvenliği uzmanı olmak için üniversitelerin mühendislik, mimarlık veya fen fakültelerinden mezun olmak gereklidir. Ayrıca, iş sağlığı ve güvenliği alanında lisans veya lisansüstü eğitim almak da mümkündür.</li>
                        <li><b>Sertifikasyon:</b>Mezuniyet sonrasında, Çalışma ve Sosyal Güvenlik Bakanlığı tarafından yetkilendirilmiş kurumlar tarafından verilen eğitim programlarına katılmak ve başarılı bir şekilde tamamlamak gerekmektedir</li>
                        <li><b>Sınav:</b> Eğitim programını tamamlayan adaylar, Bakanlık tarafından düzenlenen iş güvenliği uzmanlığı sınavına girerler. Bu sınavda başarılı olanlar iş güvenliği uzmanı sertifikası almaya hak kazanırlar.</li>
                        <li><b>Sürekli Eğitim:</b> İş güvenliği uzmanları, mesleklerinde güncel kalmak için belirli periyotlarda yenileme eğitimlerine katılmak zorundadır.</li>
                    </ul>
                    <h3>İş Güvenliği Uzmanlarının Çalışma Alanları</h3>
                    <ul>
                        <li><b>Sanayi ve Üretim Tesisleri:</b>Kimya, metal, gıda, tekstil gibi çeşitli sektörlerde. </li>
                        <li><b>İnşaat:</b>İnşaat sahalarında iş güvenliği uygulamaları.</li>
                        <li><b>Madencilik:</b>Maden ocaklarında iş güvenliği önlemleri.</li>
                        <li><b>Hizmet Sektörü: </b> Hastaneler, okullar, alışveriş merkezleri gibi alanlarda.</li>
                    </ul>
                    <p>İş güvenliği uzmanları, iş yerlerinin güvenli ve sağlıklı bir çalışma ortamı sağlamasına katkıda bulunarak hem iş kazalarını önlemeye hem de çalışanların refahını artırmaya yönelik önemli bir rol üstlenirler.</p>
                </div>
                <div className='content-center-box2'>
                    <img className='img1' src={igu} alt="" width={300} height={200} />
                    <img className='img2' src={igu2} alt="" width={300} height={200} />
                </div>
            </div>

        </div>



    )
}

export default IsGvUzm