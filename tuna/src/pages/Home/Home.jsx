import React from 'react'
import "./Home.css"
import Slider from '../../components/Slider/Slider.jsx'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'


const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Header />
      {/* <Footer /> */}
    </div>
  )
}

export default Home