import { createContext,useEffect,useState } from "react";
import { getTickets } from "../services/index";

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  
    const[ticket,setTicket]=useState()
    const[chatList,setChatList]=useState([])
    const [selectedChat, setSelectedChat] = useState();

    
      

  return (
    <TicketContext.Provider
      value={{
       ticket,
       setTicket,
       selectedChat,
       setSelectedChat,
       chatList,
       setChatList
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
