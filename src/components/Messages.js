import React from "react";
import { Incoming_Msg } from "./Incoming_Msg";
import { Outgoing_Msg } from "./Outgoing_Msg";
import { SendMessage } from "./SendMessage";

export const Messages = () => {

  const msgs = [1,2,3,4,5,6,7,8,9]

  return (
    <div className="mesgs">
      <div className="msg_history">
        {
          msgs.map(msg=>(
            (msg % 2)
              ? <Incoming_Msg key={msg} />
              : <Outgoing_Msg key={msg} />
          ))
        }
      </div>

      <SendMessage />
    </div>
  );
};
