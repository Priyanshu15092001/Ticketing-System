import React from 'react'
import styles from './UserChat.module.css'
import sendBtn from '../../assets/ContactCenter/sendbtn.svg'
import homeBtn from '../../assets/Sidebar/dashboard.svg'
import Message from '../Message/Message'
export default function UserChat() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h3>Ticket# 2025-00123</h3>
            <img src={homeBtn} alt="" />
        </div>
        <div className={styles.chatBody}>
        <Message/>
        </div>
        <div className={styles.inputContainer}>
            <div className={styles.input}>
            <textarea name="" id="" placeholder='type here'></textarea>
            <img src={sendBtn} alt="" />
            </div>
            
        </div>
    </div>
  )
}
