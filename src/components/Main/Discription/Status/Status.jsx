import React, { useEffect, useState } from "react";
import s from "./Status.module.css";

const Status = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status);
    }, [props.status])
    /* state = {
         editMode: false,
         status: this.props.status
     }*/
    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.statusUpdate(status);
    };
    const statusUpdate = (e) => {
        setStatus(e.currentTarget.value)
    };
    /*componentDidUpdate(prevProps, prevState) {
        if (prevProps.status != this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }*/
    return (
        <div className={s.statusblock}>
            <span onClick={activateEditMode} className={s.status}>Статус: {props.status} </span>
            {editMode ? <input onChange={statusUpdate} onBlur={deactivateEditMode} type="text" className={s.statusinput} value={status} /> : ""}
        </div>
    )
}

export default Status;