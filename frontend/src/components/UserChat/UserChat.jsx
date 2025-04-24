import React, { useContext, useEffect, useState } from "react";
import styles from "./UserChat.module.css";
import sendBtn from "../../assets/ContactCenter/sendbtn.svg";
import homeBtn from "../../assets/Sidebar/dashboard.svg";
import Message from "../Message/Message";
import { TicketContext } from "../../contexts/TicketContext";
import { getMessages, sendMessages } from "../../services";
import { toast } from "react-toastify";
export default function UserChat({
  disabled,
  selectedUser,
  resolved,
  chats,
  setChats,
}) {
  const { ticket, chatList } = useContext(TicketContext);

  const [message, setMessage] = useState({
    senderType: "system",
    senderName: "system",
    content: "",
  });

  useEffect(() => {
    if (ticket?._id) {
      getMessages(ticket._id)
        .then(async (response) => {
          const data = await response.json();
          console.log(data?.messages);
          if (response.ok) {
            setChats(data?.messages);
          }
        })
        .catch((error) => {
          console.error("Failed to fetch messages:", error);
        });
    }
  }, [ticket]);

  const formatTime = (isoDate) => {
    const date = new Date(isoDate);

    const formatted = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formatted;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSend = (e) => {
    e.preventDefault();

    sendMessages(ticket?._id, message)
      .then(async (response) => {
        const data = await response.json();
        if (response.ok) {
          console.log(data);

          setChats((prev) => [data.newMessage, ...prev]);

          setMessage({
            senderType: "system",
            senderName: "system",
            content: "",
          });
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{ticket?.ticketId}</h3>
        <img src={homeBtn} alt="Home" />
      </div>
      <div className={styles.chatBody}>
        {chats.map((chat, index) => {
          const nextChat = chats[index + 1];
          const showImage =
            index === chats.length - 1 ||
            chat.senderType !== nextChat?.senderType;

          return (
            <Message
              chat={chat}
              showImage={showImage}
              key={index}
              selectedUser={selectedUser}
            />
          );
        })}

        <div className={styles.timeContainer}>
          <div
            style={{
              height: "1px",
              width: "30%",
              borderTop: "1px solid #8c8e92",
            }}
          ></div>
          <p>
            {chats[0]
              ? formatTime(chats[0]?.createdAt)
              : formatTime(new Date().toISOString())}
          </p>
          <div
            style={{
              height: "1px",
              width: "30%",
              borderTop: "1px solid #8c8e92",
            }}
          ></div>
        </div>
      </div>
      <div className={styles.inputContainer}>
        {disabled ? (
          <p
            style={{
              color: "rgba(0, 0, 0, 0.45)",
              fontFamily: "'Inter',sans-serif",
              fontSize: "0.8vw",
            }}
          >
            {chatList.length == 0
              ? "No chats to display"
              : resolved
              ? "This chat has been resolved"
              : "This chat is assigned to new team member. You no longer have access"}
          </p>
        ) : (
          <div className={styles.input}>
            <textarea
              name="content"
              id="content"
              placeholder="type here"
              value={message.content}
              onChange={handleChange}
            ></textarea>
            <img src={sendBtn} alt="Send Button" onClick={handleSend} />
          </div>
        )}
      </div>
    </div>
  );
}
