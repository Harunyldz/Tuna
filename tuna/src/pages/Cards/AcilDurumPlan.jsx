import LeftMenu from "../../components/LeftMenu/LeftMenu";
import "./Carts.css";
import acilDr from "../../assets/acil-durum.jpg";
import acilDr2 from "../../assets/acildurum3.jpg";
import { motion } from "framer-motion";

const AcilDurumPlan = () => {
  return (
    <div className="card-container">
      <LeftMenu />
      <motion.div
        className="card-content"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Acil Durum Planı
        </h1>
        <div className="card-content-text">
          <p>
            Acil durum planı, olası acil durumlar ve afetler karşısında can ve
            mal kaybını en aza indirmek için önceden hazırlanan, sistematik bir
            şekilde düzenlenen eylem planıdır. Bu plan, beklenmedik olaylar
            karşısında hızlı ve etkili bir şekilde nasıl tepki verileceğini
            belirler. İşte acil durum planının temel unsurları:
          </p>
          <h4>Risk Analizi ve Tehlike Değerlendirmesi</h4>
          <p>
            İş yerindeki veya yaşanılan bölgedeki potansiyel riskler ve
            tehlikeler belirlenir. Bu risklerin olasılıkları ve potansiyel
            etkileri değerlendirilir.
          </p>

          <h4>Acil Durum Ekipleri ve Görev Dağılımı</h4>
          <p>
            Acil durumlarda görev alacak ekipler oluşturulur. Bu ekiplerin her
            birine özel görevler ve sorumluluklar atanır (örneğin, ilk yardım
            ekibi, yangınla mücadele ekibi).
          </p>

          <h4>Acil Durum İletişim Planı</h4>
          <p>
            Acil bir durumda nasıl ve kiminle iletişim kurulacağı belirlenir.
            İletişim kanalları (telefon, telsiz, e-posta vb.) ve iletişim
            bilgileri listelenir.
          </p>

          <h4>Tahliye Planı</h4>
          <p>
            Acil durumlarda binanın nasıl tahliye edileceği, çıkış yolları ve
            toplanma alanları belirlenir. Engelli bireylerin tahliyesi için özel
            düzenlemeler yapılır.
          </p>

          <h4>Acil Durum Ekipmanları ve Kaynakları</h4>
          <p>
            Acil durumlarda kullanılacak ekipmanlar (yangın söndürücüler, ilk
            yardım malzemeleri, acil durum ışıkları vb.) ve bunların konumları
            belirlenir. Bu ekipmanların düzenli bakımı ve kullanılabilir durumda
            olmaları sağlanır.
          </p>

          <h4>Eğitim ve Tatbikatlar</h4>
          <p>
            Acil durum planının etkin bir şekilde uygulanabilmesi için
            çalışanlara veya ilgili kişilere düzenli olarak eğitim verilir.
            Belirli aralıklarla tatbikatlar yapılarak, planın uygulanabilirliği
            test edilir ve eksiklikler tespit edilerek iyileştirilir.
          </p>

          <h4>Belgeleme ve Sürekli Güncelleme</h4>
          <p>
            Acil durum planı yazılı olarak belgelenir ve kolayca erişilebilir
            bir yerde saklanır. Plan, yeni riskler ve değişen koşullar
            doğrultusunda düzenli olarak gözden geçirilir ve güncellenir.
          </p>
        </div>
      </motion.div>
      <div className="card-images">
        <motion.img
          className="card-img1"
          src={acilDr}
          alt="Acil durum resmi"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        />
        <motion.img
          className="card-img2"
          src={acilDr2}
          alt="Acil durum resmi"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        />
      </div>
    </div>
  );
};

export default AcilDurumPlan;
