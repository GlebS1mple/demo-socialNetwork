import React from "react";
import s from "../Posts__heading/Posts__heading.module.css";
import Heading from "../Posts__heading/Heading/Heading";
import PostsContainer from './Posts/PostsContainer';
import Preloader from './../../common/Preloader/Preloader';



const Posts__heading = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.main}>
            <Heading profile={props.profile} />
            <PostsContainer store={props.store} />
        </div>)
}

export default Posts__heading;
