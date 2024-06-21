import LeftMenu from "../../components/LeftMenu/LeftMenu";
import "./Carts.css";
import hijyen from "../../assets/hijyen.jpeg";
import hijyen2 from "../../assets/hijyen3.jpg";
import { motion } from "framer-motion";

const HijyenEgitimi = () => {
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
          Hijyen Eğitimi
        </h1>
        <div className="card-content-text">
          <p>
            Hijyen eğitimi, bireylerin ve toplumların sağlığını korumak ve
            hastalıkların yayılmasını önlemek amacıyla hijyen kurallarını
            öğretmeyi amaçlayan bir eğitim türüdür.
          </p>
          <p>
            Hijyen eğitimi genellikle okullarda, iş yerlerinde, sağlık
            kuruluşlarında ve toplum merkezlerinde verilmekte olup, sağlık
            profesyonelleri, öğretmenler veya uzman eğitmenler tarafından
            sunulmaktadır. Hijyen eğitiminin amacı, bireylere ve topluluklara
            sağlıklı bir yaşam için gerekli bilgi ve becerileri kazandırmaktır.
            Hijyen eğitiminin temel konuları şunlardır:
          </p>
          <h4>Kişisel Hijyen</h4>
          <p>
            El yıkama, diş fırçalama, banyo yapma, tırnak bakımı gibi günlük
            yaşamda yapılması gereken temel hijyen uygulamaları.
          </p>
          <h4>Gıda Hijyeni</h4>
          <p>
            Gıdaların doğru saklanması, hazırlanması ve pişirilmesi, gıda
            zehirlenmelerinin önlenmesi.
          </p>
          <h4>Çevre Hijyeni</h4>
          <p>
            Yaşanılan ortamın temizliği, çöplerin doğru şekilde atılması, su ve
            hava kirliliğinin önlenmesi.
          </p>
          <h4>Sağlık Kuruluşlarında Hijyen</h4>
          <p>
            Hastane ve kliniklerde enfeksiyonların önlenmesi için alınması
            gereken önlemler.
          </p>
          <h4>Ev Hijyeni</h4>
          <p>
            Ev temizliği, çamaşır ve bulaşık yıkama, evcil hayvan bakımı gibi
            konular.
          </p>
          <h4>Toplumsal Hijyen</h4>
          <p>
            Kamu alanlarında temizlik, toplu taşıma araçlarında hijyen
            kuralları.
          </p>
        </div>
      </motion.div>
      <div className="card-images">
        <motion.img
          className="card-img1"
          src={hijyen}
          alt="Acil durum resmi"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        />
        <motion.img
          className="card-img2"
          src={hijyen2}
          alt="Acil durum resmi"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        />
      </div>
    </div>
  );
};

export default HijyenEgitimi;
