import React from "react";
import s from "../Contacts/Contacts.module.css";
import Contact from './Contact/Contact';


const Contacts = (props) => {
    let contacts = props.contacts.map((contact) => <Contact key={contact.id} name={contact.name} id={contact.id} srcimg={contact.srcimg} />)
    return (
        <div className={s.contactsmain}>
            <div className={s.heading}>Online Contacts</div>
            <div className={s.main}>
                {contacts}
            </div></div>)
}

export default Contacts;