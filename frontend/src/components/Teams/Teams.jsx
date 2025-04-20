import React, { useState } from 'react'
import styles from './Teams.module.css'
import TeamRow from '../TeamRow/TeamRow'
import addBtn from '../../assets/Teams/addbtn.svg'
import AddMemberModal from '../AddMemberModal/AddMemberModal'

export default function Teams() {

  const [openModal,setOpenModal]=useState(false)
  
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Team</h2>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
        
            <ul className={styles.contentHeaderRow}>
              <li></li>
              <li>Full Name</li>
              <li>Phone</li>
              <li>Email</li>
              <li>Role</li>
            </ul>
          
        </div>
        <div className={styles.contentBody}>
          <TeamRow/>
          <TeamRow/>
          <TeamRow/>
          <TeamRow/>
          <TeamRow/>
          <TeamRow/>
          <TeamRow/>
          <TeamRow/>
          <TeamRow/>

        </div>
        <div className={styles.btn}>
          <button onClick={()=>setOpenModal(true)}>
            <img src={addBtn} alt="" />
            <span>Add team members</span>
          </button>
        </div>
      </div>
      {
        openModal?<AddMemberModal openModal={openModal} setOpenModal={setOpenModal} />:<></>
      }
    </div>
  )
}
