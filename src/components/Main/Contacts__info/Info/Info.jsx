import React from "react";
import s from "../Info/Info.module.css";

const Info = () => {
    return (
        <div className={s.main}>
            <img src="../img/people.png" alt="" className={s.people} />
            <div className={s.heading}>Jessica’s Wedding Plan</div>
            <div className={s.sub}>Active Now</div>
            <div className={s.buttons}>
                <button className={s.btn}>Call group</button>
                <button className={s.btn}>Video call</button>
            </div>
        </div>)
}

export default Info;