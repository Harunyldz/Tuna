import React from 'react'
import { ImArrowRight } from "react-icons/im";
import hight from "../../images/hightWorking.jpg"
import './cards.css'


function YuksekteCalisma() {
    return (
        <div className='card-item'>
            <img className='card-img' src={hight} alt="igu" />
            <h3>Yüksekte Çalışma Eğitimi</h3>
            <ImArrowRight className='card-icon' />
        </div>
    )
}

export default YuksekteCalisma