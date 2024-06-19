
//Card images
import acildurum from "../src/assets/acildurum3.jpg"
import dsp from "../src/assets/dsp2.jpeg"
import hijyen from "../src/assets/hijyen3.jpg"
import hkm from "../src/assets/HKM.jpg"
import isgEgt from "../src/assets/isgegt.jpg"
import igu from "../src/assets/igu.jpg"
import risk from "../src/assets/risk.jpeg"
import yangin from "../src/assets/yangin.jpg"
import yuksek2 from "../src/assets/yuksek2.jpg"

//Slide images
import yuksek from "../src/assets/yuksek.jpeg";
import isgegt from "../src/assets/isgegt.jpg";
import risk2 from "../src/assets/risk3.jpg"
import health from "../src/assets/health.jpg"
import emergency from "../src/assets/emergency.jpg"
import yangin4 from "../src/assets/yangin4.jpeg"
import healthsafety from "../src/assets/healthsafety.jpg"

//Referans images
import ataSoyk from "./assets/ref/atakentSoyak.jpg"
import alkur from "./assets/ref/alkur.jpg"
import ataSinav from "./assets/ref/atakentSinav.jpg"
import aybak from "./assets/ref/aybakGida.jpg"
import drn from "./assets/ref/drnGold.jpg"
import ensarlar from "./assets/ref/ensarlar.jpg"
import kalemOfset from "./assets/ref/kalemOfset.jpg"
import macitKoz from "./assets/ref/maciterKozmetik.jpg"
import mehAk from "./assets/ref/mehmetAkkaya.jpg"
import muratMat from "./assets/ref/muratMabaacilik.jpg"
import safira from "./assets/ref/safira.jpg"


//hizmet ve eğitim kartları
export const carts = [
    {
        id: 1,
        title: "Acil Durum Planı",
        image: acildurum,
        type: "hizmet",
        text: "Acil durum planı hazırlamak, işletmeler, okullar, hastaneler ve diğer organizasyonlar için hayati önem taşır.",
        href: "acil-durum-plani"
    },
    {
        id: 2,
        title: "İşyeri Hekimi",
        image: hkm,
        type: "hizmet",
        text: "İş yeri hekimi, sağlık gözetimi, iş yeri risklerinin değerlendirilmesi ve çalışanların eğitiminden sorumludur",
        href: "is-yeri-hekimi"
    },
    {
        id: 3,
        title: "Diğer Sağlık Personeli",
        image: dsp,
        type: "hizmet",
        text: "Diğer sağlık personelleri (DSP), iş sağlığı ve güvenliği hizmetlerinin etkin bir şekilde yürütülmesinde iş yeri hekimleri ve iş güvenliği uzmanları ile birlikte çalışan profesyonellerdir.",
        href: "diger-saglik-personeli"
    },
    {
        id: 4,
        title: "İş Güvenliği Uzmanı",
        image: igu,
        type: "hizmet",
        text: "İş güvenliği uzmanı, iş yerlerinde çalışanların sağlık ve güvenliğini korumak, iş kazalarını ve meslek hastalıklarını önlemek amacıyla görev yapan profesyoneldir.",
        href: 'is-guvenligi-uzmani'
    },
    {
        id: 5,
        title: "İş Güvenliği Eğitimi",
        image: isgEgt,
        type: "egitim",
        text: "İş güvenliği eğitimi, çalışanların iş yerinde karşılaşabilecekleri tehlikelerden korunmalarını sağlamak, iş kazalarını ve meslek hastalıklarını önlemek amacıyla verilen eğitimlerdir.",
        href: "is-guvenligi-egitimi"
    },
    {
        id: 6,
        title: "Risk Analizi",
        image: risk,
        type: "hizmet",
        text: "Risk analizi, iş yerlerinde bulunan tehlikelerin belirlenmesi, bu tehlikelerin oluşturabileceği risklerin analiz edilmesi ve bu risklerin kontrol altına alınması amacıyla yapılan sistematik bir süreçtir. ",
        href: "risk-analizi"
    },
    {
        id: 7,
        title: "Hijyen Eğitimi",
        image: hijyen,
        type: "egitim",
        text: "Hijyen eğitiminin temel amacı, bulaşıcı hastalıkların yayılmasını önlemek, güvenli ve sağlıklı çalışma koşulları sağlamak ve genel sağlığı korumaktır.",
        href: "hijyen-egitimi"
    },
    {
        id: 8,
        title: "Yangın Eğitimi",
        image: yangin,
        type: "egitim",
        text: "Yangın eğitimi, iş yerlerinde ve toplu yaşam alanlarında yangınların önlenmesi, yangın anında doğru ve etkili müdahale edilmesi, tahliye süreçlerinin doğru yönetilmesi ve yangın güvenliği bilincinin artırılması amacıyla verilen eğitimdir. ",
        href: "yangin-egitimi"
    },
    {
        id: 9,
        title: "Yüksekte Çalışma Eğitimi",
        image: yuksek2,
        type: "egitim",
        text: "Yüksekte çalışma eğitimi, çalışanların yüksek yerlerde güvenli ve sağlıklı bir şekilde çalışabilmeleri için gerekli bilgi ve becerileri kazanmalarını amaçlayan bir eğitim programıdır.",
        href: "yuksekte-calisma-egitimi"
    },
]

//Navbar elemanları
export const menuItems = [
    {
        id: 1,
        title: "Ana Sayfa",
        href: "/"
    },
    {
        id: 2,
        title: "Hakkımızda",
        href: "hakkimizda"
    },
    {
        id: 3,
        title: "Hizmetlerimiz",
        href: "hizmetlerimiz",
        subMenu: [
            {
                id: 1,
                title: "İş Güvenliği Uzmanı",
                href: 'is-guvenligi-uzmani'
            },
            {
                id: 2,
                title: "İş Yeri Hekimi",
                href: "is-yeri-hekimi"
            },
            {
                id: 3,
                title: "Diğer Sağlık Personeli",
                href: "diger-saglik-personeli"
            },
            {
                id: 4,
                title: "Risk Analizi",
                href: "risk-analizi"
            },
            {
                id: 5,
                title: "Acil Durum Planı",
                href: "acil-durum-plani"
            }
        ]
    },
    {
        id: 4,
        title: "Eğitimlerimiz",
        href: "egitimlerimiz",
        subMenu: [
            {
                id: 1,
                title: "İş Güvenliği Eğitimi",
                href: "is-guvenligi-egitimi"
            },
            {
                id: 2,
                title: "Hijyen Eğitimi",
                href: "hijyen-egitimi"
            },
            {
                id: 3,
                title: "Yangın Eğitimi",
                href: "yangin-egitimi"
            },
            {
                id: 4,
                title: "Yüksekte Çalışma Eğitimi",
                href: "yuksekte-calisma-egitimi"
            }
        ]
    },
    {
        id: 5,
        title: "İletişim",
        href: "iletisim"
    }
]

//Slide içerikleri
export const slides = [
    {
        id: 1,
        image: yuksek,
        text: "Çalışanlarınızın güvenliği bizim önceliğimiz. ",
        span: "Güvenli ve sağlıklı çalışma ortamları yaratmak için buradayız."
    },
    {
        id: 2,
        image: isgegt,
        text: "Bilinçli çalışanlar, güvenli çalışma ortamları oluşturur.",
        span: "İş sağlığı ve güvenliği eğitimlerimiz ile farkındalığı artırın."
    },
    {
        id: 3,
        image: risk2,
        text: "Riskleri önceden belirleyin, güvenliği sağlayın.",
        span: "Etkili risk değerlendirme hizmetlerimizle iş yeriniz daha güvenli."
    },
    {
        id: 4,
        image: health,
        text: "KKD kullanımı ile iş kazalarını minimuma indirin.",
        span: "Kişisel Koruyucu Donanımların (KKD) etkin kullanımıyla iş yerinizde güvenliği sağlayalım."
    },
    {
        id: 5,
        image: emergency,
        text: "Acil durumlara karşı hazırlıklı olun. ",
        span: "Etkin acil durum planlarımızla çalışanlarınızı koruyun."
    },
    {
        id: 6,
        image: yangin4,
        text: "İş kazalarını önleyin, güvenliği artırın. ",
        span: "Proaktif önlemlerimizle çalışanlarınızın hayatını koruyun."
    },
    {
        id: 7,
        image: healthsafety,
        text: "İSG yasal mevzuatına uygunluğunuzu sağlayın. ",
        span: "Profesyonel danışmanlık hizmetlerimizle iş yerinizi güvence altına alın."
    }

]

//Referanslar
export const referanslar = [
    {
        id: 1,
        title: "Atakent Forum Akademi",
        image: ataSoyk,
        type: "ref",
        text: 'Atakent Forum Akademi'
    },
    {
        id: 2,
        title: "Atakent Sınav Dershanesi",
        image: ataSinav,
        type: "ref",
        text: 'Atakent Sınav Dershanesi'
    },
    {
        id: 3,
        title: "Safira Gözlük",
        image: safira,
        type: "ref",
        text: 'Safira Gözlük'
    },
    {
        id: 4,
        title: "Alkur Etiket",
        image: alkur,
        type: "ref",
        text: 'Alkur Etiket'
    },
    {
        id: 5,
        title: "Aybak Gıda",
        image: aybak,
        type: "ref",
        text: 'Aybak Gıda'
    },
    {
        id: 6,
        title: "DRN Gold Kuyumcukent",
        image: drn,
        type: "ref",
        text: 'DRN Gold Kuyumcukent'
    },
    {
        id: 7,
        title: "Ensarlar Gıda Lojistik",
        image: ensarlar,
        type: "ref",
        text: 'Ensarlar Gıda Lojistik'
    },
    {
        id: 8,
        title: "Kalem Ofset",
        image: kalemOfset,
        type: "ref",
        text: 'Kalem Ofset'
    },
    {
        id: 9,
        title: "Maciter Kozmetik",
        image: macitKoz,
        type: "ref",
        text: 'Maciter Kozmetik'
    },
    {
        id: 10,
        title: "Mehmet Akkaya Fotoğrafçılık",
        image: mehAk,
        type: "ref",
        text: 'Mehmet Akkaya Fotoğrafçılık'
    },
    {
        id: 11,
        title: "Murat Matbaacılık",
        image: muratMat,
        type: "ref",
        text: 'Murat Matbaacılık'
    },
]

//Info data
export const infoData =
{
    azTehlikeli: {
        title:"Az Tehlikeli",
        riskAnalizRaporu: 6,
        acilDurumPlani: 6,
        isgEgitim: 3,
        saglikRaporu: 5,
        ilkYardimEkibi: 20,
        korumaEkibi: 50,
        sondurmeEkibi: 50,
        tahliyeEkibi: 50,
        isGuvenligi:10,
        isyeriHekimi:5,
    },
    tehlikeli: {
        title:"Tehlikeli",
        riskAnalizRaporu: 4,
        acilDurumPlani: 4,
        isgEgitim: 2,
        saglikRaporu: 3,
        ilkYardimEkibi: 15,
        korumaEkibi: 40,
        sondurmeEkibi: 40,
        tahliyeEkibi: 40,
        isGuvenligi:20,
        isyeriHekimi:10,
    },
    cokTehlikeli: {
        title:"Çok Tehlikeli",
        riskAnalizRaporu: 2,
        acilDurumPlani: 2,
        isgEgitim: 1,
        saglikRaporu: 1,
        ilkYardimEkibi: 10,
        korumaEkibi: 30,
        sondurmeEkibi: 30,
        tahliyeEkibi: 30,
        isGuvenligi:40,
        isyeriHekimi:15,
    }
}
