import React from "react";
import ChatScreen from "./ChatScreen";
import Message from "./Messages";
import "./MessagesList.css";



const MessagesList = ({ messages, deleteMessageById }) => {
    if (messages.length === 0) {
        return <span className="no-messages">No tienes Mensajes</span>;
    }

    const lista_mensajes = messages.map((message) => (
        <Message
        key={message.id}
        emisor={message.emisor}
        hora={message.hora}
        id={message.id}
        texto={message.texto}
        status={message.status}
        deleteMessageById = {deleteMessageById}
        />
    ));

    return <div className="messages-list-container">{lista_mensajes}</div>;
    };

    export default MessagesList;