import LeftMenu from "../../components/LeftMenu/LeftMenu";
import "./Carts.css";
import igu from "../../assets/isgUzman.jpg";
import igu2 from "../../assets/isgUzman2.jpg";
import { motion } from "framer-motion";

const IsGuvenligiUzmani = () => {
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
          İş Güvenliği Uzmanı
        </h1>
        <div className="card-content-text">
          <h3>İş Güvenliği Uzmanlığı Nedir?</h3>
          <p>
            İş güvenliği uzmanlığı, iş yerlerinde çalışanların güvenliğini ve
            sağlığını korumak amacıyla yapılan düzenlemeler ve uygulamalar
            üzerine uzmanlaşmış bir meslektir. Bu alanda çalışan uzmanlar, iş
            yerlerinde olası tehlikeleri tespit eder, risk değerlendirmeleri
            yapar ve iş kazalarını önlemek için gerekli tedbirleri alır. İş
            güvenliği uzmanlığı, özellikle sanayi, inşaat ve madencilik gibi
            yüksek riskli sektörlerde hayati öneme sahiptir.
          </p>
          <h3>İş Güvenliği Uzmanının Görevleri</h3>
          <p>
            İş güvenliği uzmanı, iş yerlerinde çalışanların sağlığını ve
            güvenliğini sağlamak amacıyla çeşitli önlemler alarak riskleri
            minimize eden profesyonellerdir. İş güvenliği uzmanlarının
            görevleri, iş yerinde meydana gelebilecek iş kazalarını ve meslek
            hastalıklarını önlemek, çalışanların güvenli ve sağlıklı bir çalışma
            ortamında çalışmasını sağlamak için gerekli tedbirleri almak ve
            uygulamaktır.
          </p>
          <p>
            İş güvenliği uzmanlarımız, iş yerlerinde meydana gelebilecek
            tehlikeleri ve riskleri belirler, önlemek için stratejiler
            geliştirir, çalışanları bu konuda eğitir ve sağlık ve güvenlik
            düzenlemeleri ile uyumu sağlar. Bu hizmetlerin sağlanması, 6331
            sayılı İş Sağlığı ve Güvenliği Kanunu’na uygun olarak gerçekleşir ve
            bu kanuna göre işverenler, iş yerlerinde iş sağlığı ve güvenliği
            hizmetlerini sağlamakla yükümlüdür.
          </p>

          <p>
            <b>Risk Değerlendirmesi:</b> İş yerindeki potansiyel tehlikeleri
            belirlemek ve bu tehlikelerin risk seviyelerini değerlendirmek.
          </p>
          <p>
            <b>Eğitim ve Bilgilendirme:</b> Çalışanlara iş güvenliği konularında
            eğitimler vermek ve farkındalıklarını artırmak.
          </p>
          <p>
            <b>Acil Durum Planları:</b> Yangın, patlama, kimyasal sızıntı gibi
            acil durumlar için önceden planlar hazırlamak ve tatbikatlar
            düzenlemek.
          </p>
          <p>
            <b>Denetim ve Kontrol:</b> İş yerinde güvenlik standartlarına uyulup
            uyulmadığını düzenli olarak denetlemek ve gerektiğinde iyileştirme
            önerilerinde bulunmak.
          </p>
          <p>
            <b>Kaza Araştırması:</b> Meydana gelen iş kazalarını ve meslek
            hastalıklarını araştırarak nedenlerini tespit etmek ve tekrarını
            önlemek için çözümler geliştirmek.
          </p>
          <p>
            <b>Dokümantasyon: </b> İş güvenliği ile ilgili tüm faaliyetleri
            belgelemek ve raporlamak.
          </p>
          <h3>İş Güvenliği Uzmanı Olma Süreci</h3>
          <p>
            <b>Eğitim:</b> İş güvenliği uzmanı olmak için üniversitelerin
            mühendislik, mimarlık veya fen fakültelerinden mezun olmak
            gereklidir. Ayrıca, iş sağlığı ve güvenliği alanında lisans veya
            lisansüstü eğitim almak da mümkündür.
          </p>
          <p>
            <b>Sertifikasyon:</b> Mezuniyet sonrasında, Çalışma ve Sosyal
            Güvenlik Bakanlığı tarafından yetkilendirilmiş kurumlar tarafından
            verilen eğitim programlarına katılmak ve başarılı bir şekilde
            tamamlamak gerekmektedir
          </p>
          <p>
            <b>Sınav:</b> Eğitim programını tamamlayan adaylar, Bakanlık
            tarafından düzenlenen iş güvenliği uzmanlığı sınavına girerler. Bu
            sınavda başarılı olanlar iş güvenliği uzmanı sertifikası almaya hak
            kazanırlar.
          </p>
          <p>
            <b>Sürekli Eğitim:</b> İş güvenliği uzmanları, mesleklerinde güncel
            kalmak için belirli periyotlarda yenileme eğitimlerine katılmak
            zorundadır.
          </p>
          <h3>İş Güvenliği Uzmanlarının Çalışma Alanları</h3>
          <p>
            <b>Sanayi ve Üretim Tesisleri:</b> Kimya, metal, gıda, tekstil gibi
            çeşitli sektörlerde.
          </p>
          <p>
            <b>İnşaat:</b> İnşaat sahalarında iş güvenliği uygulamaları.
          </p>
          <p>
            <b>Madencilik:</b> Maden ocaklarında iş güvenliği önlemleri.
          </p>
          <p>
            <b>Hizmet Sektörü: </b> Hastaneler, okullar, alışveriş merkezleri
            gibi alanlarda.
          </p>

          <p>İş güvenliği uzmanları, iş yerlerinin güvenli ve sağlıklı bir çalışma ortamı sağlamasına katkıda bulunarak hem iş kazalarını önlemeye hem de çalışanların refahını artırmaya yönelik önemli bir rol üstlenirler.</p>
                
        </div>
      </motion.div>
      <div className="card-images">
        <motion.img
          className="card-img1"
          src={igu}
          alt="Acil durum resmi"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        />
        <motion.img
          className="card-img2"
          src={igu2}
          alt="Acil durum resmi"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        />
      </div>
    </div>
  );
};

export default IsGuvenligiUzmani;
