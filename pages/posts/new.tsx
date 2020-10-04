import React, { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllPosts, postComment, postData } from "../../api";
import { Layout } from "../../components/layout/layout";
import { sendPost } from "../../store/actions/actionTypes";
import styles from "../../styles/newPost.module.css";

const CreatePost = (): ReactElement => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [comment, setComment] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title && body && comment) {
            getAllPosts().then((res) => {
                postData(title, body);
                postComment(res.data[res.data.length - 1].id + 1, comment);
                dispatch(sendPost());
            });
        }

        setTitle("");
        setBody("");
        setComment("");
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
                    <label htmlFor="lcomment">Your Comment</label>
                    <input
                        type="text"
                        className={styles.newPost}
                        name="lcomment"
                        value={comment}
                        onChange={({ target }) => setComment(target.value)}
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
