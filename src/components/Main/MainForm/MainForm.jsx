import React from "react";
import s from "../MainForm//MainForm.module.css";
import { createField, Input, Textarea } from './../../common/FormControls/FormControls';
import { required } from './../../../utils/validators';
import { reduxForm } from 'redux-form';

const MainForm = ({ handleSubmit, profile, error }) => {
    return (
        <div className={s.main}>
            <form onSubmit={handleSubmit} className={s.form}>
                <button className={s.save}>Save</button>
                {error && <div className={s.error}>
                    {error}
                </div>
                }
                <div className={s.name}>
                    <div className={s.heading}> Full name:</div>
                    {createField("Full name", "fullName", [required], Input)}
                </div>
                <div className={s.job}>
                    <div className={s.heading}> Looking for a job? </div>
                    {createField("What about your profession?", "lookingForAJob", [], Input, { type: "checkbox" })}
                </div>
                <div className={s.skills}>
                    <div className={s.heading}> My professional skills:</div>
                    {createField("My proffessional skills", "lookingForAJobDescription", [required], Textarea)}
                </div>
                <div className={s.about}>
                    <div className={s.heading}>  About me :</div>
                    {createField("About me", "aboutMe", [], Textarea)}
                </div>
                <div className={s.contacs}>
                    <div className={s.heading}> Contacts :</div>
                    {Object.keys(profile.contacts).map(key => {
                        return <div className={s.contact} key={key}>
                            <div className={s.heading}>{key}:</div>
                            {createField(key, "contacts." + key, [], Input)}
                        </div>
                    })}
                </div>
            </form>
        </div>
    )
}

const MainFormForRedux = reduxForm({
    form: "main-edit"
})(MainForm)

export default MainFormForRedux;