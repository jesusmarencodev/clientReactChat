import React, { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";
import { SocketContext } from "../context/SocketContext";

export const SendMessage = () => {

  const [mensaje, setMensaje] = useState('');
  const {socket}  = useContext(SocketContext);
  const { chatState } = useContext(ChatContext)
  const { auth } = useContext(AuthContext)

  const onChange = ({target}) => {
    setMensaje(target.value)
  }

  const onSubmit = (ev) => {
    ev.preventDefault();

    if(mensaje.length === 0) return;

    //Emitir un evento de socket para enviar el mensaje

    socket.emit('mensaje-personal', {
      de: auth.uid,
      para: chatState.chatActivo,
      mensaje
    });

    //hacer el dispath del mensaje

    setMensaje('');

    //


  }


  return (
    <form onSubmit={onSubmit}>
      <div className="type_msg row">
        <div className="input_msg_write col-sm-9">
          <input 
            type="text" 
            className="write_msg" 
            placeholder="Mensaje..."
            value={mensaje}
            onChange={onChange}
          />
        </div>
        <div className="col-sm-3 text-center">
          <button className="msg_send_btn mt-3" type="submit">
            enviar
          </button>
        </div>
      </div>
    </form>
  );
};
