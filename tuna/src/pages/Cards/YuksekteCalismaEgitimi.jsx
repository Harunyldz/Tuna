import LeftMenu from "../../components/LeftMenu/LeftMenu";
import "./Carts.css";
import height from "../../assets/yuksek.jpeg"
import height2 from "../../assets/yuksek2.jpg"
import { motion } from "framer-motion";

const YuksekteCalismaEgitimi = () => {
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
          Yüksekte Çalışma Eğitimi
        </h1>
        <div className="card-content-text">
          <p>
            Yüksekte çalışma eğitimi, yüksekte çalışırken oluşabilecek riskleri
            en aza indirgemek ve güvenli çalışma yöntemlerini öğretmek amacıyla
            verilen bir eğitimdir. Bu eğitim özellikle inşaat, bakım, temizlik
            gibi sektörlerde çalışanlar için büyük önem taşır. Eğitimin içeriği
            genellikle aşağıdaki başlıkları kapsar:
          </p>
          <h3>Temel Kavramlar ve Hukuki Mevzuat</h3>
          <p>
            <b>Yüksekte Çalışmanın Tanımı:</b> Yüksekte çalışmanın ne anlama
            geldiği ve hangi durumların bu kategoriye girdiği.
          </p>
          <p>
            <b>İlgili Mevzuat ve Yönetmelikler:</b> İş Sağlığı ve Güvenliği
            Kanunu ve yönetmeliklere uygun olarak yüksekte çalışma kuralları.
          </p>

          <h3>Risk Değerlendirmesi ve Tehlike Analizi</h3>
          <p>
            <b>Risk Değerlendirme Yöntemleri:</b> Yüksekte çalışmada
            karşılaşılabilecek risklerin tanımlanması ve analiz edilmesi.
          </p>
          <p>
            <b>Tehlike Analizi:</b> Potansiyel tehlikelerin belirlenmesi ve bu
            tehlikelerin nasıl azaltılabileceği.
          </p>

          <h3>Kişisel Koruyucu Donanımlar (KKD)</h3>
          <p>
            <b>KKD Kullanımı:</b> Baret, emniyet kemeri, halat, koruyucu
            ayakkabı gibi kişisel koruyucu donanımların doğru kullanımı.
          </p>
          <p>
            <b>KKD Bakımı:</b> Kişisel koruyucu donanımların düzenli bakım ve
            kontrollerinin nasıl yapılacağı.
          </p>

          <h3>Ekipman ve Araç Kullanımı</h3>
          <p>
            <b>Merdiven ve İskele Kullanımı:</b> Güvenli merdiven ve iskele
            kullanma teknikleri.
          </p>
          <p>
            <b>Yüksekte Çalışma Platformları:</b> Mobil çalışma platformları,
            asansörler ve diğer yüksekte çalışma araçlarının güvenli kullanımı.
          </p>

          <h3>Düşme Koruma Sistemleri</h3>
          <p>
            <b>Düşme Önleyici Sistemler:</b> Korkuluklar, ağlar ve güvenlik
            hatları gibi düşme önleyici sistemlerin kullanımı.
          </p>
          <p>
            <b>Düşme Durdurucu Sistemler:</b> Emniyet kemerleri ve düşme
            durdurucu cihazların kullanımı.
          </p>

          <h3>Acil Durum ve Kurtarma Planları</h3>
          <p>
            <b>Acil Durum Prosedürleri:</b> Yüksekte çalışırken acil durumlarda
            yapılması gerekenler.
          </p>
          <p>
            <b>Kurtarma Yöntemleri:</b> Düşme veya kaza durumunda kurtarma
            operasyonlarının nasıl gerçekleştirileceği.
          </p>

          <h3>Uygulamalı Eğitim</h3>
          <p>
            <b>Pratik Eğitim:</b> Teorik bilgilerin pratiğe dökülmesi, güvenli
            çalışma tekniklerinin uygulamalı olarak gösterilmesi.
          </p>
          <p>
            <b>Tatbikatlar:</b> Gerçekçi senaryolarla yapılan tatbikatlar.
          </p>

          <h3>Yüksekte Çalışma Eğitimine Kimler Katılmalı?</h3>
          <p>
            <b>İnşaat Çalışanları:</b> İnşaat sektöründe çalışan tüm işçiler.
          </p>
          <p>
            <b>Bakım ve Onarım Ekipleri:</b> Fabrika, tesis ve binalarda
            bakım-onarım yapan ekipler.
          </p>
          <p>
            <b>Temizlik Personeli:</b> Yüksek binalarda veya ulaşılması zor
            yerlerde çalışan temizlik personeli.
          </p>
          <p>
            <b>Çatı İşçileri:</b> Çatılarda çalışan kişiler.
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
            <b>Uygulamalı Eğitim:</b> Pratik tatbikatlar ve yüksekte çalışma
            tekniklerinin uygulamalı olarak gösterilmesi.
          </p>
        </div>
      </motion.div>
      <div className="card-images">
        <motion.img
          className="card-img1"
          src={height}
          alt="Acil durum resmi"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        />
        <motion.img
          className="card-img2"
          src={height2}
          alt="Acil durum resmi"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        />
      </div>
    </div>
  );
};

export default YuksekteCalismaEgitimi;
