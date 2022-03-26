import { React } from 'react';
import { NavLink } from "react-router-dom";
import s from "../User/User.module.css"

const User = ({ user, followingInProgress, follow, unfollow }) => {
    return (
        <div className={s.user} >
            <div className={s.actions}>
                <NavLink to={"/Main/" + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : "../img/Follower1.png"} alt="" className={s.userphoto} />
                </NavLink>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} className={s.follow} onClick={() => {
                        unfollow(user.id);
                    }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} className={s.follow}
                        onClick={() => {
                            follow(user.id);
                        }}>Follow</button>
                }
            </div>
            <div className={s.about}>
                <div className={s.firstblock}>
                    <div className={s.name}>{user.name}</div>
                    <div className={s.status}>{user.status}</div>
                </div>
                <div className={s.secondblock}>
                    <div className={s.country}>{"user.location.country"}</div>
                    <div className={s.city}>{"user.location.city"}</div>
                </div>
            </div>
        </div>

    )
}

export default User;
