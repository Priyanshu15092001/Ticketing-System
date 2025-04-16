import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero.jsx/Hero'
import About from '../../components/About/About'
import Plan from '../../components/Plan/Plan'
import Footer from '../../components/Footer/Footer'
export default function HomePage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Plan/>
        <Footer/>
    </div>
  )
}
