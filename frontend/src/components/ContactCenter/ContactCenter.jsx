import React, { useContext, useEffect, useState } from "react";
import Chatbar from "../ChatBar/Chatbar";
import styles from "./ContactCenter.module.css";
import UserChat from "../UserChat/UserChat";
import TicketDetails from "../TicketDetails/TicketDetails";
import { TicketContext } from "../../contexts/TicketContext";
import { getAllMembers, getTickets } from "../../services/index";
export default function ContactCenter() {
  const {
    ticket,
    setTicket,
    setSelectedChat,
    setChatList,
  } = useContext(TicketContext);

  const [members, setMembers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [chats, setChats] = useState([]);

  const [disabled, setDisabled] = useState(false);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    getTickets("unresolved")
      .then(async (response) => {
        const data = await response.json();
        if (response.ok) {
          
          setChatList(data.tickets);
          setSelectedChat(data?.tickets[0]?._id);
          setTicket(data.tickets[0]);
          if (data.tickets.length == 0) {
            setDisabled(true);
          } else {
            setDisabled(false);
          }
        }
      })
      .catch((error) => {
        console.error("Failed to fetch chat data:", error);
      });
  }, []);

  useEffect(() => {
    if (!ticket) return;

    getAllMembers()
      .then(async (response) => {
        const data = await response.json();

        if (response.ok) {
          setMembers(data.teams);
          const matchedUser = data.teams.find(
            (user) => user._id === ticket.assignedTo
          );
          if (matchedUser) {
            setSelectedUser(matchedUser);

            matchedUser._id === ticket.assignedTo
              ? setDisabled(false)
              : setDisabled(true);
          }
        }
      })
      .catch((error) => {
        console.error("Failed to fetch members:", error);
      });
  }, [ticket]);

  return (
    <div className={styles.container}>
      <Chatbar />
      <UserChat
        disabled={disabled}
        selectedUser={selectedUser}
        resolved={resolved}
        chats={chats}
        setChats={setChats}
      />
      <TicketDetails
        members={members}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        disabled={disabled}
        setDisabled={setDisabled}
        setResolved={setResolved}
        setChats={setChats}
      />
    </div>
  );
}
