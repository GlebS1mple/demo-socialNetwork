import React, { useState } from "react";
import s from "./Main.module.css";
import Contacts__info from "./Contacts__info/Contacts__info.jsx";
import Posts__heading from "./Posts__heading/Posts__heading";
import Stories from "./Stories/Stories";
import Discription from "./Discription/Discription";
import MainFormForRedux from "./MainForm/MainForm";




const Main = React.memo((props) => {
    let [editMode, setEditMode] = useState(false);
    const onSubmit = (formData) => {
        props.saveMain(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }
    return (
        <div className={s.m}>


            <Discription goToEditMode={() => { setEditMode(true) }} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} savePhoto={props.savePhoto} updateStatus={props.updateStatus} />
            {editMode ?
                <MainFormForRedux initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} /> : ""}
            <div className={s.main}>
                <Contacts__info profile={props.profile} contacts={props.contacts} />
                <Posts__heading profile={props.profile} store={props.store} />
                <Stories profile={props.profile} events={props.events} walls={props.walls} whos={props.whos} />
            </div>
        </div>
    )
})


export default Main;
