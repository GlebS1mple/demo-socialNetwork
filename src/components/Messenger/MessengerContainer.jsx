import React from "react";
import { updateMesageActionCreator, addMesageActionCreator } from "../../redux/messenger-reducer";
import Messenger from './Messenger';
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../hoc/withAuth";
import { compose } from "redux";

/*
const MessengerContainer = (props) => {

    let state = props.store.getState().messenger;
    let addMessage = () => {
        props.store.dispatch(addMesageActionCreator())
    }

    let onMessageChange = (text) => {
        let action = updateMesageActionCreator(text);
        props.store.dispatch(action);
    }


    return (<Messenger addMessage={addMessage} messageUpdate={onMessageChange} messages={state.messages} chats={state.chats} />)
}
*/

let mapStateToProps = (state) => {
    return {
        chats: state.messenger.chats,
        messages: state.messenger.messages,
        newMessageText: state.messenger.newMessageText,
    }
};


let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMesageActionCreator(newMessageText));
        },
        /* messageUpdate: (body) => {
             dispatch(updateMesageActionCreator(body));
         },*/
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Messenger);

/*let AuthRedirectComponent = WithAuthRedirect(Messenger);


const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default MessengerContainer;*/