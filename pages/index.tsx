import React, { ReactElement, useEffect } from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";

import { Layout } from "../components/layout/layout";
import { getPosts, Post } from "../store/actions/actionTypes";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import styles from "../styles/Post.module.css";
import { getAllPosts } from "../api";

const Home = ({
    posts,
}: {
    posts: {
        id: number;
        title: string;
        body: string;
    }[];
}): ReactElement => {
    const loading: readonly Post[] = useSelector(
        (state: RootStateOrAny) => state.loading
    );
    const dispatch = useDispatch();

    const textSlicer = (text: string, limit: number): string => {
        const res = text;
        if (res.length > limit) {
            let slicedString = res.slice(0, limit);
            slicedString += " ...";
            return slicedString;
        }
        return res;
    };
    const displayPosts = () => {
        if (loading || !posts.length) {
            return (
                <h1 className={styles.noPost}>Haven&apos;t got posts yet...</h1>
            );
        }
        return posts.map((post) => (
            <div className={styles.card} key={post.id}>
                <div className={styles.cardContent}>
                    <Link href={`/posts/[postId]`} as={`/posts/${post.id}`}>
                        <a className={styles.cardTitle}>{post.title}</a>
                    </Link>
                    <p className={styles.cardDescription}>
                        {textSlicer(post.body, 500)}
                    </p>
                </div>
            </div>
        ));
    };

    useEffect(() => {
        if (posts) {
            dispatch(getPosts(posts));
        }
    }, [posts]);

    return (
        <Layout>
            <div className={styles.home}>
                <h1>Posts</h1>
                <div className={styles.container}>{displayPosts()}</div>
            </div>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await getAllPosts();
    const posts = res.data;
    return {
        props: { posts },
    };
};

export default Home;
