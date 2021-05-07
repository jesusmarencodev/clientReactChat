import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";
import { Incoming_Msg } from "./Incoming_Msg";
import { Outgoing_Msg } from "./Outgoing_Msg";
import { SendMessage } from "./SendMessage";

export const Messages = () => {

  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext)

  return (
    <div className="mesgs">
      <div id="mensajes" className="msg_history">
        {
          chatState.mensajes.map(msg=>(
            (msg.para ===auth.uid)
              ? <Incoming_Msg key={msg._id} msg={msg} />
              : <Outgoing_Msg key={msg._id} msg={msg} />
          ))
        }
      </div>

      <SendMessage />
    </div>
  );
};
