import React, { useState } from "react";
import styles from "./TicketDetails.module.css";
import pic from "../../assets/Dashboard/People.svg";

import profile from "../../assets/ContactCenter/profile.svg";
import tel from "../../assets/ContactCenter/tel.svg";
import mail from "../../assets/ContactCenter/mail.svg";
import ticket from "../../assets/ContactCenter/ticket.svg";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import dropdown from '../../assets/ContactCenter/dropdown.svg'
import AssignedPopup from "../AssignedPopup/AssignedPopup";
export default function TicketDetails() {
  const [selected, setSelected] = useState("");
  const showIcon = selected === "";
    const[showMemberPopup, setShowMemberPopup]=useState(false)
    const[showStatusPopup, setShowStatusPopup]=useState(false)
  const users = [
    { id: 1, name: "Priyanshu", pic: "https://example.com/img1.jpg" },
    { id: 2, name: "Anjali", pic: "https://example.com/img2.jpg" },
    { id: 2, name: "Anjali", pic: "https://example.com/img2.jpg" },
    { id: 2, name: "Anjali", pic: "https://example.com/img2.jpg" },
    { id: 2, name: "Anjali", pic: "https://example.com/img2.jpg" },
    { id: 2, name: "Anjali", pic: "https://example.com/img2.jpg" },
    { id: 2, name: "Anjali", pic: "https://example.com/img2.jpg" },
    { id: 2, name: "Anjali", pic: "https://example.com/img2.jpg" },
    { id: 2, name: "Anjali", pic: "https://example.com/img2.jpg" },
    { id: 2, name: "Anjali", pic: "https://example.com/img2.jpg" },
  ];

  const handleStatus=(e)=>{
    setSelected(e.target.value)
    if(e.target.value=="resolved")
        setShowStatusPopup(true)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={pic} alt="Profile pic" />
        <h3>Chat</h3>
      </div>
      <div className={styles.details}>
        <h4>Details</h4>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <img src={profile} alt="Profile" />
            <span>John Doe</span>
          </div>
          <div className={styles.info}>
            <img src={tel} alt="Tel" />
            <span>+100 011 293494</span>
          </div> 
          <div className={styles.info}>
            <img src={mail} alt="Mail" />
            <span>john@example.com</span>
          </div>
        </div>
      </div>
      <div className={styles.teammates}>
        <h4>Team Member</h4>
        <div className={styles.ticketStatus}>
          <CustomDropdown users={users} setShowMemberPopup={setShowMemberPopup} showMemberPopup={showMemberPopup} />
          {
            showMemberPopup?<AssignedPopup message={"Chat would be assigned to Different team member"} setShowPopup={setShowMemberPopup} showPopup={showMemberPopup}/>:<></>
          }
          <select
            className={styles.status}
            value={selected}
            onChange={handleStatus}
            style={
              showIcon
                ? {
                    backgroundImage: `url("${ticket}"), url("${dropdown}")`,
                    backgroundRepeat: "no-repeat, no-repeat",
                    backgroundPosition:
                      "0.5rem center, calc(100% - 10px) center",
                    backgroundSize: "1.2rem, 0.7vw",
                    padding: "10px 2.5rem 10px 2.7rem",
                    width: "100%",
                    borderRadius: "10px",
                    outline: "none",
                    border: "2px solid #ccc",
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    color:"#808080",
                    fontWeight:"500",
                    fontFamily:"'Inter',sans-serif"
                  }
                : {
                    padding: "10px",
                    width: "100%",
                    borderRadius:"10px",
                    outline: "none",
                    border: "2px solid #ccc",
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    color:"#808080",
                    fontWeight:"500",
                    fontFamily:"'Inter',sans-serif"
                  }
            }
            
          >
            <option value="" disabled hidden>
              Ticket Status
            </option>
            <option value="resolved">Resolved</option>
            <option value="unresolved">Unresolved</option>
          </select>
          
          {
            showStatusPopup?<AssignedPopup message={"Chat will be closed"} setShowPopup={setShowStatusPopup} showPopup={showStatusPopup}/>:<></>
          }
          
        </div>
      </div>
    </div>
  );
}
