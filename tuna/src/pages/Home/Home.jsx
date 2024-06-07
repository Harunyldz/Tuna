import React from 'react'
import "./Home.css"
import Slider from '../../components/Slider/Slider.jsx'
import Header from '../../components/Header/Header.jsx'


const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Header />
    </div>
  )
}

export default Home