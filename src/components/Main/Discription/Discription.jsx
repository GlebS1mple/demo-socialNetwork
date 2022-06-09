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
    const src = "https://glebs1mple.github.io/demo-socialNetwork/img/";

    return (
        <div className={s.main}>
            <div className={s.imgblock}>
                <img src={src + "back.jpg"} alt="background" className={s.background} />
                {props.isOwner && <button className={s.editbtn} onClick={props.goToEditMode}><img src={src + "edit.png"} className={s.editimg} alt="" /></button>}
                {props.isOwner &&
                    <div className={s.change}>
                        <label htmlFor="file" className={s.uploadblock}><img src={src + "upload.png"} alt="" className={s.upload} /></label>
                        <input type="file" id="file" className={s.file} onChange={mainPhotoSelected} />
                    </div>}
                <div className={s.name}>{props.profile.fullName}</div>
            </div>
            <div className={/*props.profile.aboutMe || props.profile.lookingForAJob ? s.discriptionfree :*/ s.discription}>
                <img src={props.profile.photos.large ? props.profile.photos.large : src + "user.jpg"} alt="" className={s.photo} />
                <div className={s.info}>
                    <Status isOwner={props.isOwner} status={props.status} statusUpdate={props.updateStatus} />
                    {props.profile.lookingForAJob ? <div className={s.job}>Work: {props.profile.lookingForAJobDescription}</div> : ""}
                </div>
                <ul className={s.links}>
                    <li className={s.link}><a href={props.profile.contacts.facebook} ><img src={src + "facebook.png"} alt="" className={s.icon} /></a></li>
                    <li className={s.link}><a href={props.profile.contacts.vk} ><img src={src + "vk.png"} alt="" className={s.icon} /></a></li>
                    <li className={s.link}><a href={props.profile.contacts.twitter} ><img src={src + "twitter.png"} alt="" className={s.icon} /></a></li>
                    <li className={s.link}><a href={props.profile.contacts.instagram} ><img src={src + "instagram.png"} alt="" className={s.icon} /></a></li>
                    <li className={s.link}><a href={props.profile.contacts.youtube} ><img src={src + "youtube.png"} alt="" className={s.icon} /></a></li>
                    <li className={s.link}><a href={props.profile.contacts.github} ><img src={src + "github.png"} alt="" className={s.icon} /></a></li>
                </ul>
            </div>
        </div>
    )
}



export default Discription;