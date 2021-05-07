import React, { useContext } from "react";
import { ChatContext } from "../context/chat/ChatContext";
import { fetchConToken } from "../helpers/fetch";
import { scrollToBottom } from "../helpers/scrollToBottom";
import { types } from "../types/types";

export const SidebarChat = ({usuario}) => {

  const { chatState, dispatch } = useContext(ChatContext)

  const { nombre, online, uid } = usuario;

  const { chatActivo } = chatState;

  const onClick = async() => {
    dispatch({
      type : types.activarChat,
      payload : uid
    })
    //cargar los mensajes del chat
    const resp = await fetchConToken(`mensajes/${uid}`);
    dispatch({
      type: types.cargarMensajes,
      payload : resp.last30
    });

    scrollToBottom('mensajes');
  }

  return (
    <div
      className={`chat_list ${ (uid === chatActivo) && 'active_chat' } `}
      onClick={onClick}
      >
      {/* active_chat */}
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{nombre}</h5>
          {
            (online)
              ? <span className="text-success">Online</span>
              : <span className="text-danger">Offline</span>
          }
          
          
        </div>
      </div>
    </div>
  );
};
