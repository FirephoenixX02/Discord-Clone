import React from 'react'
import "./Message.css"
import { Avatar } from "@material-ui/core";

function Message() {
    return (
        <div className="message">
            <Avatar></Avatar>
            <div className="message__info">
                <h4>Default User
                    <span className="message__timestamp">time stamp</span>
                </h4>

                <p>This is a message</p>
            </div>
        </div>
    )
}

export default Message
