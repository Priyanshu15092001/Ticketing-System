import React, { useContext, useState } from "react";
import styles from "./Chatbot.module.css";
import chatbotLogo from "../../assets/Chatbot/chatbotlogo.svg";
import ChatbotMessage from "../ChatbotMessage/ChatbotMessage";
import closeBtn from "../../assets/Chatbot/closeBtn.svg";
import sendBtn from "../../assets/Chatbot/sendBtn.svg";
import editBtn from "../../assets/Chatbot/editBtn.svg";
import TimePicker from "../TimePicker/TimePicker";
import { ChatbotContext } from "../../contexts/ChatbotContext";
export default function Chatbot() {
  // TODO: change default message placeholder with formplaceholder

  const headerColors = ["#33475b", "#fff", "#000"];
  const {
    selectedHeaderColor,
    setSelectedHeaderColor,
    selectedBackgroundColor,
    setSelectedBackgroundColor,
    welcomeMessage,
    setWelcomeMessage,
    customizeMessages,
    setCustomizeMessages,
    formPlaceholders,
    setFormPlaceholders
  } = useContext(ChatbotContext);

  const backgroundColors = ["#eee", "#fff", "#000"];

  const [editIndex, setEditIndex] = useState(null);
  const [tempMessage, setTempMessage] = useState("");

  const handleEditClick = (index) => {
    setEditIndex(index);
    setTempMessage(customizeMessages[index]);
  };

  const saveEdit = () => {
    if (editIndex !== null) {
      const updated = [...customizeMessages];
      updated[editIndex] = tempMessage;
      setCustomizeMessages(updated);
      setEditIndex(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveEdit();
    }
  };

 

  const [editFormField, setEditFormField] = useState(null);
  const [tempFormValue, setTempFormValue] = useState("");

  const handleFormEditClick = (field) => {
    setEditFormField(field);
    setTempFormValue(formPlaceholders[field]);
  };

  const saveFormEdit = () => {
    if (editFormField) {
      setFormPlaceholders((prev) => ({
        ...prev,
        [editFormField]: tempFormValue,
      }));
      setEditFormField(null);
    }
  };

  const handleFormKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveFormEdit();
    }
  };

  const [tempWelcomeMsg, setTempWelcomeMsg] = useState(welcomeMessage);
  const [isEditingWelcome, setIsEditingWelcome] = useState(false);

  const handleWelcomeEditClick = () => {
    setTempWelcomeMsg(welcomeMessage);
    setIsEditingWelcome(true);
  };

  const handleWelcomeKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveWelcomeMessage();
    }
  };

  // Save the changes
  const saveWelcomeMessage = () => {
    setWelcomeMessage(tempWelcomeMsg);
    setIsEditingWelcome(false);
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>Chat Bot</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <div className={styles.chatbox}>
            <div
              className={styles.chatboxHeader}
              style={{ backgroundColor: selectedHeaderColor }}
            >
              <img src={chatbotLogo} alt="Chatbot DP" />
              <h5>Hubly</h5>
            </div>
            <div
              className={styles.chatboxBody}
              style={{ backgroundColor: selectedBackgroundColor }}
            >
              <ChatbotMessage
                message={customizeMessages[0]}
                botMessage={true}
                defaultMessage={false}
                key={2}
                index={2}
              />
              <ChatbotMessage
                message={customizeMessages[1]}
                botMessage={true}
                defaultMessage={false}
                key={1}
                index={1}
              />
              <ChatbotMessage
                message={null}
                botMessage={true}
                defaultMessage={true}
                key={0}
                index={0}
              />
            </div>
            <div className={styles.chatboxInput}>
              <textarea name="" id="" placeholder="Write a message"></textarea>
              <button className={styles.chatboxBtn}>
                <img src={sendBtn} alt="" />
              </button>
            </div>
          </div>

          <div className={styles.chatbotPopup}>
            <div
              className={styles.closeBtn}
              onClick={() => setIsVisible(false)}
            >
              <img src={closeBtn} alt="Close" />
            </div>
            <img src={chatbotLogo} className={styles.botDp} alt="Bot" />
            <p className={styles.chatbotPopupBody}>{welcomeMessage}</p>
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.editContainer}>
            <h5 className={styles.editContainerHeader}>Header Color</h5>
            <div className={styles.colorOption}>
              {headerColors.map((color, index) => (
                <div
                  key={index}
                  className={styles.color}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedHeaderColor(color)}
                />
              ))}
            </div>
            <div className={styles.chosenColor}>
              <div
                className={styles.square}
                style={{ backgroundColor: selectedHeaderColor }}
              />
              <p>{selectedHeaderColor}</p>
            </div>
          </div>

          <div className={styles.editContainer}>
            <h5 className={styles.editContainerHeader}>
              Custom Background Color
            </h5>
            <div className={styles.colorOption}>
              {backgroundColors.map((color, index) => (
                <div
                  key={index}
                  className={styles.color}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedBackgroundColor(color)}
                />
              ))}
            </div>
            <div className={styles.chosenColor}>
              <div
                className={styles.square}
                style={{ backgroundColor: selectedBackgroundColor }}
              />
              <p>{selectedBackgroundColor}</p>
            </div>
          </div>

          <div className={styles.editContainer}>
            <h5 className={styles.editContainerHeader}>Customize Message</h5>
            <div className={styles.editMessageContainer}>
              {customizeMessages.map((message, index) => (
                <div key={index} className={styles.editMessageRow}>
                  {editIndex === index ? (
                    <input
                      type="text"
                      autoFocus
                      value={tempMessage}
                      onChange={(e) => setTempMessage(e.target.value)}
                      onBlur={saveEdit}
                      onKeyDown={handleKeyDown}
                      className={styles.editInput}
                    />
                  ) : (
                    <p className={styles.editMessage}>
                      {message}
                      <img
                        src={editBtn}
                        alt="Edit"
                        className={styles.editIcon}
                        onClick={() => handleEditClick(index)}
                      />
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.editContainer}>
            <h5 className={styles.editContainerHeader}>Introduction Form</h5>
            <div className={styles.editDefaultMessageContainer}>
              <form className={styles.form}>
                {["name", "phone", "email"].map((field) => (
                  <div className={styles.formGroup} key={field}>
                    <label htmlFor={field}>
                      Your {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    {editFormField === field ? (
                      <input
                        type="text"
                        value={tempFormValue}
                        onChange={(e) => setTempFormValue(e.target.value)}
                        onBlur={saveFormEdit}
                        onKeyDown={handleFormKeyDown}
                        className={styles.editInput}
                      />
                    ) : (
                      <input
                        type="text"
                        placeholder={formPlaceholders[field]}
                        onFocus={() => handleFormEditClick(field)}
                        readOnly
                      />
                    )}
                  </div>
                ))}

                <button type="submit">Thank You!</button>
              </form>
            </div>
          </div>

          <div className={styles.editContainer}>
            <h5 className={styles.editContainerHeader}>Welcome Message</h5>
            <div className={styles.welcomeMessageContainer}>
              <span>{tempWelcomeMsg.length}/100</span>
              <div className={styles.welcomeMessage}>
                {isEditingWelcome ? (
                  <textarea
                    value={tempWelcomeMsg}
                    onChange={(e) => {
                      if (e.target.value.length <= 100) {
                        setTempWelcomeMsg(e.target.value);
                      }
                    }}
                    onKeyDown={handleWelcomeKeyDown}
                    onBlur={saveWelcomeMessage}
                    autoFocus
                  />
                ) : (
                  <>
                    <textarea value={welcomeMessage} readOnly />{" "}
                    <img
                      src={editBtn}
                      alt="Edit"
                      onClick={handleWelcomeEditClick}
                      style={{ cursor: "pointer" }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>

          <div className={styles.editContainer}>
            <h5 className={styles.editContainerHeader}>Missed chat timer</h5>
            <div className={styles.timeContainer}>
              <TimePicker />
              <button>Save</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
