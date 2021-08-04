import React from "react";
import "../src/Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";

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
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon></InfoOutlinedIcon>
          <CallIcon></CallIcon>
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar src="https://avatars.githubusercontent.com/u/81097492?s=400&u=c211c95105019c80969570ba81af0867c526a0e7&v=4"></Avatar>
        <div className="sidebar__profileInfo">
          <h3>Default User</h3>
          <p>#0001</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon></MicIcon>
          <HeadsetIcon></HeadsetIcon>
          <SettingsIcon></SettingsIcon>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
