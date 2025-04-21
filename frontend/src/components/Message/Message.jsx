import React from 'react'
import styles from './Message.module.css'
import userPic from '../../assets/Dashboard/People.svg' 
export default function Message() {
  return (
    <div className={styles.messageContainer}>
        <img src={userPic} alt="User Pic" />
        <div className={styles.details}>
            <h5>Chat 1</h5>
            <p>I have a question</p>
        </div>
    </div>
  )
}
