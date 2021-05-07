import React from "react";
import { horaMes } from "../helpers/horames";

export const Outgoing_Msg = ({msg}) => {

  const { createdAt, mensaje  } = msg;

  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{mensaje}</p>
        <span className="time_date">{ horaMes(createdAt) }</span>
      </div>
    </div>
  );
};
