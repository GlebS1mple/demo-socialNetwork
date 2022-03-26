import React from "react";
import s from "../Stories/Stories.module.css";
import Events from "../Stories/Events/Events"
import Walls from "../Stories/Walls/Walls"
import Who from "../Stories/Who/Who"
import Footer from "../Stories/Footer/Footer"

const Stories = (props) => {
    return (
        <div className={s.main}>
            <Walls walls={props.walls} />
            <Events events={props.events} />
            <Who whos={props.whos} />
            <Footer />
        </div>)
}

export default Stories;
