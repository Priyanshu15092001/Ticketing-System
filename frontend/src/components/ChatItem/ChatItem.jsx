import React, { useState } from "react";
import pic from "../../assets/Dashboard/People.svg";
import styles from "./ChatItem.module.css";
export default function ChatItem({ id, name, message, isActive, onSelect }) {
  const preview =
    message.split(" ").length > 4
      ? message.split(" ").slice(0, 4).join(" ") + "..."
      : message;

  return (
    <div className={`${isActive?styles.border:""}`}>
      <div
        className={`${styles.container} ${isActive ? styles.active : ""}`}
        onClick={onSelect}
      >
        <img src={pic} alt="Profile pic" />
        <div className={styles.content}>
          <h5>{name}</h5>
          <p>{preview}</p>
        </div>
      </div>
    </div>
  );
}
