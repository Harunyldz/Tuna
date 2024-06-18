import React from 'react'
import './cards.css'
import isgKtp1 from "../../assets/isgKtp1.jpg"
import isgKtp2 from "../../assets/isgKtp2.jpg"
import YanMenu from './YanMenu'
import { Link } from "react-router-dom";

function IsgKatipOnayNasil() {
    return (

        <div className='content-item'>
            <div className='content-title'>
                <h1>İSG Katip Onayı Nasıl Yapılır?</h1>
            </div>
            <div className='content-center'>
                <div className='content-center-box1'>
                    <p>
                        <strong>İSG Katip nedir?</strong>
                    </p>
                    <p>
                        T.C. Aile, Çalışma ve Sosyal Hizmetler Bakanlığı’na bağlı olan İSG Genel Müdürlüğü,  6331 sayılı İş Sağlığı ve Güvenliği Kanunu’nda belirtilmiş olan zorunlu İSG hizmetlerinin elektronik ortamda takibi için, İSG Katip olarak adlandırılan bir sistem geliştirmiştir. Bu sistem sayesinde Türkiye’de kayıtlı olan tüm işyerlerinin iş sağlığı ve güvenliği hizmeti alıp almadıklarını kolaylıkla takip ederken; işyeri hekimi, iş güvenliği uzmanı ve diğer sağlık teknisyenlerinin işyerlerinde görevlendirilmesi bu sistem ile gerçekleştirilir. Kanunda yasal hizmetin ancak İSG Katip’ten karşılıklı onaylamadan itibaren başladığı belirtilmiştir. İSG Katip Sistemi ile OSGB hizmeti almayan işverenlere yönelik otomatik olarak cezai işlem yapılabilmekte, itiraz söz konusu olduğunda işyerleri denetime alınmakta ve itirazlar incelenerek karar verilmektedir. Ayrıca onaylanmamış sözleşme ile hizmet veren OSGB’ lere ise ciddi idari cezalar ve hatta kapatılmalarına bile neden olacak yaptırımlar uygulanmaktadır.
                    </p>
                    <p>
                        <strong>İSG Katip Onayı Nasıl Yapılır?</strong>
                    </p>
                    <p>
                        Kanunen zorunlu olan İSG Katip karşılıklı onaylama işlemi için; hizmet alacak işyerinin SGK işyeri sicil numarası ile birlikte OSGB’nin İSG Katip üzerinden gerekli görevlendirmeleri yaptıktan sonra hizmet alan işverenin, e-Devlet şifresi ile İSG Katip sistemine giriş yaparak, kayıtlı kullanıcı girişinden, hizmet alan işyeri modülünü açarak ONAY bekleyen sözleşmeleri türüne göre; ayrı ayrı onaylaması gerekmektedir ve bu bir yasal zorunluluktur.
                    </p>
                    <p>
                        İSG Katip Sisteminden ONAY VERMEK İÇİN
                        <a href="https://isgkatip.csgb.gov.tr" target='_blank'>TIKLAYINIZ</a>.
                    </p>
                </div>
                <div className='content-center-box2' style={{ marginBottom: '150px' }}>
                    <div className='box-img'>
                        <img className='img1' src={isgKtp1} alt="" width={300} height={200} />
                        <img className='img2' src={isgKtp2} alt="" width={300} height={200} />
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

export default IsgKatipOnayNasil