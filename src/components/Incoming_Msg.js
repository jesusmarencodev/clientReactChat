import React from "react";
import { horaMes } from "../helpers/horames";

export const Incoming_Msg = ({msg}) => {

  const { createdAt, mensaje  } = msg;

  

  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img
          src="https://ptetutorials.com/images/user-profile.png"
          alt="sunil"
        />
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{mensaje}</p>
          <span className="time_date">{ horaMes(createdAt) }</span>
        </div>
      </div>
    </div>
  );
};
