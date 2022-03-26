import React from "react";
import ReactDOM from "react-dom";
import messengerReducer, { addMesageActionCreator } from './messenger-reducer';
let state = {
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Bye" },
        { id: 3, message: "First" },
        { id: 4, message: "Second" },
    ]
};

it("length of messages has to be incremented", () => {
    let action = addMesageActionCreator("hello");
    let newState = messengerReducer(state, action);
    expect(newState.messages.length).toBe(5);
    expect(newState.messages[4].message).toBe("hello");
})

it("message of new message has to be correct", () => {
    let action = addMesageActionCreator("hello");
    let newState = messengerReducer(state, action);
    expect(newState.messages[4].message).toBe("hello");
})


