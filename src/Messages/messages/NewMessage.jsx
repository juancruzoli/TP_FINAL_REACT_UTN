import React from 'react'
import ChatScreen from './ChatScreen'
import './NewMessage.css'


const NewMessage = ({ addNewMessage }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const messageText = event.target.message.value;
        if (messageText.trim()) {
        addNewMessage(messageText);
        event.target.message.value = "";
        }
    };

    return (
        <form className="new-message-form" onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Escribe un mensaje..."
            id="message"
            name="message"
            required
            className="new-message-input"
        />
        <button type="submit" className="new-message-button">
            Enviar
        </button>
        </form>
    );
    };

export default NewMessage;