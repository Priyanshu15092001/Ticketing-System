import React from "react";
import styles from './TicketCard.module.css'
import pic from '../../assets/Dashboard/People.svg'
import { Link } from "react-router-dom";
export default function TicketCard() {
  return (
    <div className={styles.card}>
    <div className={styles.top}>
    <div className={styles.left}>
        <div className={styles.ticketId}>
          <div className={styles.circle}></div>
          <span>Ticket# 2023-00123</span>
        </div>
        <p className={styles.message}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          tenetur rem maiores ipsam earum reprehenderit aperiam quaerat velit
          laudantium pariatur.
        </p>
      </div>
      <div className={styles.right}>
        <span className={styles.postedTime}>Posted at 12:45 AM</span>
        <span className={styles.lapseTime}>10:00</span>
      </div>
    </div>
    <hr />
    <div className={styles.bottom}>
        <div className={styles.details}>
            <img src={pic} alt="Profile pic" />
            <div className={styles.info}>
                <span>John Doe</span>
                <span>+9145666777776</span>
                <span>example@mail.com</span>
            </div>
        </div>
        <Link><span>Open Ticket</span></Link>
    </div>
      
    </div>
  );
}
