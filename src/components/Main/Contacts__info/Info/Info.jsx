import React from "react";
import s from "../Info/Info.module.css";

const Info = () => {
    const src = "https://glebs1mple.github.io/demo-socialNetwork/img/";
    return (
        <div className={s.main}>
            <div className={s.members}>
                <img src={src + "people.png"} alt="" className={s.people} />
                <div className={s.heading}>Jessica’s Wedding Plan</div>
                <div className={s.sub}>Active Now</div>
            </div>
            <div className={s.buttons}>
                <button className={s.btn}>Call group</button>
                <button className={s.btn}>Video call</button>
            </div>
        </div>)
}

export default Info;