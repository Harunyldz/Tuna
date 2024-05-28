import React from 'react'
import { ImArrowRight } from "react-icons/im";
import Risk from "../../assets/riskDe.jpg"
import './cards.css'


function RiskAnaliz() {
    return (
        <div className='card-item'>
            <img className='card-img' src={Risk} alt="igu" />
            <h3>Risk Değerlendirmesi</h3>
            <ImArrowRight className='card-icon' />
        </div>
    )
}

export default RiskAnaliz