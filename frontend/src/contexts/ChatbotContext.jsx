import { createContext, useEffect, useState } from "react";

export const ChatbotContext = createContext();

export const ChatbotProvider = ({ children }) => {
  const storedHeaderColor = localStorage.getItem("headerColor") || "#33475b";

  const [selectedHeaderColor, setSelectedHeaderColor] =
    useState(storedHeaderColor);

  const storedBackgroundColor =
    localStorage.getItem("backgroundColor") || "#eee";

  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(
    storedBackgroundColor
  );

  const storedWelcomeMessage = localStorage.getItem('welcomeMessage') || "👋 Want to chat about Hubly? I'm a chatbot here to help you find your way.";

  const [welcomeMessage, setWelcomeMessage] = useState(storedWelcomeMessage);

  const [customizeMessages, setCustomizeMessages] = useState(() => {
    const storedMessages = localStorage.getItem("customizeMessages");
    return storedMessages ? JSON.parse(storedMessages) : ["How can I help you?", "Ask me anything!"];
  });

  const [formPlaceholders, setFormPlaceholders] = useState(() => {
    const storedPlaceholder = localStorage.getItem("formPlaceholders");
    return storedPlaceholder
      ? JSON.parse(storedPlaceholder)
      : {
          name: "Your name",
          phone: "+91-838383444",
          email: "example@gmail.com",
        };
  });

  useEffect(() => {
    localStorage.setItem("headerColor", selectedHeaderColor);
  }, [selectedHeaderColor]);

  useEffect(() => {
    localStorage.setItem("backgroundColor", selectedBackgroundColor);
  }, [selectedBackgroundColor]);

  useEffect(() => {
    localStorage.setItem('welcomeMessage', welcomeMessage);
  }, [welcomeMessage]);


  useEffect(() => {
    localStorage.setItem("customizeMessages", JSON.stringify(customizeMessages));
  }, [customizeMessages]);




  useEffect(() => {
    localStorage.setItem("formPlaceholders", JSON.stringify(formPlaceholders));
  }, [formPlaceholders]);

  return (
    <ChatbotContext.Provider
      value={{
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
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};
