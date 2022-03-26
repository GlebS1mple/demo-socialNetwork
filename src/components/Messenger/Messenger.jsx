import React from "react";
import s from "./Messenger.module.css";
import Message from './Message/Message';
import Chat from './Chat/Chat';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { Textarea } from '../common/FormControls/FormControls';
import { maxLengthThunk } from "../../utils/validators";
import { required } from './../../utils/validators';

let maxLengthThunk10 = maxLengthThunk(10);

const MessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} className={s.textarea} name={"message"} placeholder={"Add"} validate={[required, maxLengthThunk10]}></Field>
            <button className={s.btn}>Add Message</button>
        </form>
    )
}
const MessageFormForRedux = reduxForm({
    form: "message"
})(MessageForm)
const Messenger = (props) => {
    let chats = props.chats.map((chat) => <Chat name={chat.name} id={chat.id} srcimg={chat.srcimg} />)
    let messages = props.messages.map((message) => <Message message={message.message} />)
    /*const onSubmit = (formData) => {
        let body = formData.message;
    }*/
    /*let onMessageChange = () => {
        //let body = newMessage.current.value;
        //props.updateMesageActionCreator(text);
        //props.dispatch(action);
        props.messageUpdate(body);
    }*/
    let addMessage = (values) => {
        //let text = newMessage.current.value;
        //props.dispatch(addMesageActionCreator());
        props.addMessage(values.message)
        //props.messageUpdate("");
    }

    return (
        <div className={s.main}>
            <div className={s.chats}>
                {chats}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
            <div className={s.flex}>
            </div>
            <MessageFormForRedux onSubmit={addMessage} />
        </div>
    )
}

export default Messenger;