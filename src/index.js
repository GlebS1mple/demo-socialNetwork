import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import MainApp from './App';




//let rerenderEntireTree = () => {}



ReactDOM.render(
    <MainApp />,
    document.getElementById('root')
);

//rerenderEntireTree(store.getState());

/*store.subscribe(() => {
    rerenderEntireTree();
});
*/