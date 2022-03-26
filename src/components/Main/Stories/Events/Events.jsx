import React from "react";
import s from "../Events/Events.module.css";
import Event from './Event/Event';


const Events = (props) => {
    let events = props.events.map((event) => <Event name={event.name} text={event.text} btn={event.btn} friends={event.friends} what={event.what} srcimg={event.srcimg} />)
    return (
        <div className={s.main}>
            {events}
        </div>)
}

export default Events;