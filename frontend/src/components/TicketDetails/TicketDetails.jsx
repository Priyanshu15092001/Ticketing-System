import React, { useContext, useEffect, useState } from "react";
import styles from "./TicketDetails.module.css";
import pic from "../../assets/Dashboard/People.svg";

import profile from "../../assets/ContactCenter/profile.svg";
import tel from "../../assets/ContactCenter/tel.svg";
import mail from "../../assets/ContactCenter/mail.svg";
import ticketIcon from "../../assets/ContactCenter/ticket.svg";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import dropdown from "../../assets/ContactCenter/dropdown.svg";
import { AssignedPopup } from "../Popup/Popup";
import { TicketContext } from "../../contexts/TicketContext";
import { getAllMembers, reassignTicket, updateTicketStatus } from "../../services/index";
import { toast } from "react-toastify";
export default function TicketDetails({
  members,
  setSelectedUser,
  selectedUser,
  disabled,
  setDisabled,
  setResolved,
  setChats
}) {
  const [selected, setSelected] = useState("");
  const showIcon = selected === "";

  const [showMemberPopup, setShowMemberPopup] = useState(false);
  const [showStatusPopup, setShowStatusPopup] = useState(false);
  const { ticket,chatList } = useContext(TicketContext);

  const handleStatus = (e) => {
    setSelected(e.target.value);
    if (e.target.value == "resolved") setShowStatusPopup(true);
  };


  const handleReassign = () => {
    reassignTicket(selectedUser._id, ticket._id)
      .then(async (response) => {
        const data = await response.json();

        if (response.ok) {
          console.log(data);

          ticket.assignedTo === data.ticket.assignedTo?setDisabled(false):setDisabled(true);

          setChats([])

          setShowMemberPopup(false);
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Failed to reassign ticket:", error);
      });
  };

  const handleAssignCancel = () => {
    setShowMemberPopup(false);
  
    const originalAssignee = members.find(member => member._id === ticket?.assignedTo);
    if (originalAssignee) {
      setSelectedUser(originalAssignee);
    }
  };

  const handleResolve =()=>{
    updateTicketStatus(ticket._id)
    .then(async(response)=>{
      const data = await response.json();
      if (response.ok) {
        setShowStatusPopup(false)
        setResolved(true)
        setDisabled(true)
        setChats([])
      }
      else{
        toast.error(data.message)
      }
    })
    .catch((error)=>{
      console.error("Error updating ticket status:", error);
    })
  }

  const handleResolveCancel=()=>{
    setSelected("")
    setShowStatusPopup(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {!disabled ? (
          <img src={pic} alt="Profile pic" />
        ) : (
          <div className={styles.profileCircle}></div>
        )}

        <h3>Chat</h3>
      </div>
      <div className={styles.details}>
        <h4>Details</h4>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <img src={profile} alt="Profile" />
            <p>{ticket?.customer?.name}</p>
          </div>
          <div className={styles.info}>
            <img src={tel} alt="Tel" />
            <p>{chatList.length==0?"":"+100 011 293494"}</p>
          </div>
          <div className={styles.info}>
            <img src={mail} alt="Mail" />
            <p>{ticket?.customer?.email}</p>
          </div>
        </div>
      </div>
      <div className={styles.teammates}>
        <h4>Team Member</h4>
        <div className={styles.ticketStatus}>
          <CustomDropdown
            assignedTo={ticket?.assignedTo}
            members={members}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            setShowMemberPopup={setShowMemberPopup}
            showMemberPopup={showMemberPopup}
            disabled={disabled}
            setDisabled={setDisabled}
          />
          {  
          showMemberPopup ? (
            <AssignedPopup
              message={"Chat would be assigned to Different team member"}
              handleClick={handleReassign}
              setShowPopup={setShowMemberPopup}
              showPopup={showMemberPopup}
              handleCancel={handleAssignCancel}
            />
          ) : (
            <></>
          )}
          <select
            className={styles.status}
            value={selected}
            onChange={handleStatus}
            disabled={disabled}
            style={
              showIcon
                ? {
                    backgroundImage: `url("${ticketIcon}"), url("${dropdown}")`,
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
                    color: "#808080",
                    fontWeight: "500",
                    fontFamily: "'Inter',sans-serif",
                  }
                : {
                    padding: "10px",
                    width: "100%",
                    borderRadius: "10px",
                    outline: "none",
                    border: "2px solid #ccc",
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    color: "#808080",
                    fontWeight: "500",
                    fontFamily: "'Inter',sans-serif",
                  }
            }
          >
            <option value="" disabled hidden>
              Ticket Status
            </option>
            <option value="resolved">Resolved</option>
            <option value="unresolved">Unresolved</option>
          </select>

          {showStatusPopup ? (
            <AssignedPopup
              message={"Chat will be closed"}
              setShowPopup={setShowStatusPopup}
              showPopup={showStatusPopup}
              handleClick={handleResolve}
              handleCancel={handleResolveCancel}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
