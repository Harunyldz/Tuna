import React from 'react'
import { ImArrowRight } from "react-icons/im";
import yangin from "../../images/yangin.jpeg"
import './cards.css'


function YanginEgt() {
    return (
        <div className='card-item'>
            <img className='card-img' src={yangin} alt="igu" />
            <h3>Yangın Eğitimi</h3>
            <ImArrowRight className='card-icon' />
        </div>
    )
}

export default YanginEgt