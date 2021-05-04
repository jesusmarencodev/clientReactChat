import React from "react";
import { SidebarChat } from "./SidebarChat";


const chats = [1,2,3,4,5,6,7,8,9]

export const SideBar = () => {
  return (
    <div className="inbox_chat">
      {
        chats.map((chat)=> (
          <SidebarChat key={chat} />
        ))
      }
      <div className="extra_space"></div>
    </div>
  );
};
