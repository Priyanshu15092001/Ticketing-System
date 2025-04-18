import React from 'react'
import Chatbar from '../ChatBar/Chatbar'
import styles from './ContactCenter.module.css'
import UserChat from '../UserChat/UserChat'
import TicketDetails from '../TicketDetails/TicketDetails'
export default function ContactCenter() {
  return (
    <div className={styles.container}>
        <Chatbar/>
        <UserChat/>
        <TicketDetails/>
    </div>
  )
}
