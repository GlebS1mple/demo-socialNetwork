import React from "react";
import s from "../Walls/Walls.module.css";
import Wall from './Wall/Wall';


const Walls = (props) => {
    let walls = props.walls.map((wall) => <Wall name={wall.name} id={wall.id} srcimg={wall.srcimg} />)
    return (
        <div className={s.main}>
            <h1 className={s.heading}>Stories</h1>
            <div className={s.flex}>
                {walls}
            </div>
        </div>)
}

export default Walls;