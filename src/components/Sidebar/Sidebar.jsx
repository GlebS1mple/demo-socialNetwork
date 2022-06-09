import React from "react";
import s from "./Sidebar.module.css";


const Sidebar = () => {
    return (
        <div className={s.main}>
            <div className={s.iframe}>
                <img src="https://glebs1mple.github.io/demo-socialNetwork/img/icon_frame.png" alt="" className={s.img} />
            </div>
        </div>
    )
}


export default Sidebar;