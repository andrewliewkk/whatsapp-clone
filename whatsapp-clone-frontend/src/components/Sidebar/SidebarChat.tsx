import React from "react";
import "./SidebarChat.css";
import { Avatar, IconButton } from "@material-ui/core";
type Props = {};

export default function SidebarChat({}: Props) {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  );
}
