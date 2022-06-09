import React from "react";
import s from "../Wall/Wall.module.css";

const Wall = (props) => {
    const src = "https://glebs1mple.github.io/demo-socialNetwork/img/Walls" + props.srcimg;
    const smallsrc = "https://glebs1mple.github.io/demo-socialNetwork/img/Contact" + props.srcimg;
    return (
        <div className={s.main}>
            <img src={src} alt="" className={s.bigimg} />
            <div className={s.flex}>
                <img src={smallsrc} alt="" className={s.smallimg} />
                <div className={s.name}>{props.name}</div>
            </div>
        </div>)
}

export default Wall;