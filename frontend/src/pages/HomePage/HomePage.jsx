import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero.jsx/Hero'
import About from '../../components/About/About'
import Plan from '../../components/Plan/Plan'
import Footer from '../../components/Footer/Footer'
import chatbot from '../../assets/Home/chatbot.svg'
import cross from '../../assets/Home/cross.svg'
import styles from './HomePage.module.css'
import Chatbox from '../../components/Chatbox/Chatbox'
import ChatbotPopup from '../../components/ChatbotPopup/ChatbotPopup'
export default function HomePage() {

  const [openChat, setOpenChat]=useState(false)

  return (
    <div className={styles.container}>
        <Navbar/>
        <Hero/>
        <About/>
        <Plan/>
        <Footer/>

        {
          openChat?<>
          <Chatbox/>
          </>:<></>
        }
        <ChatbotPopup/>
        <div className={styles.chatbot} onClick={()=>setOpenChat(!openChat)}>
          {
            openChat?<img src={cross} alt="" />:<img src={chatbot} alt="" />
          }
          
        </div>
    </div>
  )
}
