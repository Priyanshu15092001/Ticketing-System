import React, { useContext } from 'react'
import styles from './Chatbox.module.css'
import chatbotLogo from '../../assets/Chatbot/chatbotlogo.svg'
import ChatbotMessage from '../ChatbotMessage/ChatbotMessage'
import sendBtn from '../../assets/Chatbot/sendBtn.svg'
import { ChatbotContext } from '../../contexts/ChatbotContext'
export default function Chatbox() {

  const {selectedHeaderColor,selectedBackgroundColor } = useContext(ChatbotContext);

  return (
    <div className={styles.container}>
        <div className={styles.header} style={{backgroundColor:selectedHeaderColor}}>
          <img src={chatbotLogo} alt="Chatbot DP" />
          <h5>Hubly</h5>
        </div>
        <div className={styles.body} style={{backgroundColor:selectedBackgroundColor}}>
          <ChatbotMessage message="Hey" botMessage={true} />
          {/* <ChatbotMessage/> */}

        </div>
        <div className={styles.chatbox}>
          <textarea name="" id="" placeholder='Write a message'></textarea>
          <button className={styles.btn}>
          <img src={sendBtn} alt="" />
          </button>
          
        </div>
    </div>
  )
}
