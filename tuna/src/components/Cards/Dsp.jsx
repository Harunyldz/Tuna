import React from 'react'
import { ImArrowRight } from "react-icons/im";
import dsp from "../../images/dsp2.jpeg"
import './cards.css'

function Dsp() {
    return (
        <div className='card-item'>
            <img className='card-img' src={dsp} alt="igu" />
            <h3>Diğer Sağlık Personeli</h3>
            <ImArrowRight className='card-icon' />
        </div>
    )
}


export default Dsp