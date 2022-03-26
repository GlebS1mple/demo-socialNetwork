import React from "react";
import s from "../Who/Who.module.css";
import Follower from './Follower/Follower';

const Who = (props) => {
    let whos = props.whos.map((who) => <Follower id={who.id} name={who.name} srcimg={who.srcimg} />)
    return (
        <div className={s.main}>
            <h1 className={s.heading}>Who to Follow</h1>
            {whos}
        </div>)
}

export default Who;