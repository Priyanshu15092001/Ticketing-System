import React from 'react'
import styles from './AssignedPopup.module.css'
export default function AssignedPopup({message,showPopup,setShowPopup}) {
  return (
    <div className={styles.container}>
        <h4>{message}</h4>
        <div className={styles.buttons}>
            <button onClick={()=>setShowPopup(false)}>Cancel</button>
            <button>Confirm</button>
        </div>
    </div>
  )
}
