import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext(null);

export const SocketProvider = ({children}) => {
  const [socket, setSocket] = useState(null);
  
  useEffect(() => {
    const token = localStorage.getItem("token") || null;

    const newSocket = io(import.meta.env.VITE_API_URL, {
      extraHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
      setSocket(null);
    }
  }, [])

  return <SocketContext.Provider value={{socket}}>
    {children}
  </SocketContext.Provider>
};

export const useSocket = () => useContext(SocketContext);