import React from 'react'
import "./Home.css"
import Slider from '../../components/slider/Slider.jsx'
import Header from '../../components/Header/Header.jsx'


const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Slider />
    </div>
  )
}

export default Home