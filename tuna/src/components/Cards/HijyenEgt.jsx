import React from 'react'
import hijyen from "../../assets/hijyen.jpeg"
import hijyen2 from "../../assets/hijyen3.jpg"
import './cards.css'
import YanMenu from './YanMenu'
import { Link } from "react-router-dom";


function HijyenEgt() {
    return (
        <div className='content-item'>
            <div className='content-title'>
                <h1>Hijyen Eğitimi</h1>
            </div>
            <div className='content-center' style={{ marginBottom: '50px' }}>
                <div className='content-center-box1'>
                    <section>
                        <p>
                            Hijyen eğitimi, bireylerin ve toplumların sağlığını korumak ve hastalıkların yayılmasını önlemek amacıyla hijyen kurallarını öğretmeyi amaçlayan bir eğitim türüdür. Hijyen eğitiminin temel konuları şunlardır:
                        </p>
                        <p>
                            Hijyen eğitimi genellikle okullarda, iş yerlerinde, sağlık kuruluşlarında ve toplum merkezlerinde verilmekte olup, sağlık profesyonelleri, öğretmenler veya uzman eğitmenler tarafından sunulmaktadır. Hijyen eğitiminin amacı, bireylere ve topluluklara sağlıklı bir yaşam için gerekli bilgi ve becerileri kazandırmaktır.
                        </p>
                    </section>
                    <section>
                        <h3>Kişisel Hijyen</h3>
                        <p>El yıkama, diş fırçalama, banyo yapma, tırnak bakımı gibi günlük yaşamda yapılması gereken temel hijyen uygulamaları.</p>
                    </section>
                    <section>
                        <h3>Gıda Hijyeni</h3>
                        <p>Gıdaların doğru saklanması, hazırlanması ve pişirilmesi, gıda zehirlenmelerinin önlenmesi.</p>
                    </section>
                    <section>
                        <h3>Çevre Hijyeni</h3>
                        <p>Yaşanılan ortamın temizliği, çöplerin doğru şekilde atılması, su ve hava kirliliğinin önlenmesi.</p>
                    </section>
                    <section>
                        <h3>Sağlık Kuruluşlarında Hijyen</h3>
                        <p>Hastane ve kliniklerde enfeksiyonların önlenmesi için alınması gereken önlemler.</p>
                    </section>
                    <section>
                        <h3>Ev Hijyeni</h3>
                        <p>Ev temizliği, çamaşır ve bulaşık yıkama, evcil hayvan bakımı gibi konular.</p>
                    </section>
                    <section>
                        <h3>Toplumsal Hijyen</h3>
                        <p>Kamu alanlarında temizlik, toplu taşıma araçlarında hijyen kuralları.</p>
                    </section>
                </div>
                <div className='content-center-box2'>
                    <div className='box-img'>
                        <img className='img1' src={hijyen2} alt="" width={300} height={200} />
                        <img className='img2' src={hijyen} alt="" width={300} height={200} />
                    </div>
                    <div>
                        <YanMenu />
                        <Link to="/teklifAl"><button className="TeklifBtn">Teklif Al</button></Link>
                    </div>
                </div>
            </div>

        </div>



    )

}

export default HijyenEgt