import React from 'react'
import { ImArrowRight } from "react-icons/im";
import acilDr from "../../images/acildurum.jpg"
import './cards.css'



function AcilDrmPln() {
    return (
        <div className='card-item'>
            <img className='card-img' src={acilDr} alt="igu" />
            <h2>Acil Durum Planı</h2>
            <ImArrowRight className='card-icon' />
        </div>
    )
}

export default AcilDrmPln