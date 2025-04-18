import React from "react";
import styles from "./Settings.module.css";
import info from "../../assets/Settings/info.svg";
export default function Settings() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Settings</h2>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h3>Edit Profile</h3>
        </div>
        <hr />
        <form action="">
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <div className={styles.inputContainer}>
              <input type="email" name="email" />
              <div className={styles.infoWrapper}>
                <img src={info} alt="info" className={styles.icon} />
                <div className={styles.tooltip}>User will logged out immediately</div>
              </div>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <div className={styles.inputContainer}>
              <input type="password" name="password" />
              <div className={styles.infoWrapper}>
                <img src={info} alt="info" className={styles.icon} />
                <div className={styles.tooltip}>User will logged out immediately</div>
              </div>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className={styles.inputContainer}>
              <input type="password" name="confirmPassword" />
              <div className={styles.infoWrapper}>
                <img src={info} alt="info" className={styles.icon} />
                <div className={styles.tooltip}>User will logged out immediately</div>
              </div>
            </div>
          </div>
          <div className={styles.btn}>
            <button>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
