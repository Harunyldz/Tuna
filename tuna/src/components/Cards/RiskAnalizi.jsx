import LeftMenu from "../LeftMenu/LeftMenu";
import "./Carts.css";
import Risk from "../../assets/risk4.jpg"
import Risk2 from "../../assets/risk.jpeg"
import { motion } from "framer-motion";

const RiskAnalizi = () => {
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
          Risk Analizi
        </h1>
        <div className="card-content-text">
          <p>
            İş güvenliği risk analizi, işyerindeki potansiyel tehlikeleri
            belirlemek, bu tehlikelerin çalışanlar üzerindeki olası etkilerini
            değerlendirmek ve bu riskleri kontrol altına almak için alınacak
            önlemleri planlamak amacıyla yapılan sistematik bir süreçtir. İş
            güvenliği risk analizinin aşamaları genellikle şu şekildedir:
          </p>
          <h3>Hazırlık ve Planlama</h3>
          <p>
            <b>Ekip Oluşturma:</b> Risk analizi yapmak için uzman kişilerden
            oluşan bir ekip kurulmalıdır.
          </p>
          <p>
            <b>Bilgi Toplama:</b> İşyerinin faaliyetleri, kullanılan ekipmanlar,
            çalışanların görevleri ve mevcut güvenlik önlemleri hakkında bilgi
            toplanır.
          </p>
          <p>
            <b>Mevzuat ve Standartların İncelenmesi:</b> İlgili iş sağlığı ve
            güvenliği mevzuatları, standartlar ve rehberler gözden geçirilir.
          </p>
          <h3>Tehlikelerin Belirlenmesi</h3>

          <p>
            <b>İş Yeri Gezisi:</b> İşyerinin fiziksel olarak incelenmesi,
            çalışanlarla görüşülmesi ve gözlemler yapılması.
          </p>
          <p>
            <b>Dokümantasyon İncelemesi:</b> İş kazası kayıtları, meslek
            hastalığı raporları ve önceki risk analizleri incelenir.
          </p>
          <p>
            <b>Tehlike Tanımlama Teknikleri:</b> HAZOP, FMEA, What-If analizleri
            gibi yöntemlerle potansiyel tehlikeler belirlenir.
          </p>
          <h3>Risklerin Değerlendirilmesi</h3>
          <p>
            <b>Olasılık ve Şiddet Analizi:</b> Belirlenen her tehlikenin
            gerçekleşme olasılığı ve bu tehlikenin gerçekleşmesi durumunda
            ortaya çıkacak sonuçların şiddeti değerlendirilir.
          </p>
          <p>
            <b>Risk Matrisleri:</b> Olasılık ve şiddet derecelerine göre riskler
            sınıflandırılır (düşük, orta, yüksek risk gibi).
          </p>
          <h3>Kontrol Önlemlerinin Belirlenmesi</h3>
          <p>
            <b>Önleyici Tedbirler:</b> Belirlenen risklerin kabul edilebilir
            seviyelere indirilmesi için alınacak önlemler belirlenir.
          </p>
          <p>
            <b>Kontrol Hiyerarşisi:</b> Tehlikeleri ortadan kaldırma,
            mühendislik kontrolleri, idari kontroller ve kişisel koruyucu
            donanımlar gibi önlemler sıralanır.
          </p>
          <h3>Uygulama ve İzleme</h3>
          <p>
            <b>Eylem Planı:</b> Belirlenen önlemlerin kim tarafından, ne zaman
            ve nasıl uygulanacağına dair bir plan hazırlanır.
          </p>
          <p>
            <b>Eğitim ve Bilgilendirme:</b> Çalışanlara riskler ve alınan
            önlemler hakkında eğitimler verilir.
          </p>
          <p>
            <b>İzleme ve Değerlendirme:</b> Uygulanan önlemlerin etkinliği
            düzenli olarak izlenir ve gerektiğinde revize edilir.
          </p>

          <h3>Dokümantasyon ve Raporlama</h3>
          <p>
            <b>Rapor Hazırlama:</b> Yapılan analiz ve alınan önlemler detaylı
            bir rapor halinde dökümante edilir.
          </p>
          <p>
            <b>Arşivleme:</b> Analiz raporları ve ilgili dokümanlar düzenli
            olarak arşivlenir.
          </p>
        </div>
      </motion.div>
      <div className="card-images">
        <motion.img
          className="card-img1"
          src={Risk}
          alt="Acil durum resmi"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        />
        <motion.img
          className="card-img2"
          src={Risk2}
          alt="Acil durum resmi"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        />
      </div>
    </div>
  );
};

export default RiskAnalizi;
