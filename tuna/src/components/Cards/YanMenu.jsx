import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function YanMenu() {
    return (
        <div>
            <ul className='yan-ul'>
                <h3>Tuna İş Güvenliği </h3>
                <Link to='/hizmetlerimiz/is-guvenligi-uzmani'><li><FaAngleRight />İş Güvenliği Uzmanlığı</li></Link>
                <Link to='/hizmetlerimiz/is-yeri-hekimi'><li><FaAngleRight />İşyeri Hekimliği</li></Link>
                <Link to='/hizmetlerimiz/diger-saglik-personeli'><li><FaAngleRight />Diğer Sağlık Personeli</li></Link>
                <Link to='/hizmetlerimiz/risk-analizi'><li><FaAngleRight />Risk Analizi Raporu</li></Link>
                <Link to='/hizmetlerimiz/acil-durum-plani'><li><FaAngleRight />Acil Durum Planı</li></Link>
                <Link to='/egitimlerimiz/is-guvenligi-egitimi'> <li><FaAngleRight />İş Güvenliği Eğitimi</li></Link>
                <Link to='/egitimlerimiz/hijyen-egitimi'> <li><FaAngleRight />Hijyen Eğitimi</li></Link>
                <Link to='/egitimlerimiz/yangin-egitimi'> <li><FaAngleRight />Yangın Eğitimi</li></Link>
                <Link to='/egitimlerimiz/yuksekte-calisma-egitimi'> <li><FaAngleRight />Yüksekte Çalışma Eğitimi</li></Link>
            </ul>
        </div>
    )
}

export default YanMenu