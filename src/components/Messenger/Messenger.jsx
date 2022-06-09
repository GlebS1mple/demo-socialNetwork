import React from "react";
import s from "./Messenger.module.css";
import Message from './Message/Message';
import Chat from './Chat/Chat';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { Textarea } from '../common/FormControls/FormControls';
import { required } from './../../utils/validators';


const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} className={s.textarea} name={"message"} placeholder={"Add"} validate={[required]}></Field>
            <button className={s.btn}>Add Message</button>
        </form>
    )
}
const MessageFormForRedux = reduxForm({
    form: "message"
})(MessageForm)
const Messenger = (props) => {
    let chats = props.chats.map((chat) => <Chat key={chat.id} name={chat.name} id={chat.id} srcimg={chat.srcimg} />)
    let messages = props.messages.map((message) => <Message key={message.id} message={message.message} />)
    let addMessage = (values) => {
        props.addMessage(values.message)
    }

    return (
        <div className={s.main}>
            <div className={s.mainchats}>
                <h1 className={s.heading}>Chats</h1>
                <div className={s.chats}>
                    {chats}
                </div>
            </div>
            <div className={s.mainmessages}>
                <div className={s.messagesflex}>
                    <div className={s.messages}>
                        {messages}
                    </div>
                    <div className={s.flex}>
                        <MessageFormForRedux onSubmit={addMessage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messenger;