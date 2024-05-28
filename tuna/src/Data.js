import acildurum from "../src/assets/acildurum3.jpg"
import dsp from "../src/assets/dsp2.jpeg"
import hijyen from "../src/assets/hijyen3.jpg"
import hkm from "../src/assets/HKM.jpg"
import isgEgt from "../src/assets/isgegt.jpg"
import igu from "../src/assets/igu.jpg"
import risk from "../src/assets/risk.jpeg"
import yangin from "../src/assets/yangin.jpg"
import yuksek from "../src/assets/yuksek2.jpg"

export const carts = [
    {
        id: 1,
        title: "Acil Durum Planı",
        image: acildurum,
        text: "Acil durum planı hazırlamak, işletmeler, okullar, hastaneler ve diğer organizasyonlar için hayati önem taşır."
    },
    {
        id: 2,
        title: "İşyeri Hekimi",
        image: hkm,
        text: "İş yeri hekimi, sağlık gözetimi, iş yeri risklerinin değerlendirilmesi ve çalışanların eğitiminden sorumludur"
    },
    {
        id: 3,
        title: "Diğer Sağlık Personeli",
        image: dsp,
        text: "Diğer sağlık personelleri (DSP), iş sağlığı ve güvenliği hizmetlerinin etkin bir şekilde yürütülmesinde iş yeri hekimleri ve iş güvenliği uzmanları ile birlikte çalışan profesyonellerdir."
    },
    {
        id: 4,
        title: "İş Güvenliği Uzmanı",
        image: igu,
        text: "İş güvenliği uzmanı, iş yerlerinde çalışanların sağlık ve güvenliğini korumak, iş kazalarını ve meslek hastalıklarını önlemek amacıyla görev yapan profesyoneldir."
    },
    {
        id: 5,
        title: "İş Güvenliği Eğitimi",
        image: isgEgt,
        text: "İş güvenliği eğitimi, çalışanların iş yerinde karşılaşabilecekleri tehlikelerden korunmalarını sağlamak, iş kazalarını ve meslek hastalıklarını önlemek amacıyla verilen eğitimlerdir."
    },
    {
        id: 6,
        title: "Risk Değerlendirmesi",
        image: risk,
        text: "Risk değerlendirmesi, iş yerlerinde bulunan tehlikelerin belirlenmesi, bu tehlikelerin oluşturabileceği risklerin analiz edilmesi ve bu risklerin kontrol altına alınması amacıyla yapılan sistematik bir süreçtir. "
    },
    {
        id: 7,
        title: "Hijyen Eğitimi",
        image: hijyen,
        text: "Hijyen eğitiminin temel amacı, bulaşıcı hastalıkların yayılmasını önlemek, güvenli ve sağlıklı çalışma koşulları sağlamak ve genel sağlığı korumaktır."
    },
    {
        id: 8,
        title: "Yangın Eğitimi",
        image: yangin,
        text: "Yangın eğitimi, iş yerlerinde ve toplu yaşam alanlarında yangınların önlenmesi, yangın anında doğru ve etkili müdahale edilmesi, tahliye süreçlerinin doğru yönetilmesi ve yangın güvenliği bilincinin artırılması amacıyla verilen eğitimdir. "
    },
    {
        id: 9,
        title: "Yüksekte Çalışma Eğitimi",
        image: yuksek,
        text: "Yüksekte çalışma eğitimi, çalışanların yüksek yerlerde güvenli ve sağlıklı bir şekilde çalışabilmeleri için gerekli bilgi ve becerileri kazanmalarını amaçlayan bir eğitim programıdır."
    },
]


export const menuItems=[
    {
        id:1,
        title:"Ana Sayfa"
    },
    {
        id:2,
        title:"Hakkımızda"
    },
    {
        id:3,
        title:"Hizmetlerimiz",
        subMenu:[
            {
                id:1,
                title:"İş Güvenliği Uzmanı"
            },
            {
                id:2,
                title:"İş Yeri Hekimi"
            },
            {
                id:3,
                title:"Diğer Sağlık Personeli"
            },
            {
                id:4,
                title:"Risk Analizi"
            },
            {
                id:5,
                title:"Acil Durum Planı"
            }
        ]
    },
    {
        id:4,
        title:"Eğitimlerimiz",
        subMenu:[
            {
                id:1,
                title:"İş Güvenliği Eğitimi"
            },
            {
                id:2,
                title:"Hijyen Eğitimi"
            },
            {
                id:3,
                title:"Yangın Eğitimi"
            },
            {
                id:4,
                title:"Yüksekte Çalışma Eğitimi"
            }
        ]
    }
]