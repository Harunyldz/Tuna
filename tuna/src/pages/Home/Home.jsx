import React from 'react'
import "./Home.css"
import Slider from '../../components/Slider/Slider.jsx'
import Header from '../../components/Header/Header.jsx'
import Referans from '../../components/Referans/Referans.jsx'
import EmailForm from "../../components/EmailForm/EmailForm.jsx"


const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Header />
      <Referans/>
      <EmailForm/>
    </div>
  )
}

export default Home