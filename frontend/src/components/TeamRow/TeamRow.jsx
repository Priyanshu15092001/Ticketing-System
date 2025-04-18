import React, { useState } from "react";
import admin from "../../assets/ContactCenter/admin.svg";
import editBtn from "../../assets/Teams/edit.svg";
import deleteBtn from "../../assets/Teams/delete.svg";
import styles from "./TeamRow.module.css";
import AssignedPopup from "../AssignedPopup/AssignedPopup";

export default function TeamRow() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className={styles.contentBodyRow}>
      <ul className={styles.data}>
        <li>
          <img src={admin} alt="Admin Pic" />
        </li>
        <li>John Doe</li>
        <li>1234567890</li>
        <li>john.doe@example.com</li>
        <li>Admin</li>
      </ul>
      <div className={styles.btns}>
        <img src={editBtn} alt="Edit button" />
        <img
          src={deleteBtn}
          onClick={() => setOpenPopup(true)}
          alt="Delete button"
        />
      </div>
      {openPopup ? (
        
          <AssignedPopup
            message={"This teammate will be deleted"}
            showPopup={openPopup}
            setShowPopup={setOpenPopup}
          />
        
      ) : (
        <></>
      )}
    </div>
  );
}
