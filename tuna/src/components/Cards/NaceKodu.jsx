import LeftMenu from "../LeftMenu/LeftMenu";
import "./Carts.css";
import { motion } from "framer-motion";

const NaceKodu = () => {
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
          NACE Kodu Nedir?
        </h1>
        <div className="card-content-text">
          <p>
            NACE kodu sizi tehlike sınıfınız hakkında bilgilendirir. Tüm
            Ekonomik Faaliyetlerin Uluslararası Standart Sanayi Sınıflaması
            (ISIC) ile ilişkisinden dolayı NACE, ekonomik faaliyetlere ilişkin
            istatistiki verileri dünya düzeyinde karşılaştırma açısından çok
            önemli bir araçtır.
          </p>

          <p>
            Tüm işverenleri yükümlülük altına alan çıkartılan 6331 Sayılı İş
            Sağlığı ve Güvenliği (İSG) Kanunu 1 Ocak 2013 tarihi itibariyle
            yürürlüğe girmiştir. 29 Mart 2013 Tarih ve 28602 Sayılı Resmi Gazete
            ’de yayınlanan iş sağlığı ve güvenliğine (İSG) ilişkin Tehlike
            Sınıfları Listesi Tebliğine göre Türkiye’de tüm işletmeler NACE
            kodlarına karşılık gelen tehlike sınıflarına göre aşağıdaki gibi 3
            sınıfa ayrılmıştır:
          </p>

          <h4>Az Tehlikeli Sınıf</h4>
          <p>
            Büro faaliyetleri, perakendecilik, Lokantalar, oteller, okullar vb.
          </p>

          <h4>Tehlikeli Sınıf</h4>
          <p>Ayakkabı, mobilya, deterjan, et üretimi, diş hekimliği vb.</p>

          <h4>Çok Tehlikeli Sınıf</h4>
          <p>Yapı sektörü, Ağır Sanayi, hastaneler, petrol istasyonları vb.</p>

          <h3>NACE Kodunuzu Nasıl Öğrenebilirsiniz?</h3>
          <p>
            Avrupa Topluluğu’ndaki Ekonomik Faaliyetlerin İstatistiksel
            Sınıflandırması (NACE); Avrupa’daki ekonomik faaliyetlerle ilgili
            istatistiklerin üretimi ve yayılması için referans bir kaynaktır.
            NACE kodlamasında faaliyet alanlarına göre işletmelere / işletmelere
            altı haneli bir kod verilir. Sosyal güvenlik kurumu Kayıt numaranız
            2. haneden (sonraki) 3,4,5,6,7 ve 8 haneye kadardır. Böylece 4 veya
            6 haneli bir kodunuz olur.
          </p>

          <p>Örneğin; kodları aramak aşağıdaki gibidir.</p>
          <p>
            13.10 – İplik için doğal ve sentetik pamuk elyafı imalatı (tekstil
            elyaflarının hazırlanması ve bükülmesi) <br />
            13.10.12 – Pamuk ipliği imalatı; gibi
          </p>
          <p>
            Tehlike sınıfı, Bakanlık tarafından yayınlanan tehlike sınıfı
            bildirgesine göre belirlenir. Eğer ki NACE kodunuzu bulamazsanız,
            muhasebecinize danışınız.
          </p>
          <p>
            Faaliyette bulunduğunuz iş kolunun işletme kodu (NACE) Ticaret Sicil
            Müdürlüğü tarafından tescil edilmiş olan işletme meselesine uygun
            olmalıdır. Uygun değilse, her şeyden önce, iş kolunuzdaki
            değişikliği ilgili müdürlükten kaydetmeniz gerekir. Ardından,
            istenen vergi kodu vergi dairesinden alınmalıdır. Bu süreç
            şirketlerin Mali Müşavirleri ile ilgilidir. Bu prosedürün ihmal
            edilmesi cezai yaptırımlara neden olacaktır.
          </p>
          <p>
            NACE Kodları Tehlikeli ve çok tehlikeli sınıfta yer alan
            işyerlerinde 1 kişi dahi çalışsa sürekli İSG hizmetleri için OSGB
            ile anlaşması zorunluluğu başlamıştır. Bu çerçevede iş kazası riski
            yüksek olan tüm maden, metal, kimya, makine yapı sektörleri ilgili
            fabrikalar düşünülebilir.
          </p>
          <p>
            NACE Kodları karşılığı 50’den çok çalışana sahip az tehlikeli
            sınıftaki işyerleri, işyeri hekimi ve iş güvenliği uzmanı
            görevlendirilmesi için OSGB ile anlaşma zorunluluğu bulunmaktadır.
            Fakat yine az tehlikeli sınıfta yer alan ve 50’den az çalışanı olan
            firmalarda sürekli işyeri hekimi ve iş güvenliği uzmanı
            görevlendirilmesi dışında kalan tüm mevzuattan yükümlüdür.
          </p>
          <p>
            İSG-Katip ataması ile alınabilecek sürekli iş sağlığı güvenliği
            hizmeti zorunluluğu 2023’e 3 yıl ertelense dahi aşağıda bazı
            başlıkları verilen hizmetler OSGB firmalarından alınmaya devam
            edecektir.
          </p>
            <p>İSG Risk Değerlendirme Raporu Hazırlanması</p>
            <p>
              Acil Durum Planları, Yangın, Tahliye Eğitimi ve Tatbikatları
              (Yılda 1)
            </p>
            <p>Tüm Çalışanların Sertifikalı İSG Eğitimi Alınması</p>
            <p>
              Çalışanlar arasından belirli kişilerin ilkyardımcı sertifikası
              alması
            </p>
            <p>
              Koruyucu donanım ve ekipmanların belirlenmesi, temin edilmesi,
              eğitimi.
            </p>
            <p>
              Personel görev tanımlarının, İSG Talimatlarının ve prosedürlerin
              hazırlanması
            </p>
            <p>
              İşyerinde kullanılması gereken iş güvenliği işaretlerinin
              belirlenmesi
            </p>
            <p>
              Ortam ölçümleri, mühendislik kontrolleri ile işe – işyerine özgü
              olan ekipmanların periyodik kontrolleri gibi İSG gerekliliklerinin
              yerine getirilmesini sağlamak.
            </p>

          <p>
            OSGB hizmet süresi hesaplama dolayısıyla görevlendirilen uzman
            sınıfı ve fiyatlandırma tehlike sınıfına göre değişkenlik
            göstermekte olduğu için, OSGB firmasının potansiyel müşterisine
            fiyatlama yapabilmesi için NACE Kodu doğru olarak bilinmelidir.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default NaceKodu;
