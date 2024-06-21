import LeftMenu from "../../components/LeftMenu/LeftMenu";
import "./Carts.css";
import hkm from "../../assets/HKM.jpg";
import hkm2 from "../../assets/hkm2.png";
import { motion } from "framer-motion";

const IsyeriHekimi = () => {
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
          İşyeri Hekimi
        </h1>
        <div className="card-content-text">
          <p>
            İşyeri hekimi, iş sağlığı ve güvenliği hizmetlerinde önemli bir role
            sahiptir. Çalışanların sağlıklarını korumak, iş yerinde sağlık ve
            güvenlik standartlarını geliştirmek ve iş kazalarını önlemek için
            çalışır.
          </p>
          <h3>İşyeri Hekiminin Görev ve Sorumlulukları</h3>
          <h4>Sağlık Gözetimi</h4>
          <p>
            Çalışanların işe giriş ve periyodik sağlık muayenelerini yapmak.
            Sağlık risklerini belirlemek ve bu risklere karşı gerekli önlemleri
            almak.
          </p>
          <h4>Risk Değerlendirmesi</h4>
          <p>
            İş yerinde sağlık risklerinin değerlendirilmesine katılmak.
            Risklerin azaltılması için alınacak önlemleri belirlemek ve
            önerilerde bulunmak.
          </p>
          <h4>Sağlık Eğitimi</h4>
          <p>
            Çalışanlara iş sağlığı ve güvenliği konularında eğitimler vermek.
            Sağlıklı yaşam ve iş sağlığı konularında bilgilendirme yapmak.
          </p>
          <h4>İlk Yardım ve Acil Müdahale</h4>
          <p>
            İş yerinde meydana gelen kazalara ilk yardım müdahalesinde bulunmak.
            Acil durum planlarının hazırlanmasına katkıda bulunmak ve
            gerektiğinde uygulamak.
          </p>
          <h4>Meslek Hastalıklarının Önlenmesi</h4>
          <p>
            Meslek hastalıklarının erken teşhisi için taramalar yapmak. Meslek
            hastalıklarının önlenmesi için gerekli önlemleri belirlemek ve
            uygulamak.
          </p>
          <h4>Çalışma Ortamı Gözetimi</h4>
          <p>
            Çalışma ortamının sağlık ve güvenlik koşullarını denetlemek. Ortam
            ölçümleri ve değerlendirmeleri yapmak.
          </p>
          <h4>İş Hijyeni</h4>
          <p>
            İş yerinde hijyen kurallarının uygulanmasını sağlamak. Çalışanların
            hijyen eğitimlerini organize etmek.
          </p>
          <h4>İş Sağlığı ve Güvenliği Kurulu</h4>
          <p>
            İş sağlığı ve güvenliği kurul toplantılarına katılmak. Kurulda
            sağlık ve güvenlikle ilgili konularda görüş bildirmek.
          </p>

          <h3>İşyeri Hekiminin Önemi</h3>
          <h4>Çalışan Sağlığını Korumak</h4>
          <p>
            İşyeri hekimi, çalışanların sağlıklarını koruyarak iş gücünün
            verimliliğini artırır.
          </p>
          <h4>İş Sağlığı ve Güvenliği Kültürünü Geliştirmek</h4>
          <p>
            İşyeri hekimi, iş yerinde iş sağlığı ve güvenliği kültürünün
            gelişmesine katkıda bulunur.
          </p>
          <h4>Hukuki ve Mevzuata Uyum</h4>
          <p>
            İşyeri hekimi, iş yerinin iş sağlığı ve güvenliği ile ilgili yasal
            gerekliliklere uyum sağlamasına yardımcı olur.
          </p>
        </div>
      </motion.div>
      <div className="card-images">
        <motion.img
          className="card-img1"
          src={hkm}
          alt="Acil durum resmi"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        />
        <motion.img
          className="card-img2"
          src={hkm2}
          alt="Acil durum resmi"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        />
      </div>
    </div>
  );
};

export default IsyeriHekimi;
