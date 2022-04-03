import React from "react";
import s from "../MainForm//MainForm.module.css";
import { createField, Input, Textarea } from './../../common/FormControls/FormControls';
import { required } from './../../../utils/validators';
import { reduxForm } from 'redux-form';

const MainForm = ({ handleSubmit, profile, error }) => {
    return (
        <div className="">
            <form onSubmit={handleSubmit}>
                <button className={s.save}>Save</button>
                {error && <div className={s.error}>
                    {error}
                </div>
                }
                <div className={s.name}>
                    full name: {createField("Full name", "fullName", [required], Input)}
                </div>
                <div className={s.job}>
                    Looking for a job? {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
                </div>
                <div className={s.skills}>
                    My proffessional skills: {createField(" My proffessional skills", "lookingForAJobDescription", [required], Textarea)}
                </div>
                <div className={s.about}>
                    About me : {createField("About me", "aboutMe", [], Textarea)}
                </div>
                <div className={s.contacs}>
                    Contacts : {Object.keys(profile.contacts).map(key => {
                        return <div className={s.contact}>
                            {key}:{createField(key, "contacts." + key, [], Input)}
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