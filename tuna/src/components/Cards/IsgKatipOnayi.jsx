import LeftMenu from "../LeftMenu/LeftMenu";
import "./Carts.css";
import { motion } from "framer-motion";

const IsgKatipOnayi = () => {
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
          İSG Katip Onayı Nasıl Yapılır?
        </h1>
        <div className="card-content-text">
          <h3>İSG Katip nedir?</h3>
          <p>
            T.C. Aile, Çalışma ve Sosyal Hizmetler Bakanlığı’na bağlı olan İSG
            Genel Müdürlüğü, 6331 sayılı İş Sağlığı ve Güvenliği Kanunu’nda
            belirtilmiş olan zorunlu İSG hizmetlerinin elektronik ortamda takibi
            için, İSG Katip olarak adlandırılan bir sistem geliştirmiştir. Bu
            sistem sayesinde Türkiye’de kayıtlı olan tüm işyerlerinin iş sağlığı
            ve güvenliği hizmeti alıp almadıklarını kolaylıkla takip ederken;
            işyeri hekimi, iş güvenliği uzmanı ve diğer sağlık teknisyenlerinin
            işyerlerinde görevlendirilmesi bu sistem ile gerçekleştirilir.
            Kanunda yasal hizmetin ancak İSG Katip’ten karşılıklı onaylamadan
            itibaren başladığı belirtilmiştir. İSG Katip Sistemi ile OSGB
            hizmeti almayan işverenlere yönelik otomatik olarak cezai işlem
            yapılabilmekte, itiraz söz konusu olduğunda işyerleri denetime
            alınmakta ve itirazlar incelenerek karar verilmektedir. Ayrıca
            onaylanmamış sözleşme ile hizmet veren OSGB’ lere ise ciddi idari
            cezalar ve hatta kapatılmalarına bile neden olacak yaptırımlar
            uygulanmaktadır.
          </p>
          <h3>İSG Katip Onayı Nasıl Yapılır?</h3>
          <p>
            Kanunen zorunlu olan İSG Katip karşılıklı onaylama işlemi için;
            hizmet alacak işyerinin SGK işyeri sicil numarası ile birlikte
            OSGB’nin İSG Katip üzerinden gerekli görevlendirmeleri yaptıktan
            sonra hizmet alan işverenin, e-Devlet şifresi ile İSG Katip
            sistemine giriş yaparak, kayıtlı kullanıcı girişinden, hizmet alan
            işyeri modülünü açarak ONAY bekleyen sözleşmeleri türüne göre; ayrı
            ayrı onaylaması gerekmektedir ve bu bir yasal zorunluluktur.
          </p>
          <p>
            İSG Katip Sisteminden ONAY VERMEK İÇİN
            <a href="https://isgkatip.csgb.gov.tr" target="_blank">
              TIKLAYINIZ.
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default IsgKatipOnayi;
