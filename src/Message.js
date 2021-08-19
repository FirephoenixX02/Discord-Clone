import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

//Line 8 : src={user.photo}
//Line 13 : //{user.displayName}

function Message({ timestamp, message }) {
    const user = useSelector(selectUser);

  return (
    <div className="message">
      <Avatar src={user.photo}></Avatar>
      <div className="message__info">
        <h4>
        {user.displayName}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>

        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
