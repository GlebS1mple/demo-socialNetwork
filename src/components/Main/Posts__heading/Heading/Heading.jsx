import React from "react";
import s from "../Heading/Heading.module.css";

const Heading = (props) => {
    return (
        <div className={s.main}>
            What’s on you mind, <span className={s.name}>{props.profile.fullName}</span>?
        </div>)
}

export default Heading;