import React from 'react'
import { ImArrowRight } from "react-icons/im";
import hijyen from "../../assets/hijyen.jpeg"
import './cards.css'


function HijyenEgt() {
    return (
        <div className='card-item'>
            <img className='card-img' src={hijyen} alt="igu" />
            <h2>Hijyen Eğitimi</h2>
            <ImArrowRight className='card-icon' />
        </div>
    )
}

export default HijyenEgt