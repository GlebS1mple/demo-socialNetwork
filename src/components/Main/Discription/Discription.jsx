import React from "react";
import s from "./Discription.module.css";
import Preloader from './../../common/Preloader/Preloader';
import Status from "./Status/Status";

//{props.profile.aboutMe ? <div className={s.status}>Статус: {props.profile.aboutMe}</div> : ""}

const Discription = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    return (
        <div className={s.main}>
            <div className={s.imgblock}>
                <img src="../img/back.jpg" alt="background" className={s.background} />
                {props.isOwner && <button className={s.editbtn} onClick={props.goToEditMode}>Edit</button>}
                {props.isOwner && <input type="file" className={s.change} onChange={mainPhotoSelected} />}
                <div className={s.name}>{props.profile.fullName}</div>
            </div>
            <div className={/*props.profile.aboutMe || props.profile.lookingForAJob ? s.discriptionfree :*/ s.discription}>
                <img src={props.profile.photos.large ? props.profile.photos.large : "../img/user.jpg"} alt="" className={s.photo} />
                <Status status={props.status} statusUpdate={props.updateStatus} />
                {props.profile.lookingForAJob ? <div className={s.job}>Work: {props.profile.lookingForAJobDescription}</div> : ""}
                <ul className={s.links}>
                    <li><a href={props.profile.contacts.facebook} className=""><img src="../img/facebook.png" alt="" className={s.icon} /></a></li>
                    <li><a href={props.profile.contacts.vk} className=""><img src="../img/vk.png" alt="" className={s.icon} /></a></li>
                    <li><a href={props.profile.contacts.twitter} className=""><img src="../img/twitter.png" alt="" className={s.icon} /></a></li>
                    <li><a href={props.profile.contacts.instagram} className=""><img src="../img/instagram.png" alt="" className={s.icon} /></a></li>
                    <li><a href={props.profile.contacts.youtube} className=""><img src="../img/youtube.png" alt="" className={s.icon} /></a></li>
                    <li><a href={props.profile.contacts.github} className=""><img src="../img/github.png" alt="" className={s.icon} /></a></li>
                </ul>
            </div>
        </div>
    )
}



export default Discription;