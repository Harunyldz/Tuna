import acildurum from "../src/assets/acildurum3.jpg"
import dsp from "../src/assets/dsp2.jpeg"
import hijyen from "../src/assets/hijyen3.jpg"
import hkm from "../src/assets/HKM.jpg"
import isgEgt from "../src/assets/isgegt.jpg"
import igu from "../src/assets/igu.jpg"
import risk from "../src/assets/risk.jpeg"
import yangin from "../src/assets/yangin.jpg"
import yuksek from "../src/assets/yuksek2.jpg"

import IsGvUzm from './components/Cards/IsGvUzm'

export const carts = [
    {
        id: 1,
        title: "Acil Durum Planı",
        image: acildurum,
        type:"hizmet",
        text: "Acil durum planı hazırlamak, işletmeler, okullar, hastaneler ve diğer organizasyonlar için hayati önem taşır."
    },
    {
        id: 2,
        title: "İşyeri Hekimi",
        image: hkm,
        type:"hizmet",
        text: "İş yeri hekimi, sağlık gözetimi, iş yeri risklerinin değerlendirilmesi ve çalışanların eğitiminden sorumludur"
    },
    {
        id: 3,
        title: "Diğer Sağlık Personeli",
        image: dsp,
        type:"hizmet",
        text: "Diğer sağlık personelleri (DSP), iş sağlığı ve güvenliği hizmetlerinin etkin bir şekilde yürütülmesinde iş yeri hekimleri ve iş güvenliği uzmanları ile birlikte çalışan profesyonellerdir."
    },
    {
        id: 4,
        title: "İş Güvenliği Uzmanı",
        image: igu,
        type:"hizmet",
        text: "İş güvenliği uzmanı, iş yerlerinde çalışanların sağlık ve güvenliğini korumak, iş kazalarını ve meslek hastalıklarını önlemek amacıyla görev yapan profesyoneldir."
    },
    {
        id: 5,
        title: "İş Güvenliği Eğitimi",
        image: isgEgt,
        type:"egitim",
        text: "İş güvenliği eğitimi, çalışanların iş yerinde karşılaşabilecekleri tehlikelerden korunmalarını sağlamak, iş kazalarını ve meslek hastalıklarını önlemek amacıyla verilen eğitimlerdir."
    },
    {
        id: 6,
        title: "Risk Değerlendirmesi",
        image: risk,
        type:"hizmet",
        text: "Risk değerlendirmesi, iş yerlerinde bulunan tehlikelerin belirlenmesi, bu tehlikelerin oluşturabileceği risklerin analiz edilmesi ve bu risklerin kontrol altına alınması amacıyla yapılan sistematik bir süreçtir. "
    },
    {
        id: 7,
        title: "Hijyen Eğitimi",
        image: hijyen,
        type:"egitim",
        text: "Hijyen eğitiminin temel amacı, bulaşıcı hastalıkların yayılmasını önlemek, güvenli ve sağlıklı çalışma koşulları sağlamak ve genel sağlığı korumaktır."
    },
    {
        id: 8,
        title: "Yangın Eğitimi",
        image: yangin,
        type:"egitim",
        text: "Yangın eğitimi, iş yerlerinde ve toplu yaşam alanlarında yangınların önlenmesi, yangın anında doğru ve etkili müdahale edilmesi, tahliye süreçlerinin doğru yönetilmesi ve yangın güvenliği bilincinin artırılması amacıyla verilen eğitimdir. "
    },
    {
        id: 9,
        title: "Yüksekte Çalışma Eğitimi",
        image: yuksek,
        type:"egitim",
        text: "Yüksekte çalışma eğitimi, çalışanların yüksek yerlerde güvenli ve sağlıklı bir şekilde çalışabilmeleri için gerekli bilgi ve becerileri kazanmalarını amaçlayan bir eğitim programıdır."
    },
]


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