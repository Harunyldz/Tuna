import React from 'react'
import { ImArrowRight } from "react-icons/im";
import isgEgt from "../../assets/isgEgt.png"
import isgEgt2 from "../../assets/isgEgtm3.png"
import './cards.css'
import YanMenu from './YanMenu'
import { Link } from "react-router-dom";


function IsgTmlEgtm() {
    return (
        <div className='content-item'>
            <div className='content-title'>
                <h1>İş Güvenliği Eğitimi</h1>
            </div>
            <div className='content-center'>
                <div className='content-center-box1'>
                    <p>İş güvenliği temel eğitimi, işyerlerinde çalışanların iş sağlığı ve güvenliği konusunda bilinçlenmesi, risklerin farkına varması ve güvenli çalışma yöntemlerini öğrenmesi amacıyla verilen bir eğitimdir. Bu eğitimler, 6331 sayılı İş Sağlığı ve Güvenliği Kanunu ve ilgili yönetmelikler çerçevesinde düzenlenir. Tehlike sınıflarına göre iş güvenliği temel eğitiminin süreleri farklılık göstermektedir.</p>

                    <h3>Tehlike Sınıflarına Göre Eğitim Süreleri</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Tehlike Sınıfı</th>
                                <th>Eğitim Süresi</th>
                                <th>Yenileme Süresi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Az Tehlikeli</td>
                                <td>En az 8 saat</td>
                                <td>Her 3 yılda bir</td>
                            </tr>
                            <tr>
                                <td>Tehlikeli</td>
                                <td>En az 12 saat</td>
                                <td>Her 2 yılda bir</td>
                            </tr>
                            <tr>
                                <td>Çok Tehlikeli</td>
                                <td>En az 16 saat</td>
                                <td>Her yıl</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Eğitim Konuları</h3>
                    <ul>
                        <li>İş sağlığı ve güvenliğinin genel prensipleri</li>
                        <li>İş kazaları ve meslek hastalıklarının nedenleri ve korunma yolları</li>
                        <li>Yasal mevzuat ve işveren ile çalışanların yükümlülükleri</li>
                        <li>Risk değerlendirmesi ve risk kontrol önlemleri</li>
                        <li>Acil durum planları ve bu durumlarda yapılması gerekenler</li>
                        <li>Kişisel koruyucu donanımlar ve kullanımı</li>
                        <li>İş yerinde ergonomi ve doğru çalışma teknikleri</li>
                    </ul>

                    <h3>Eğitimlerin Düzenlenmesi</h3>
                    <p>Bu eğitimler, iş güvenliği uzmanları, işyeri hekimleri veya alanında yetkin kişiler tarafından verilir. Eğitimler, hem teorik hem de pratik olarak düzenlenir ve çalışanların eğitim sonunda konuları anladıklarını doğrulamak için sınavlar yapılabilir.</p>
                    <p>İşyerlerinde bu eğitimlerin düzenli olarak verilmesi, çalışanların güvenli ve sağlıklı bir çalışma ortamında bulunmalarını sağlamak açısından son derece önemlidir. Eğitimlerin düzenli olarak yenilenmesi de, çalışanların sürekli olarak güncel bilgilerle donatılmasını ve iş güvenliği konusundaki farkındalıklarının yüksek tutulmasını sağlar.</p>

                </div>
                <div className='content-center-box2'>
                    <div className='box-img'>
                        <img className='img1' src={isgEgt} alt="" width={300} height={200} />
                        <img className='img2' src={isgEgt2} alt="" width={300} height={200} />
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

export default IsgTmlEgtm