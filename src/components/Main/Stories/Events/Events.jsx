import React from "react";
import s from "../Events/Events.module.css";
import Event from './Event/Event';


const Events = (props) => {
    let events = props.events.map((event) => <Event key={event.id} name={event.name} text={event.text} btn={event.btn} friends={event.friends} what={event.what} srcimg={event.srcimg} />)
    return (
        <div className={s.main}>
            <h1 className={s.heading}>Events</h1>
            <div className={s.flex}>
                {events}
            </div>
        </div>)
}

export default Events;