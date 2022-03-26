import React from "react";
import { updatePostActionCreator, addPostActionCreator } from "../../../../redux/main-reducer";
import Posts from './Posts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        posts: state.main.posts,
        //newPostText: state.main.newPostText,
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        },
        /*onChangePost: (body) => {
            dispatch(updatePostActionCreator(body));
        },*/
    }
}


const PostsContainer = connect(mapStateToProps, mapStateToDispatch)(Posts);

export default PostsContainer;