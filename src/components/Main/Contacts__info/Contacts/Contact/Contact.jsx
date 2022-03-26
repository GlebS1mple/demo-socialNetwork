import React from "react";
import s from "../Contact/Contact.module.css";

const Contact = (props) => {
    let src = "../img/Contact" + props.srcimg;
    return (
        <div className={s.main}>
            <img src={src} alt="" className={s.img} />
            <div className={s.name}>{props.name}</div>
        </div>)
}

export default Contact;