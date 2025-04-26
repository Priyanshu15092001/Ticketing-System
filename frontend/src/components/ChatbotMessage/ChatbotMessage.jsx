import React from "react";
import styles from "./ChatbotMessage.module.css";
import chatbotDp from "../../assets/Chatbot/botDp.svg";
import DefaultMessage from "../DefaultMessage/DefaultMessage";
export default function ChatbotMessage({
  firstMessage,
  setFirstMessage,
  firstMessageContent,
  message,
  messages,
  setMessages,
}) {
  // const showBotDp = botMessage && (index === 0 || !messages[index - 1].botMessage)
  return (
    <div
      className={`${styles.messageContainer} ${
        firstMessage == true || message?.senderType == "customer"
          ? styles.send
          : styles.receive
      }`}
    >
      {message?.senderType == "system" ? (
        <img src={chatbotDp} alt="Bot Pic" />
      ) : (
        <></>
      )}
      {firstMessage ? (
        <div className={styles.firstMessage}>
          <p>{firstMessageContent}</p>
          <DefaultMessage
            firstMessageContent={firstMessageContent}
            setFirstMessage={setFirstMessage}
            messages={messages}
            setMessages={setMessages}
          />
        </div>
      ) : (
        <p>{message?.content}</p>
      )}
    </div>
  );
}
