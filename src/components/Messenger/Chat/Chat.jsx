import React from "react";
import s from "./Chat.module.css";
import { NavLink } from "react-router-dom";


const Chat = (props) => {
    let src = "https://glebs1mple.github.io/demo-socialNetwork/img/Follower" + props.srcimg;
    let path = "/Messenger/" + props.id;
    return (
        <div className={s.chat}>
            <img src={src} alt="" className={s.img} />
            <NavLink to={path} className={s.person}>{props.name}</NavLink>
        </div>
    )
}

export default Chat;