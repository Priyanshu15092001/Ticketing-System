import React, { useState } from "react";
import ChatItem from "../ChatItem/ChatItem";
import styles from "./Chatbar.module.css";
export default function Chatbar() {
  const [selectedChat, setSelectedChat] = useState(null);
  const chatList = [
    { id: 1, name: "Chat 1", message: "I have a question about the system" },
    { id: 2, name: "Chat 2", message: "Hello there" },
    { id: 3, name: "Chat 2", message: "Hello there" },
    { id: 4, name: "Chat 2", message: "Hello there" },
    { id: 5, name: "Chat 2", message: "Hello there" },
    { id: 6, name: "Chat 2", message: "Hello there" },
    { id: 7, name: "Chat 2", message: "Hello there" },
    { id: 8, name: "Chat 2", message: "Hello there" },
    { id: 9, name: "Chat 2", message: "Hello there" },
    { id: 10, name: "Chat 2", message: "Hello there" },
    { id:11, name: "Chat 2", message: "Hello there" },
  ];
  return (
    <div className={styles.container}>
        <div className={styles.header}>
        <h2>Contact Center</h2>
        </div>
      
      <div className={styles.chatContainer}>
        <h4>Chats</h4>
        <hr />
        <div className={styles.chatList}>
          {chatList.map((chat) => 
            (<ChatItem
              key={chat.id}
              id={chat.id}
              name={chat.name}
              message={chat.message}
              isActive={selectedChat === chat.id}
              onSelect={() => setSelectedChat(chat.id)}
            />)
          )}
        </div>
      </div>
    </div>
  );
}
