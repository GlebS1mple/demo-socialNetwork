import React from "react";
import s from "./Main.module.css";
import Contacts__info from "./Contacts__info/Contacts__info.jsx";
import Posts__heading from "./Posts__heading/Posts__heading";
import Stories from "./Stories/Stories";
import Discription from "./Discription/Discription";


const Main = React.memo((props) => {

    return (
        <div className={s.m}>
            <Discription profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <div className={s.main}>
                <Contacts__info profile={props.profile} contacts={props.contacts} />
                <Posts__heading profile={props.profile} store={props.store} />
                <Stories profile={props.profile} events={props.events} walls={props.walls} whos={props.whos} />
            </div>
        </div>
    )
})


export default Main;
