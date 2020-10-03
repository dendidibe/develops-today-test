import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "../../components/layout/layout";
import { sendPost } from "../../store/actions/actionTypes";
import styles from "../../styles/newPost.module.css";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title && body) {
            dispatch(sendPost(title, body));
        }

        setTitle("");
        setBody("");
    };
    return (
        <Layout title={"Add new post"}>
            <div className={styles.textCenter}>
                <h2>Add Your Post</h2>
            </div>

            <form onSubmit={handleSubmit} className={styles.newPostForm}>
                <div>
                    <label htmlFor="fname">Post Title</label>
                    <input
                        type="text"
                        className={styles.newPost}
                        name="fname"
                        value={title}
                        onChange={({ target }) => setTitle(target.value)}
                    />
                    <label htmlFor="lname">Content</label>
                    <input
                        type="text"
                        className={styles.newPost}
                        name="lname"
                        value={body}
                        onChange={({ target }) => setBody(target.value)}
                    />
                </div>
                <button type="submit" className={styles.btn}>
                    Send Post
                </button>
            </form>

        </Layout>
    );
};
export default CreatePost;
