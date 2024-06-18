import React from 'react'
import dsp from "../../assets/dsp2.jpeg"
import dsp2 from "../../assets/dsp.jpeg"
import './cards.css'
import YanMenu from './YanMenu'
import { Link } from "react-router-dom";

function Dsp() {
    return (
        <div className='content-item'>
            <div className='content-title'>
                <h1>Diğer Sağlık Personeli (DSP) </h1>
            </div>
            <div className='content-center'>
                <div className='content-center-box1'>


                    <h3>Diğer Sağlık Personeli</h3>
                    <p>İş sağlığı ve güvenliği hizmetlerinde, işyeri hekimi ve iş güvenliği uzmanı ile birlikte çalışan, genellikle hemşire, sağlık memuru, çevre sağlığı teknisyeni veya acil tıp teknisyeni gibi sağlık profesyonelleridir. DSP'nin temel amacı, çalışanların sağlığını korumak ve iş yerinde sağlıklı bir çalışma ortamı sağlamaktır.</p>

                    <h3>DSP'nin Görev ve Sorumlulukları:</h3>
                    <ul>
                        <li>
                            <strong>Sağlık Gözetimi:</strong>
                            <ul>
                                <li>Çalışanların sağlık durumlarını izlemek ve periyodik sağlık kontrollerini yapmak.</li>
                                <li>İşe giriş ve periyodik muayenelerle çalışanların sağlık durumlarını değerlendirmek.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>İş Sağlığı ve Güvenliği Eğitimi:</strong>
                            <ul>
                                <li>Çalışanlara iş sağlığı ve güvenliği konularında eğitim vermek.</li>
                                <li>İlk yardım ve acil müdahale eğitimleri düzenlemek.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Risk Değerlendirmesi ve Yönetimi:</strong>
                            <ul>
                                <li>İş yerinde sağlık ve güvenlik risklerini belirlemek ve değerlendirmek.</li>
                                <li>Belirlenen riskleri minimize etmek için gerekli önlemleri almak ve önerilerde bulunmak.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>İş Hijyeni ve Çevre Sağlığı:</strong>
                            <ul>
                                <li>İş yerinde hijyen koşullarının sağlanması için çalışmalar yapmak.</li>
                                <li>Çalışma ortamının sağlıklı ve güvenli olması için gerekli kontrolleri ve düzenlemeleri yapmak.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>İş Kazaları ve Meslek Hastalıkları:</strong>
                            <ul>
                                <li>İş kazaları ve meslek hastalıklarını kayıt altına almak ve raporlamak.</li>
                                <li>İş kazalarının ve meslek hastalıklarının önlenmesi için gerekli tedbirleri almak.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>İlkyardım ve Acil Müdahale:</strong>
                            <ul>
                                <li>İş yerinde meydana gelebilecek acil durumlarda ilk yardım müdahalesinde bulunmak.</li>
                                <li>Acil durum planlarının hazırlanmasına ve uygulanmasına katkı sağlamak.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Sağlık Danışmanlığı:</strong>
                            <ul>
                                <li>Çalışanlara sağlık konularında danışmanlık hizmeti vermek.</li>
                                <li>Sağlık sorunları olan çalışanların iş yerindeki durumlarını değerlendirmek ve uygun çözümler üretmek.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Sağlık Taramaları ve Aşılama:</strong>
                            <ul>
                                <li>Çalışanların düzenli sağlık taramalarını organize etmek.</li>
                                <li>Gerekli görüldüğünde çalışanlara aşı uygulamaları yapmak.</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>DSP'nin Önemi</h3>
                    <ul>
                        <li><strong>Çalışan Sağlığını Korumak:</strong> DSP, çalışanların sağlığını koruyarak iş gücünün verimliliğini artırır.</li>
                        <li><strong>İş Sağlığı ve Güvenliği Kültürünü Geliştirmek:</strong> DSP, iş yerinde iş sağlığı ve güvenliği kültürünün gelişmesine katkıda bulunur.</li>
                        <li><strong>Hukuki ve Mevzuata Uyum:</strong> DSP, iş yerinin iş sağlığı ve güvenliği ile ilgili yasal gerekliliklere uyum sağlamasına yardımcı olur.</li>
                    </ul>
                </div>
                <div className='content-center-box2'>
                    <div className='box-img'>
                        <img className='img1' src={dsp2} alt="" width={300} height={200} />
                        <img className='img2' src={dsp} alt="" width={300} height={200} />
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

export default Dsp