import LeftMenu from "../LeftMenu/LeftMenu";
import "./Carts.css";
import dsp from "../../assets/other4.jpg";
import dsp2 from "../../assets/other3.jpg";
import { motion } from "framer-motion";

const DigerSaglikPersoneli = () => {
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
          Diğer Sağlık Personeli (DSP)
        </h1>
        <div className="card-content-text">
          <p>
            İş sağlığı ve güvenliği hizmetlerinde, işyeri hekimi ve iş güvenliği
            uzmanı ile birlikte çalışan, genellikle hemşire, sağlık memuru,
            çevre sağlığı teknisyeni veya acil tıp teknisyeni gibi sağlık
            profesyonelleridir. DSP'nin temel amacı, çalışanların sağlığını
            korumak ve iş yerinde sağlıklı bir çalışma ortamı sağlamaktır.
          </p>
          <h3>DSP'nin Görev ve Sorumlulukları</h3>
          <h4>Sağlık Gözetimi</h4>
          <p>
            Çalışanların sağlık durumlarını izlemek ve periyodik sağlık
            kontrollerini yapmak. İşe giriş ve periyodik muayenelerle
            çalışanların sağlık durumlarını değerlendirmek.
          </p>
          <h4>İş Sağlığı ve Güvenliği Eğitimi</h4>
          <p>
            Çalışanlara iş sağlığı ve güvenliği konularında eğitim vermek.İlk
            yardım ve acil müdahale eğitimleri düzenlemek.
          </p>
          <h4>Risk Değerlendirmesi ve Yönetimi</h4>
          <p>
            İş yerinde sağlık ve güvenlik risklerini belirlemek ve
            değerlendirmek.Belirlenen riskleri minimize etmek için gerekli
            önlemleri almak ve önerilerde bulunmak.
          </p>
          <h4>İş Hijyeni ve Çevre Sağlığı</h4>
          <p>
            İş yerinde hijyen koşullarının sağlanması için çalışmalar
            yapmak.Çalışma ortamının sağlıklı ve güvenli olması için gerekli
            kontrolleri ve düzenlemeleri yapmak.
          </p>
          <h4>İş Kazaları ve Meslek Hastalıkları</h4>
          <p>
            İş kazaları ve meslek hastalıklarını kayıt altına almak ve
            raporlamak.İş kazalarının ve meslek hastalıklarının önlenmesi için
            gerekli tedbirleri almak.
          </p>
          <h4>İlkyardım ve Acil Müdahale</h4>
          <p>
            İş yerinde meydana gelebilecek acil durumlarda ilk yardım
            müdahalesinde bulunmak. Acil durum planlarının hazırlanmasına ve
            uygulanmasına katkı sağlamak.
          </p>
          <h4>Sağlık Danışmanlığı</h4>
          <p>
            Çalışanlara sağlık konularında danışmanlık hizmeti vermek. Sağlık
            sorunları olan çalışanların iş yerindeki durumlarını değerlendirmek
            ve uygun çözümler üretmek.
          </p>
          <h4>Sağlık Taramaları ve Aşılama</h4>
          <p>
            Çalışanların düzenli sağlık taramalarını organize etmek.Gerekli
            görüldüğünde çalışanlara aşı uygulamaları yapmak.
          </p>
          <h3>DSP'nin Önemi</h3>
          <h4>Çalışan Sağlığını Korumak</h4>
          <p>
            DSP, çalışanların sağlığını koruyarak iş gücünün verimliliğini
            artırır.
          </p>
          <h4> İş Sağlığı ve Güvenliği Kültürünü Geliştirmek</h4>
          <p>
            DSP, iş yerinde iş sağlığı ve güvenliği kültürünün gelişmesine
            katkıda bulunur.
          </p>
          <h4>Hukuki ve Mevzuata Uyum</h4>
          <p>
            DSP, iş yerinin iş sağlığı ve güvenliği ile ilgili yasal
            gerekliliklere uyum sağlamasına yardımcı olur.
          </p>
        </div>
      </motion.div>
      <div className="card-images">
        <motion.img
          className="card-img1"
          src={dsp}
          alt="Acil durum resmi"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        />
        <motion.img
          className="card-img2"
          src={dsp2}
          alt="Acil durum resmi"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        />
      </div>
    </div>
  );
};

export default DigerSaglikPersoneli;
