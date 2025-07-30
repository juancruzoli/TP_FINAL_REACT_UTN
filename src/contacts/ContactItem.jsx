import React from "react";
import { Link } from "react-router";
import "./ContactItem.css";

    const ContactItem = ({ contact }) => {
    return (
        <Link to={`/contact/${contact.id} /messages`}>
            <div className="contact-card"> 
                <div className="contact-info-container">
                    <img className = "wa-avatar" src={contact.avatar} alt={contact.emisor} width={50}/>
                    <p className="contact-name info-contact">{contact.emisor}</p>
                </div>
                
            <p className="contact-status">{contact.status}</p>
            </div>

        </Link>
    );
    };

export default ContactItem;