import React from 'react';
import s from "../FormControls/FormControls.module.css";
import { Field } from 'redux-form';



const FormControl = ({ input, meta, children }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div className={s.child}>
                {children}
            </div>

            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props} ><textarea {...input} {...restProps} /></FormControl>
}
export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props} ><input  {...input} {...restProps} /></FormControl>
}
export const createField = (placeholder, name, validate, component, className, props) => {
    return <Field component={component} name={name} placeholder={placeholder} validate={validate} className={className}  {...props}></Field>
}

export default Textarea;