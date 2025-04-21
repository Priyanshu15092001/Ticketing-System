import React from "react";
import styles from "./ChatbotMessage.module.css";
import chatbotDp from "../../assets/Chatbot/botDp.svg";
import DefaultMessage from "../DefaultMessage/DefaultMessage";
export default function ChatbotMessage({
  message,
  botMessage,
  defaultMessage,
  index,
  
}) {

  // const showBotDp = botMessage && (index === 0 || !messages[index - 1].botMessage)
  return (
    <div
      className={`${styles.messageContainer} ${
        botMessage ? styles.receive : styles.send
      }`}
    >
      {botMessage ? <img src={chatbotDp} alt="Bot Pic" /> : <></>}

      {defaultMessage ? <DefaultMessage /> : <p>{message}</p>}
    </div>
  );
}
