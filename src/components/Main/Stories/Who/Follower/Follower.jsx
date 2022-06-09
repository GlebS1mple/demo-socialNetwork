import React from "react";
import s from "../Follower/Follower.module.css";

const Follower = (props) => {
    let src = "https://glebs1mple.github.io/demo-socialNetwork/img/Follower" + props.srcimg;
    return (
        <div className={s.main}>
            <div className={s.flex}>
                <img src={src} alt="" className={s.photo} />
                <div className={s.name}>{props.name}</div>
                <img src="https://glebs1mple.github.io/demo-socialNetwork/img/Frame.png" alt="" className={s.check} />
            </div>
            <button className={s.btn}>Follow</button>
        </div>)
}

export default Follower;