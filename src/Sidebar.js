import React from 'react'
import "../src/Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <h3>FireCord</h3>
                <ExpandMoreIcon></ExpandMoreIcon>
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                    <ExpandMoreIcon></ExpandMoreIcon>
                    <h4>Text Channels</h4>
                    </div>

                <AddIcon className="sidebar__addChannel "></AddIcon>
                </div>
            </div>
            <div className="sidebar__channelsList">
                <SidebarChannel />
            </div>
        </div>
    )
}

export default Sidebar
