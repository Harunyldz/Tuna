import React from 'react'
import { ImArrowRight } from "react-icons/im";
import igu from "../../images/igu.jpg"
import './cards.css'

function IsGvUzm() {
    return (
        <div className='card-item'>
            <img className='card-img' src={igu} alt="igu" />
            <h3>İş Güvenliği Uzmanı</h3>
            <ImArrowRight className='card-icon' />
        </div>

    )
}

export default IsGvUzm