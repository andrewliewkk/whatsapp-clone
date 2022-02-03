import React from "react";
import "./Chat.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
type Props = {};

export default function Chat({}: Props) {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last login:</p>
        </div>
        <div className="chat__header__right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Name</span>
          <span className="chat__text">
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">Andrew</span>
          <span className="chat__text">
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </span>
        </p>
      </div>
      <div className="chat__input">
        <InsertEmoticonIcon />
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}
