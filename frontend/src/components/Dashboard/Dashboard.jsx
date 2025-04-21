import React, { useState } from 'react'
import styles from './Dashboard.module.css'
import searchIcon from '../../assets/Dashboard/search.svg'
import sms from '../../assets/Dashboard/sms.svg'
import TicketCard from '../TicketCard/TicketCard';
export default function Dashboard() {

  const [activeTab, setActiveTab] = useState("all");
  return (
    <section className={styles.dashboard}>
        <h2 className={styles.header}>Dashboard</h2>
        <div className={styles.searchBar}>
          <img src={searchIcon} alt="Search" />
          <input type="text" placeholder='Search for ticket' />
        </div>

        <div className={styles.tabs}>
      <div 
        className={`${styles.tab} ${activeTab === "all" ? styles.active : ""}`} 
        onClick={() => setActiveTab("all")}
      >
        <img src={sms} alt="SMS" />
        All Tickets
      </div>
      <div 
        className={`${styles.tab} ${activeTab === "resolved" ? styles.active : ""}`} 
        onClick={() => setActiveTab("resolved")}
      >
        Resolved
      </div>
      <div 
        className={`${styles.tab} ${activeTab === "unresolved" ? styles.active : ""}`} 
        onClick={() => setActiveTab("unresolved")}
      >
        Unresolved
      </div>
    </div>

    <div className={styles.ticketList}>
        <TicketCard/>
    </div>
        
    </section>
  )
}
