import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main.jsx'
import Slider from '../../components/slider/Slider.jsx'


const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Slider />
      <Main />
      <Footer />

    </div>
  )
}

export default Home