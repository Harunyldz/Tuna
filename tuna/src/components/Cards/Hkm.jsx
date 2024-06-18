import React from 'react'
import hkm from "../../assets/HKM.jpg"
import hkm2 from "../../assets/hkm2.png"
import './cards.css'
import YanMenu from './YanMenu'
import { Link } from "react-router-dom";

function Hkm() {
    return (
        <div className='content-item'>
            <div className='content-title'>
                <h1>İşyeri Hekimi</h1>
            </div>
            <div className='content-center'>
                <div className='content-center-box1'>

                    <p>İşyeri hekimi, iş sağlığı ve güvenliği hizmetlerinde önemli bir role sahiptir. Çalışanların sağlıklarını korumak, iş yerinde sağlık ve güvenlik standartlarını geliştirmek ve iş kazalarını önlemek için çalışır.</p>

                    <h3>İşyeri Hekiminin Görev ve Sorumlulukları:</h3>
                    <ul>
                        <li>
                            <strong>Sağlık Gözetimi:</strong>
                            <ul>
                                <li>Çalışanların işe giriş ve periyodik sağlık muayenelerini yapmak.</li>
                                <li>Sağlık risklerini belirlemek ve bu risklere karşı gerekli önlemleri almak.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Risk Değerlendirmesi:</strong>
                            <ul>
                                <li>İş yerinde sağlık risklerinin değerlendirilmesine katılmak.</li>
                                <li>Risklerin azaltılması için alınacak önlemleri belirlemek ve önerilerde bulunmak.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Sağlık Eğitimi:</strong>
                            <ul>
                                <li>Çalışanlara iş sağlığı ve güvenliği konularında eğitimler vermek.</li>
                                <li>Sağlıklı yaşam ve iş sağlığı konularında bilgilendirme yapmak.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>İlk Yardım ve Acil Müdahale:</strong>
                            <ul>
                                <li>İş yerinde meydana gelen kazalara ilk yardım müdahalesinde bulunmak.</li>
                                <li>Acil durum planlarının hazırlanmasına katkıda bulunmak ve gerektiğinde uygulamak.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Meslek Hastalıklarının Önlenmesi:</strong>
                            <ul>
                                <li>Meslek hastalıklarının erken teşhisi için taramalar yapmak.</li>
                                <li>Meslek hastalıklarının önlenmesi için gerekli önlemleri belirlemek ve uygulamak.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Çalışma Ortamı Gözetimi:</strong>
                            <ul>
                                <li>Çalışma ortamının sağlık ve güvenlik koşullarını denetlemek.</li>
                                <li>Ortam ölçümleri ve değerlendirmeleri yapmak.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>İş Hijyeni:</strong>
                            <ul>
                                <li>İş yerinde hijyen kurallarının uygulanmasını sağlamak.</li>
                                <li>Çalışanların hijyen eğitimlerini organize etmek.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>İş Sağlığı ve Güvenliği Kurulu:</strong>
                            <ul>
                                <li>İş sağlığı ve güvenliği kurul toplantılarına katılmak.</li>
                                <li>Kurulda sağlık ve güvenlikle ilgili konularda görüş bildirmek.</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>İşyeri Hekiminin Önemi</h3>
                    <ul>
                        <li><strong>Çalışan Sağlığını Korumak:</strong> İşyeri hekimi, çalışanların sağlıklarını koruyarak iş gücünün verimliliğini artırır.</li>
                        <li><strong>İş Sağlığı ve Güvenliği Kültürünü Geliştirmek:</strong> İşyeri hekimi, iş yerinde iş sağlığı ve güvenliği kültürünün gelişmesine katkıda bulunur.</li>
                        <li><strong>Hukuki ve Mevzuata Uyum:</strong> İşyeri hekimi, iş yerinin iş sağlığı ve güvenliği ile ilgili yasal gerekliliklere uyum sağlamasına yardımcı olur.</li>
                    </ul>
                </div>
                <div className='content-center-box2'>
                    <div className='box-img'>
                        <img className='img1' src={hkm2} alt="" width={300} height={200} />
                        <img className='img2' src={hkm} alt="" width={300} height={200} />
                    </div>
                    <div>
                        <YanMenu />
                        <Link to="/teklifAl"><button className="TeklifBtn">Teklif Al</button></Link>
                    </div>
                </div>
            </div>

        </div >



    )
}

export default Hkm