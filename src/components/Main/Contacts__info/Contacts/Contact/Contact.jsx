import React from "react";
import s from "../Contact/Contact.module.css";

const Contact = (props) => {
    const src = "https://glebs1mple.github.io/demo-socialNetwork/img/Contact" + props.srcimg;
    return (
        <div className={s.main}>
            <img src={src} alt="" className={s.img} />
            <div className={s.name}>{props.name}</div>
        </div>)
}

export default Contact;