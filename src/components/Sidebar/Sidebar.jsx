import React from "react";
import s from "./Sidebar.module.css";


const Sidebar = () => {
    return (
        <div className={s.main}>
            <div className={s.iframe}>
                <img src="../img/icon_frame.png" alt="" className={s.img} />
                <img src="../img/plus.png" alt="" className={s.plus} />
            </div>
        </div>
    )
}


export default Sidebar;