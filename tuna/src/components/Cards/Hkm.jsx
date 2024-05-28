import React from 'react'
import { ImArrowRight } from "react-icons/im";
import hkm from "../../assets/HKM.jpg"
import './cards.css'


function Hkm() {
    return (
        <div className='card-item'>
            <img className='card-img' src={hkm} alt="igu" />
            <h3>İşyeri Hekimi</h3>
            <ImArrowRight className='card-icon' />
        </div>
    )
}

export default Hkm