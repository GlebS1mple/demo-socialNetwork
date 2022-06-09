import { React } from 'react';
import { NavLink } from "react-router-dom";
import s from "../User/User.module.css"

const User = ({ user, followingInProgress, follow, unfollow }) => {
    return (
        <div className={s.user} >
            <div className={s.actions}>
                <NavLink to={"/Main/" + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : "https://glebs1mple.github.io/demo-socialNetwork/img/user.png"} alt="" className={s.userphoto} />
                </NavLink>
                {user.followed
                    ? <div className={s.followblock}><button disabled={followingInProgress.some(id => id === user.id)} className={s.unfollow} onClick={() => {
                        unfollow(user.id);
                    }}>Unfollow</button></div>
                    : <div className={s.followblock}> <button disabled={followingInProgress.some(id => id === user.id)} className={s.follow}
                        onClick={() => {
                            follow(user.id);
                        }}>Follow</button></div>
                }
            </div>
            <div className={s.about}>
                <div className={s.firstblock}>
                    <div className={s.name}>{user.name}</div>
                    <div className={s.status}>{user.status}</div>
                </div>
                <div className={s.secondblock}>
                    <div className={s.country}>{"Country"}</div>
                    <div className={s.city}>{"City"}</div>
                </div>
            </div>
        </div>

    )
}

export default User;
