import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main.jsx'
import Slider from '../../components/slider/Slider.jsx'
import About from '../../components/Cards/About.jsx'
import IsGvUzm from '../../components/Cards/IsGvUzm.jsx'


const Home = () => {
  return (
    <div className='home'>
      {/* <Navbar /> */}
      {/* <Slider />
      <Main /> */}
      {/* <Footer /> */}
      {/* <About /> */}
      <IsGvUzm />

    </div>
  )
}

export default Home