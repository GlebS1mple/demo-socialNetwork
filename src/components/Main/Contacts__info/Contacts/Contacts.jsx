import React from "react";
import s from "../Contacts/Contacts.module.css";
import Contact from './Contact/Contact';


const Contacts = (props) => {
    let contacts = props.contacts.map((contact) => <Contact name={contact.name} id={contact.id} srcimg={contact.srcimg} />)
    return (
        <div className={s.main}>
            <div className={s.heading}>Online Contacts</div>
            {contacts}
        </div>)
}

export default Contacts;