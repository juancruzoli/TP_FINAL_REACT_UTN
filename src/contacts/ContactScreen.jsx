import React from "react";
import ContactList from "./ContactList";
import { useState } from "react";
import { getContactList } from "../services/ContactService";
import { getContactById } from "../services/ContactService";
import './ContactScreen.css'

    const ContactScreen = () => {
    const contacts = getContactList()

    const [contactState, setContactState] = useState(contacts);

    return (
        <>        
        <div>
            <div className="contact-screen">
                <h1 className="contact-title-text">DropApp</h1>
                <span className="contact-subtitle-text">Contacts </span>
                <ContactList contacts={contacts} />
            </div>
        </div>
        
        
        </>

    );
    };

    export default ContactScreen;