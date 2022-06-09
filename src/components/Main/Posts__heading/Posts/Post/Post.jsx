import React from "react";
import s from "../Post/Post.module.css";

const Post = (props) => {
    let src = "https://glebs1mple.github.io/demo-socialNetwork/img/Post" + props.srcimg;
    return (
        <div className={s.main}>
            <div className={s.block}>
                <img src={src} alt="" className={s.photo} />
                <div className={s.smallflex}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.lastseen}>{props.lastseen}</div>
                </div>
            </div>
            <div className={s.message}>
                {props.message}
            </div>
            <div className={s.statblock}>
                <div className={s.stat}>
                    <img src="https://glebs1mple.github.io/demo-socialNetwork/img/like.png" alt="" className={s.icon} />
                    <div className={s.nums}>
                        {props.likes}
                    </div>
                </div>
                <div className={s.stat}>
                    <img src="https://glebs1mple.github.io/demo-socialNetwork/img/Comments.png" alt="" className={s.icon} />
                    <div className={s.nums}>
                        {props.comments}
                    </div>
                </div>
                <div className={s.stat}>
                    <img src="https://glebs1mple.github.io/demo-socialNetwork/img/share.png" alt="" className={s.icon} />
                    <div className={s.nums}>
                        {props.shares}
                    </div>
                </div>
            </div>
        </div >)
}

export default Post;