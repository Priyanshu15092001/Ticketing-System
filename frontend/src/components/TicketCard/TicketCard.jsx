import React from "react";
import styles from "./TicketCard.module.css";
import pic from "../../assets/Dashboard/People.svg";
import { Link } from "react-router-dom";
export default function TicketCard({ ticket }) {
  const formatTime = (isoString) => {
    const date = new Date(isoString);

    // Use local time
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    const formattedHours = hours % 12 || 12; // if 0, change to 12
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const diffHours = (isoString) => {
    const givenTime = new Date(isoString);
    const currentTime = new Date();

    const diffInMs = currentTime - givenTime;
    const totalMinutes = Math.floor(diffInMs / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const formattedDiff = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}`;

    return formattedDiff;
  };

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.ticketId}>
            <div className={styles.circle}></div>
            <span>{ticket?.ticketId}</span>
          </div>
          <p className={styles.message}>{ticket?.title}</p>
        </div>
        <div className={styles.right}>
          <span className={styles.postedTime}>
            Posted at {formatTime(ticket?.createdAt)}
          </span>
          <span className={styles.lapseTime}>{diffHours(ticket?.createdAt)}</span>
        </div>
      </div>
      <hr />
      <div className={styles.bottom}>
        <div className={styles.details}>
          <img src={pic} alt="Profile pic" />
          <div className={styles.info}>
            <span>{ticket?.customer.name}</span>
            <span>{ticket?.customer.phone}</span>
            <span>{ticket?.customer.email}</span>
          </div>
        </div>
        <Link>
          <span>Open Ticket</span>
        </Link>
      </div>
    </div>
  );
}
