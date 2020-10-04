import { useDispatch } from "react-redux";
import React, { ReactElement, useEffect } from "react";
import { GetServerSideProps } from "next";

import { getEmbededPost } from "../../api/index";
import { getSinglePost } from "../../store/actions/actionTypes";
import { Layout } from "../../components/layout/layout";
import styles from "../../styles/Post.module.css";

export default function Post({
    singlePost,
}: {
    singlePost: {
        title: string;
        body: string;
        id: number;
        comments: [{ body: string; postId: number }];
    };
}): ReactElement {
    const dispatch = useDispatch();

    const displayComments = () => {
        if (!singlePost.comments.length) {
            return <h4>No comments yet...</h4>;
        }
        return singlePost.comments.map((comment) => (
            <li className={styles.cardCommentsItem} key={comment.postId}>
                {comment.body}
            </li>
        ));
    };

    useEffect(() => {
        if (singlePost) {
            dispatch(getSinglePost(singlePost));
        }
    }, [singlePost]);

    return (
        <Layout title={singlePost.title}>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h2 className={styles.cardTitle}>{singlePost.title}</h2>
                        <p className={styles.cardDescription}>
                            {singlePost.body}
                        </p>
                        <div className={styles.cardCommentsContent}>
                            <h4 className={styles.cardCommentsTitle}>
                                Comments
                            </h4>
                            <ul className={styles.cardComments}>
                                {displayComments()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await getEmbededPost(+context.query.postId);
    const singlePost = res.data;
    return {
        props: { singlePost },
    };
};
