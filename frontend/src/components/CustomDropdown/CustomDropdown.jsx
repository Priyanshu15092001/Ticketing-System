import { useState } from "react";
import styles from './CustomDropdown.module.css';
import pic from '../../assets/Dashboard/People.svg'
import dropdown from '../../assets/ContactCenter/dropdown.svg'
export default function CustomDropdown({ users,setShowMemberPopup, showMemberPopup }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(users[0]);

  const handleSelect = (user) => {
    setSelectedUser(user);
    setIsOpen(false);
    setShowMemberPopup(true)
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
          <div>
            <img src={pic} alt={selectedUser.name} />
            <span>{selectedUser.name}</span>
            </div>
            <img src={dropdown} style={{width:'0.7vw'}} alt="" />

      </div>

      {isOpen && (
        <ul className={styles.options}>
          {users.map((user) => (
            <li key={user.id} onClick={() => handleSelect(user)}>
              <img src={pic} alt={user.name} />
              <span>{user.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
