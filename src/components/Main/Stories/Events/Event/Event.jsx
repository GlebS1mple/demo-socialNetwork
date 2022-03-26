import React from "react";
import s from "../Event/Event.module.css";

const Event = (props) => {
    let src = "../img/Events" + props.srcimg;
    let srcsmall = "../img/Groups" + props.srcimg;
    return (
        <div className={s.main}>
            <div className={s.block}>
                <img src={src} alt="" className={s.bigimg} />
                <div className={s.flexblock}>
                    <div className={s.opening}>
                        <img src="../img/corn.png" alt="" className={s.icon} />
                        <div className={s.heading}>{props.name}</div>
                    </div>
                    <div className={s.discription}>{props.text}</div>
                    <button className={s.btn}>{props.btn}</button>
                </div>
            </div>
            <div className={s.text}>
                <div className={s.photos}>
                    <img src={srcsmall} alt="" className={s.group} />
                </div>
                <div className={s.stat}>
                    <div className={s.friends}>{props.friends}</div>
                    <div className={s.what}>{props.what}</div>
                </div>
            </div>
        </div>)
}

export default Event;