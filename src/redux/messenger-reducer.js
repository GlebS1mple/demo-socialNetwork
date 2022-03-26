const ADD_MESSAGE = "messenger/ADD-MESSAGE";
//const UPDATE_MESSAGE = "UPDATE-MESSAGE";

let initialState = {

    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Bye" },
        { id: 3, message: "First" },
        { id: 4, message: "Second" },
    ],
    chats: [
        { id: 1, name: "Gleb", srcimg: "1.png" },
        { id: 2, name: "Ivan", srcimg: "2.png" },
        { id: 3, name: "Julia", srcimg: "3.png" },
        { id: 4, name: "Lena", srcimg: "4.png" },
    ],

}
const messengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {
                    id: 5,
                    message: action.newMessageText,
                }]
            }/*
            let stateCopy = { ...state };
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = "";
            return stateCopy;
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;*/
        }
        /*case UPDATE_MESSAGE: {
            return {
                ...state,
                newMessageText: action.newText,
            }
            /*
            let stateCopy = { ...state };
            stateCopy.newMessageText = action.newText;
            return stateCopy;
            /*state.newMessageText = action.newText;
            return state;
        }
        */
        default:
            return state;
    }
}

export const addMesageActionCreator = (newMessageText) => {
    return {
        type: ADD_MESSAGE,
        newMessageText
    }
};
/*export const updateMesageActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE,
        newText: text,
    }
};*/

export default messengerReducer;