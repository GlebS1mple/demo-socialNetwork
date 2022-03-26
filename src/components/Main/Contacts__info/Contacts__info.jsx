import React from "react";
import s from "../Contacts__info/Contacts__info.module.css";
import Info from "../Contacts__info/Info/Info"
import Contacts from "../Contacts__info/Contacts/Contacts"



const Contacts__info = (props) => {
    return (
        <div className={s.main}>
            <Info />
            <Contacts contacts={props.contacts} />
        </div>
    )
}
export default Contacts__info;