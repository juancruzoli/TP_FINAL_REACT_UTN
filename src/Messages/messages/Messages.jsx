import React from "react";
import "./Messages.css";


const Message = ({ emisor, id, texto, status, deleteMessageById }) => {
  return (
    <div className="message-container">
      <div className={`message + ${emisor === "YO" ? 'my-message' : 'other-message'}`}>
        <p className="message-text">{texto}</p>
        <span className="message-time">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        <button onClick={() => deleteMessageById(id)}className="delete-button" >🗑️</button>
      </div>
    </div>
  );
};

export default Message;
