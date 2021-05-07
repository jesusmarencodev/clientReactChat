import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";
import { SidebarChat } from "./SidebarChat";




export const SideBar = () => {

  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);

  const { uid } = auth;


  return (
    <div className="inbox_chat">
      {
        chatState.usuarios.filter((user => user.uid !== uid )).map((usuario)=> (
            <SidebarChat
              key={usuario.uid}
              usuario={usuario}
            />
        ))
      }
      <div className="extra_space"></div>
    </div>
  );
};
