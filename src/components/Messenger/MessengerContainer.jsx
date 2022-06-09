import React from "react";
import { addMesageActionCreator } from "../../redux/messenger-reducer";
import Messenger from './Messenger';
import { connect } from "react-redux";
import { compose } from "redux";
//import { WithAuthRedirect } from "../../hoc/withAuth";
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
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),

)(Messenger);

//WithAuthRedirect