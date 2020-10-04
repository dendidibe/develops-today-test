import { useDispatch } from "react-redux";
import React, { ReactElement, useEffect } from "react";

import { getEmbededPost } from "../../api/index";
import { getSinglePost } from "../../store/actions/actionTypes";
import { Layout } from "../../components/layout/layout";

import styles from "../../styles/Post.module.css";
import { GetServerSideProps } from "next";

export default function Post({ singlePost }: {
    singlePost: {
        title: string
        body: string
        id: number
    }
}): ReactElement {
    const dispatch = useDispatch();

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
                        <p className={styles.cardDescription}>{singlePost.body}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async context => {
    const res = await getEmbededPost(+context.query.postId);
    const singlePost = res.data;
    return {
        props: { singlePost },
    };
};
