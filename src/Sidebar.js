import React from "react";
import "../src/Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';

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
        <div className="sidebar__channelsList">
            <SidebarChannel></SidebarChannel>
            <SidebarChannel></SidebarChannel>
            <SidebarChannel></SidebarChannel>
            <SidebarChannel></SidebarChannel>
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large"/>
        <div className="sidebar__voiceInfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
            <InfoOutlinedIcon></InfoOutlinedIcon>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
