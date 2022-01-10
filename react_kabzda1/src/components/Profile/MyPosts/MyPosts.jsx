import Post from "./Posts/Post";
import cl from "./MyPosts.module.css"
import React from "react";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post massage={p.massage} lice={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={cl.postBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea
                            onChange={onPostChange}
                            ref={newPostElement}
                            value={props.newPostText}
                        />
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                </div>
            </div>
            <div className={cl.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;