import React, { useContext, useEffect, useState } from "react";
import styles from "./Chatbox.module.css";
import chatbotLogo from "../../assets/Chatbot/chatbotlogo.svg";
import ChatbotMessage from "../ChatbotMessage/ChatbotMessage";
import sendBtn from "../../assets/Chatbot/sendBtn.svg";
import { ChatbotContext } from "../../contexts/ChatbotContext";
import { getMessages, getTicketStatus, sendMessages } from "../../services";
import { toast } from "react-toastify";
export default function Chatbox() {
  const { selectedHeaderColor, selectedBackgroundColor } =
    useContext(ChatbotContext);

  const [firstMessageContent, setFirstMessageContent] = useState("");

  const [message, setMessage] = useState({
    senderType: "customer",
    senderName: "",
    content: "",
  });

  const [firstMessage, setFirstMessage] = useState(false);

  const [messages, setMessages] = useState([]);

  // useEffect(() => {

  // }, [messages]);

  useEffect(() => {
    if (localStorage.getItem("ticket")) {
      const ticket = JSON.parse(localStorage.getItem("ticket"));

      getTicketStatus(ticket._id)
        .then(async(response) => {
          const data = await response.json();
          if (response.ok) {
            if (data.ticketStatus == "resolved") {
              console.log("status",data);
              
              localStorage.removeItem("ticket");
            } else {
              getMessages(ticket._id)
                .then(async (response) => {
                  const data = await response.json();
                  console.log(data);

                  if (response.ok) {
                    setMessages(data?.messages);
                  }
                })
                .catch((error) => {
                  console.error(error);
                });
            }
          }
          else{
            toast.error(data.message)
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ticket = JSON.parse(localStorage.getItem("ticket"));

    const newMessage = {
      senderType: "customer",
      senderName: ticket?.customer?.name,
      content: message.content,
    };
    // setMessage((prev)=>({...prev,senderName:ticket.customer.name}))
    if (messages.length == 0) {
      setFirstMessageContent(message.content);
      setFirstMessage(true);
      setMessage({
        senderType: "customer",
        senderName: "",
        content: "",
      });
    } else {
      sendMessages(ticket._id, newMessage)
        .then(async (response) => {
          const data = await response.json();
          if (response.ok) {
            setMessages((prev) => [data.newMessage, ...prev]);

            setMessage({
              senderType: "customer",
              senderName: "",
              content: "",
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.header}
        style={{ backgroundColor: selectedHeaderColor }}
      >
        <img src={chatbotLogo} alt="Chatbot DP" />
        <h5>Hubly</h5>
      </div>
      <div
        className={styles.body}
        style={{ backgroundColor: selectedBackgroundColor }}
      >
        {/* <ChatbotMessage message="Hey" botMessage={true} /> */}
        {/* <ChatbotMessage/> */}
        {firstMessage == true ? (
          <ChatbotMessage
            firstMessage={firstMessage}
            setFirstMessage={setFirstMessage}
            firstMessageContent={firstMessageContent}
            messages={messages}
            setMessages={setMessages}
          />
        ) : (
          messages?.map((messageItem, index) => (
            <ChatbotMessage
              firstMessage={false}
              message={messageItem}
              key={index}
            />
          ))
        )}
      </div>
      <div className={styles.chatbox}>
        <textarea
          name="content"
          id="content"
          placeholder="Write a message"
          value={message.content}
          onChange={handleChange}
        ></textarea>
        <button className={styles.btn} onClick={handleSubmit}>
          <img src={sendBtn} alt="" />
        </button>
      </div>
    </div>
  );
}
