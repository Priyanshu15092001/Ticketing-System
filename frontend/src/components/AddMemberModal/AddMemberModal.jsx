import React from "react";
import styles from "./AddMemberModal.module.css";
export default function AddMemberModal({openModal,setOpenModal}) {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h3>Add Team members</h3>
        <p>
          Talk with colleagues in a group chat. Messages in this group are only
          visible to it's participants. New teammates may only be invited by the
          administrators.
        </p>
        <form action="" className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" placeholder="First Name"/>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" placeholder="Last Name" />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email ID</label>
                <input type="text" placeholder="Email ID" />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="role">Designation</label>
                <select>
                    <option value="member">Member</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            <div className={styles.btns}>
                <button onClick={()=>setOpenModal(false)}>Cancel</button>
                <button>Save</button>
            </div>
        </form>
      </div>
    </div>
  );
}
