import React from 'react'
import yangin from "../../assets/yangin2.jpeg"
import yangin2 from "../../assets/yangin.jpg"
import './cards.css'
import YanMenu from './YanMenu'
import { Link } from "react-router-dom";


function YanginEgt() {
    return (
        <div className='content-item'>
            <div className='content-title'>
                <h1>Yangın Eğitimi</h1>
            </div>
            <div className='content-center'>
                <div className='content-center-box1'>
                    <p>
                        Yangın eğitimi, yangın güvenliği ve yangınla mücadele konusunda bireyleri bilgilendiren ve eğiten bir süreçtir. Bu eğitim, yangınların nasıl önleneceği, yangın anında ne yapılması gerektiği ve yangın söndürme ekipmanlarının nasıl kullanılacağı gibi konuları kapsar. Yangın eğitimi genellikle şu unsurları içerir:
                    </p>
                    <h2>1. Yangın Önleme ve Güvenlik</h2>
                    <ul>
                        <li><b>Yangın Tehlikelerinin Tanıtılması:</b> Yanıcı maddeler, yangına neden olabilecek durumlar ve tehlikeli alanlar hakkında bilgi.</li>
                        <li><b>Yangın Güvenliği Politikaları:</b> Yangın güvenliği kuralları ve düzenlemeler.</li>
                        <li><b>Yangın Risk Değerlendirmesi:</b> İş yerlerinde ve evlerde yangın risklerinin değerlendirilmesi ve azaltılması.</li>
                    </ul>

                    <h2>2. Yangın Söndürme Teknikleri</h2>
                    <ul>
                        <li><b>Yangın Sınıfları ve Tipleri:</b> A, B, C, D ve K sınıfı yangınların tanıtılması.</li>
                        <li><b>Yangın Söndürme Cihazları:</b> Yangın söndürücüler, yangın battaniyeleri ve diğer yangın söndürme ekipmanlarının kullanımı.</li>
                        <li><b>Yangın Söndürme Taktikleri:</b> Yangın söndürmede kullanılacak taktikler ve yöntemler.</li>
                    </ul>

                    <h2>3. Acil Durum Eylem Planı</h2>
                    <ul>
                        <li><b>Tahliye Planları:</b> Binaların güvenli bir şekilde nasıl tahliye edileceği.</li>
                        <li><b>Toplanma Alanları:</b> Acil durumlarda toplanma noktaları ve iletişim planları.</li>
                        <li><b>Acil Durum İletişimi:</b> İtfaiye, sağlık ekipleri ve diğer acil durum hizmetleri ile nasıl iletişim kurulacağı.</li>
                    </ul>

                    <h2>4. Yangın Tatbikatları</h2>
                    <ul>
                        <li><b>Pratik Eğitim:</b> Gerçekçi yangın tatbikatları ile teorik bilgilerin pratiğe dökülmesi.</li>
                        <li><b>Rol Dağılımı:</b> Acil durumlarda kimin hangi görevleri üstleneceğinin belirlenmesi.</li>
                    </ul>

                    <h2>5. İlk Yardım</h2>
                    <ul>
                        <li><b>Yanık Tedavisi:</b> Yangın sırasında meydana gelen yanıkların nasıl tedavi edileceği.</li>
                        <li><b>Duman Zehirlenmesi:</b> Duman inhalasyonunun belirtileri ve ilk yardım uygulamaları.</li>
                    </ul>

                    <h2>Yangın Eğitimine Kimler Katılmalı?</h2>
                    <ul>
                        <li><b>İş Yerinde Çalışanlar:</b> Tüm çalışanlar, iş yerlerinde yangın güvenliği konusunda bilgi sahibi olmalıdır.</li>
                        <li><b>Ev Sahipleri ve Aileler:</b> Evde yangın güvenliği için gerekli bilgileri edinmelidir.</li>
                        <li><b>Okullar ve Öğrenciler:</b> Okullarda yangın tatbikatları ve yangın eğitimi yapılmalıdır.</li>
                    </ul>

                    <h2>Eğitim Yöntemleri</h2>
                    <ul>
                        <li><b>Teorik Dersler:</b> Sınıf ortamında verilen dersler ve sunumlar.</li>
                        <li><b>Online Eğitim:</b> İnternet üzerinden erişilebilen kurslar ve modüller.</li>
                        <li><b>Uygulamalı Eğitim:</b> Pratik tatbikatlar ve yangın söndürme tekniklerinin uygulamalı olarak gösterilmesi.</li>
                    </ul>
                    <p>
                        Yangın eğitimi, yangınla ilgili riskleri azaltmak ve yangın anında doğru müdahaleyi yapabilmek için hayati önem taşır. Bu eğitimler sayesinde, yangın durumlarında paniği önleyebilir ve can kaybı ile maddi hasarı en aza indirebilirsiniz.
                    </p>
                </div>
                <div className='content-center-box2'>
                    <div className='box-img'>
                        <img className='img1' src={yangin2} alt="" width={300} height={200} />
                        <img className='img2' src={yangin} alt="" width={300} height={200} />
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

export default YanginEgt