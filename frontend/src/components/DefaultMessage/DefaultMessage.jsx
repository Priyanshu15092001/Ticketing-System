import React from 'react'
import styles from './DefaultMessage.module.css'
export default function DefaultMessage() {
  return (
    <div className={styles.container}>
        <h5 className={styles.header}>Introduce Yourself</h5>
        <form action="" className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input type="text" placeholder='Your name' />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="phone">Your Phone</label>
                <input type="text" placeholder='+91-838383444' />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Your Email</label>
                <input type="text" placeholder='example@gmail.com' />
            </div>

            <button>Thank You!</button>
        </form>
    </div>
  )
}
