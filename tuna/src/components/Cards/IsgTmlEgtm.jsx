import React from 'react'
import { ImArrowRight } from "react-icons/im";
import isgEgt from "../../images/isgEgt.png"
import './cards.css'


function IsgTmlEgtm() {
    return (
        <div className='card-item'>
            <img className='card-img' src={isgEgt} alt="igu" />
            <h3>İş Güvenliği Eğitimi</h3>
            <ImArrowRight className='card-icon' />
        </div>
    )
}

export default IsgTmlEgtm