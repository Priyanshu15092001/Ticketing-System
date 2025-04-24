import { useContext, useEffect, useState } from "react";
import styles from "./CustomDropdown.module.css";
import admin from "../../assets/ContactCenter/admin.svg";
import teamLogo from '../../assets/Sidebar/teams.svg'
import dropdown from "../../assets/ContactCenter/dropdown.svg";
export default function CustomDropdown({
  members,
  selectedUser,
  setSelectedUser,
  setShowMemberPopup,
  disabled
}) {
  const [isOpen, setIsOpen] = useState(false);
  // const {ticket} = useContext(TicketContext)


  const toggleDropdown = () => {
    console.log(disabled);
    disabled?setIsOpen(false):setIsOpen(!isOpen)
    localStorage.getItem("role")==="member"?setIsOpen(false):setIsOpen(!isOpen)
  };
 

  const handleSelect = (member) => {
    setSelectedUser(member);
    setIsOpen(false);
    setShowMemberPopup(true);
  };

  return (
    <div className={styles.dropdown}>
      <div className={`${styles.selected} ${disabled ? styles.disabled : ''}`} onClick={toggleDropdown}>
        <div>
          {
            !disabled?<img src={admin} alt="admin pic" />:<img src={teamLogo} alt="disabled" style={{width:"1vw"}} />
          }
          
          <span>
            {selectedUser?.firstName} {selectedUser?.lastName}
          </span>
        </div>
        <img src={dropdown} style={{ width: "0.7vw" }} alt="" />
      </div>

      {isOpen && (
        <ul className={styles.options}>
          {members.map((member,index) => (
            <li key={index} onClick={() => handleSelect(member)} >
              <img src={admin} />
              <span>
                {member?.firstName} {member?.lastName}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
