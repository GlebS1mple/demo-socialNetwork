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
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required, maxLengthThunk30], Input)}
            {createField("Password", "password", [required, maxLengthThunk30], Input, { type: "password" })}
            {createField(null, "rememberMe", [], Input, { type: "checkbox" })}

            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
            {error && <div className={s.error}>
                {error}
            </div>
            }

            <button>Log in</button>
        </form>

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
            <h1>Login</h1>
            <LoginFormForRedux onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { logins })(Login);