import React from "react";
import s from "../Posts/Posts.module.css";
import Post from './Post/Post';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { required, maxLengthThunk } from './../../../../utils/validators';
import { Textarea } from '../../../common/FormControls/FormControls';

let maxLengthThunk10 = maxLengthThunk(10);

const PostsForm = (props) => {
    return (
        <form className={s.main} onSubmit={props.handleSubmit}>
            <Field component={Textarea} className={s.area} name={"post"} placeholder={"Add post"} validate={[required, maxLengthThunk10]} ></Field>
            <button className={s.btn}>Add post</button>
        </form>
    )
}

const PostsFormForRedux = reduxForm({
    form: "posts"
})(PostsForm)
const Posts = (props) => {
    let posts = props.posts.map((post) => <Post id={post.id} name={post.name} message={post.message} lastseen={post.lastseen} likes={post.likes} comments={post.likes} shares={post.shares} srcimg={post.srcimg} />)
    let addPost = (values) => {
        props.addPost(values.post);
    }
    /*const onSubmit = (formData) => {

    }*/
    return (
        <div className={s.main}>
            {posts}
            <PostsFormForRedux onSubmit={addPost} />
        </div>
    )
}

/*const Posts = (props) => {
    let newPost = React.createRef();
    let posts = props.posts.map((post) => <Post id={post.id} name={post.name} message={post.message} lastseen={post.lastseen} likes={post.likes} comments={post.likes} shares={post.shares} srcimg={post.srcimg} />)

    let onChangePost = () => {
        let body = newPost.current.value;
        props.onChangePost(body);
    }

    

    return (
        <div className={s.main}>
            {posts}
            <textarea onChange={onChangePost} className={s.area} ref={newPost} value={props.newPostText}></textarea>
            <button onClick={addPost} className={s.btn}>Add post</button>
        </div>)
}
*/
export default Posts;