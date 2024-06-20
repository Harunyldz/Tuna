import LeftMenu from "../LeftMenu/LeftMenu";
import "./Carts.css";
import yangin from "../../assets/yangin3.jpeg"
import yangin2 from "../../assets/yangin4.jpeg"
import { motion } from "framer-motion";

const YanginEgitimi = () => {
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
          Yangın Eğitimi
        </h1>
        <div className="card-content-text">
          <p>
            Yangın eğitimi, yangın güvenliği ve yangınla mücadele konusunda
            bireyleri bilgilendiren ve eğiten bir süreçtir. Bu eğitim,
            yangınların nasıl önleneceği, yangın anında ne yapılması gerektiği
            ve yangın söndürme ekipmanlarının nasıl kullanılacağı gibi konuları
            kapsar. Yangın eğitimi genellikle şu unsurları içerir:
          </p>
          <h3>Yangın Önleme ve Güvenlik</h3>
          <p>
            <b>Yangın Tehlikelerinin Tanıtılması:</b> Yanıcı maddeler, yangına
            neden olabilecek durumlar ve tehlikeli alanlar hakkında bilgi.
          </p>
          <p>
            <b>Yangın Güvenliği Politikaları:</b> Yangın güvenliği kuralları ve
            düzenlemeler.
          </p>
          <p>
            <b>Yangın Risk Değerlendirmesi:</b> İş yerlerinde ve evlerde yangın
            risklerinin değerlendirilmesi ve azaltılması.
          </p>

          <h3>Yangın Söndürme Teknikleri</h3>
          <p>
            <b>Yangın Sınıfları ve Tipleri:</b> A, B, C, D ve K sınıfı
            yangınların tanıtılması.
          </p>
          <p>
            <b>Yangın Söndürme Cihazları:</b> Yangın söndürücüler, yangın
            battaniyeleri ve diğer yangın söndürme ekipmanlarının kullanımı.
          </p>
          <p>
            <b>Yangın Söndürme Taktikleri:</b> Yangın söndürmede kullanılacak
            taktikler ve yöntemler.
          </p>

          <h3>Acil Durum Eylem Planı</h3>
          <p>
            <b>Tahliye Planları:</b> Binaların güvenli bir şekilde nasıl tahliye
            edileceği.
          </p>
          <p>
            <b>Toplanma Alanları:</b> Acil durumlarda toplanma noktaları ve
            iletişim planları.
          </p>
          <p>
            <b>Acil Durum İletişimi:</b> İtfaiye, sağlık ekipleri ve diğer acil
            durum hizmetleri ile nasıl iletişim kurulacağı.
          </p>
          <h3>Yangın Tatbikatları</h3>
          <p>
            <b>Pratik Eğitim:</b> Gerçekçi yangın tatbikatları ile teorik
            bilgilerin pratiğe dökülmesi.
          </p>
          <p>
            <b>Rol Dağılımı:</b> Acil durumlarda kimin hangi görevleri
            üstleneceğinin belirlenmesi.
          </p>

          <h3>İlk Yardım</h3>
          <p>
            <b>Yanık Tedavisi:</b> Yangın sırasında meydana gelen yanıkların
            nasıl tedavi edileceği.
          </p>
          <p>
            <b>Duman Zehirlenmesi:</b> Duman inhalasyonunun belirtileri ve ilk
            yardım uygulamaları.
          </p>

          <h3>Yangın Eğitimine Kimler Katılmalı?</h3>
          <p>
            <b>İş Yerinde Çalışanlar:</b> Tüm çalışanlar, iş yerlerinde yangın
            güvenliği konusunda bilgi sahibi olmalıdır.
          </p>
          <p>
            <b>Ev Sahipleri ve Aileler:</b> Evde yangın güvenliği için gerekli
            bilgileri edinmelidir.
          </p>
          <p>
            <b>Okullar ve Öğrenciler:</b> Okullarda yangın tatbikatları ve
            yangın eğitimi yapılmalıdır.
          </p>

          <h3>Eğitim Yöntemleri</h3>
          <p>
            <b>Teorik Dersler:</b> Sınıf ortamında verilen dersler ve sunumlar.
          </p>
          <p>
            <b>Online Eğitim:</b> İnternet üzerinden erişilebilen kurslar ve
            modüller.
          </p>
          <p>
            <b>Uygulamalı Eğitim:</b> Pratik tatbikatlar ve yangın söndürme
            tekniklerinin uygulamalı olarak gösterilmesi.
          </p>
          <p>
            Yangın eğitimi, yangınla ilgili riskleri azaltmak ve yangın anında
            doğru müdahaleyi yapabilmek için hayati önem taşır. Bu eğitimler
            sayesinde, yangın durumlarında paniği önleyebilir ve can kaybı ile
            maddi hasarı en aza indirebilirsiniz.
          </p>
        </div>
      </motion.div>
      <div className="card-images">
        <motion.img
          className="card-img1"
          src={yangin}
          alt="Acil durum resmi"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        />
        <motion.img
          className="card-img2"
          src={yangin2}
          alt="Acil durum resmi"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        />
      </div>
    </div>
  );
};

export default YanginEgitimi;
