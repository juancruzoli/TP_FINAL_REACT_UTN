import React, { useState } from "react";
import MessagesList from "./MessagesList";
import NewMessage from "./NewMessage";
import { useParams } from "react-router";
import { getContactById } from "../../services/ContactService";
import "./ChatScreen.css";


const ChatScreen = () => {
  const { contact_id } = useParams();
  const contact_selected = getContactById(contact_id);
  const [messages, setMessages] = useState(contact_selected.messages);

  const deleteMessageById = (message_id) => {
    const new_message_list = []

    for (const message of messages){
      if (message.id !== message_id) {
        new_message_list.push (message)
      }
    }
    
    setMessages (new_message_list)
  }

  const addNewMessage = (text) => {
    const new_message = {
      emisor: 'YO',
      hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      texto: text,
      status: 'no leído',
      id: messages.length + 1,
    };
    setMessages([...messages, new_message]);
  };

  return (
    <div className="chat-screen">
      <div className="chat-header">
        <h2>{contact_selected.emisor}</h2>
        <p>Última conexión: hoy</p>
      </div>
      <MessagesList messages={messages} deleteMessageById={deleteMessageById} />
      <NewMessage addNewMessage={addNewMessage} />
    </div>
  );
};

export default ChatScreen;
