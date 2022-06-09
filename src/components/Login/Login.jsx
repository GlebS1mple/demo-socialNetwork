import React from "react";
import { reduxForm } from "redux-form";
import { Input } from "../common/FormControls/FormControls";
import { required, maxLengthThunk } from './../../utils/validators';
import { connect } from 'react-redux';
import { logins } from './../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import s from "../Login/Login.module.css";
import { createField } from './../common/FormControls/FormControls';

let maxLengthThunk30 = maxLengthThunk(30);

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <div className={s.formblock}>
            <div className={s.opening}>
                <h1 className={s.heading}>Sign Up</h1>
                <h2 className={s.subheading}>Get started absolutely free</h2>
            </div>
            <form onSubmit={handleSubmit} className={s.mainform}>
                {createField("Email", "email", [required, maxLengthThunk30], Input, "input input__login")}
                {createField("Password", "password", [required, maxLengthThunk30], Input, "input input__password", { type: "password" })}
                <div className={s.rememberblock}>
                    {createField(null, "rememberMe", [], Input, "input input__remember", { type: "checkbox" })} <div className={s.remember}>Remember me</div>
                </div>
                {captchaUrl && <img src={captchaUrl} />}
                {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
                {error && <div className={s.error}>
                    {error}
                </div>
                }

                <button className={s.btn}>Log in</button>
            </form>
        </div>
    )
}
const LoginFormForRedux = reduxForm({
    form: "login"
})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.logins(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Navigate to="/Main/22528" />
    }
    return (
        <div className="s">
            <LoginFormForRedux onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { logins })(Login);