import React from 'react'
import acilDr from "../../assets/acildurum.jpg"
import acilDr2 from "../../assets/acil-durum.jpg"
import './cards.css'
import YanMenu from './YanMenu'
import { Link } from "react-router-dom";




function AcilDrmPln() {
    return (
        <div className='content-item'>
            <div className='content-title'>
                <h1>Acil Durum Planı</h1>
            </div>
            <div className='content-center'>
                <div className='content-center-box1'>

                    <p>
                        Acil durum planı, olası acil durumlar ve afetler karşısında can ve mal kaybını en aza indirmek için önceden hazırlanan, sistematik bir şekilde düzenlenen eylem planıdır. Bu plan, beklenmedik olaylar karşısında hızlı ve etkili bir şekilde nasıl tepki verileceğini belirler. İşte acil durum planının temel unsurları:
                    </p>
                    <h3>1. Risk Analizi ve Tehlike Değerlendirmesi</h3>
                    <p>İş yerindeki veya yaşanılan bölgedeki potansiyel riskler ve tehlikeler belirlenir. Bu risklerin olasılıkları ve potansiyel etkileri değerlendirilir.</p>

                    <h3>2. Acil Durum Ekipleri ve Görev Dağılımı</h3>
                    <p>Acil durumlarda görev alacak ekipler oluşturulur. Bu ekiplerin her birine özel görevler ve sorumluluklar atanır (örneğin, ilk yardım ekibi, yangınla mücadele ekibi).</p>

                    <h3>3. Acil Durum İletişim Planı</h3>
                    <p>Acil bir durumda nasıl ve kiminle iletişim kurulacağı belirlenir. İletişim kanalları (telefon, telsiz, e-posta vb.) ve iletişim bilgileri listelenir.</p>

                    <h3>4. Tahliye Planı</h3>
                    <p>Acil durumlarda binanın nasıl tahliye edileceği, çıkış yolları ve toplanma alanları belirlenir. Engelli bireylerin tahliyesi için özel düzenlemeler yapılır.</p>

                    <h3>5. Acil Durum Ekipmanları ve Kaynakları</h3>
                    <p>Acil durumlarda kullanılacak ekipmanlar (yangın söndürücüler, ilk yardım malzemeleri, acil durum ışıkları vb.) ve bunların konumları belirlenir. Bu ekipmanların düzenli bakımı ve kullanılabilir durumda olmaları sağlanır.</p>

                    <h3>6. Eğitim ve Tatbikatlar</h3>
                    <p>Acil durum planının etkin bir şekilde uygulanabilmesi için çalışanlara veya ilgili kişilere düzenli olarak eğitim verilir. Belirli aralıklarla tatbikatlar yapılarak, planın uygulanabilirliği test edilir ve eksiklikler tespit edilerek iyileştirilir.</p>

                    <h3>7. Belgeleme ve Sürekli Güncelleme</h3>
                    <p>Acil durum planı yazılı olarak belgelenir ve kolayca erişilebilir bir yerde saklanır. Plan, yeni riskler ve değişen koşullar doğrultusunda düzenli olarak gözden geçirilir ve güncellenir.</p>

                </div>
                <div className='content-center-box2'>
                    <div className='box-img'>
                        <img className='img1' src={acilDr2} alt="" width={300} height={200} />
                        <img className='img2' src={acilDr} alt="" width={300} height={200} />
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

export default AcilDrmPln