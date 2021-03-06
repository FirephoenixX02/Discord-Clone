import React from 'react'
import "./ChatHeader.css"
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import "./Chat"

function ChatHeader({ channelName }) {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">#</span>
                    {channelName}
                </h3>
            </div>
            <div className="chatHeader__right">
                <NotificationsIcon></NotificationsIcon>
                <EditLocationRoundedIcon></EditLocationRoundedIcon>
                <PeopleAltRoundedIcon></PeopleAltRoundedIcon>

                <div className="chatHeader__search">
                    <input placeholder="Search"></input>
                    <SearchRoundedIcon></SearchRoundedIcon>
                </div>

                <SendRoundedIcon></SendRoundedIcon>
                <HelpRoundedIcon></HelpRoundedIcon>

            </div>
        </div>
    )
}

export default ChatHeader
