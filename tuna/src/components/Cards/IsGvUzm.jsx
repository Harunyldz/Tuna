import React from 'react'
import { ImArrowRight } from "react-icons/im";
import igu from "../../assets/igu.jpg"
import igu2 from "../../assets/igu2.jpg"
import './cards.css'

function IsGvUzm() {
    return (
        <div className='content-item'>
            <div className='content-title'>
                <h1>İş Güvenliği Uzmanı</h1>
            </div>
            <div className='content-center'>
                <div className='content-center-box1'>
                    <p>
                        İş güvenliği uzmanı, iş yerlerinde çalışanların sağlığını ve güvenliğini sağlamak amacıyla çeşitli önlemler alarak riskleri minimize eden profesyonellerdir. İş güvenliği uzmanlarının görevleri, iş yerinde meydana gelebilecek iş kazalarını ve meslek hastalıklarını önlemek, çalışanların güvenli ve sağlıklı bir çalışma ortamında çalışmasını sağlamak için gerekli tedbirleri almak ve uygulamaktır.
                    </p>
                    <p>
                        İş güvenliği uzmanlarımız, iş yerlerinde meydana gelebilecek tehlikeleri ve riskleri belirler, önlemek için stratejiler geliştirir, çalışanları bu konuda eğitir ve sağlık ve güvenlik düzenlemeleri ile uyumu sağlar. Bu hizmetlerin sağlanması, 6331 sayılı İş Sağlığı ve Güvenliği Kanunu’na uygun olarak gerçekleşir ve bu kanuna göre işverenler, iş yerlerinde iş sağlığı ve güvenliği hizmetlerini sağlamakla yükümlüdür.
                    </p>

                </div>
                <div className='content-center-box2'>
                    <img className='img1' src={igu} alt="" width={300} height={200} />
                    <img className='img2' src={igu2} alt="" width={300} height={200} />
                </div>
            </div>
            <div className='content-desc'>
                <div className='content-desc-box1'>
                    <p>eklenecek</p>
                </div>
                <div className='content-desc-box2'>
                    <p>eklenecek</p></div>
            </div>
        </div>



    )
}

export default IsGvUzm