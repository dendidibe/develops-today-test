import { Dispatch } from "react";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";

export const FETCH_SINGLE_POST_REQUEST = "FETCH_SINGLE_POSTS_REQUEST";
export const FETCH_SINGLE_POST_FAILURE = "FETCH_SINGLE_POSTS_FAILURE";
export const FETCH_SINGLE_POST_SUCCESS = "FETCH_SINGLE_POSTS_SUCCESS";

export const SEND_POST_REQUEST = "SEND_POST_REQUEST";
export const SEND_POST_FAILURE = "SEND_POST_FAILURE";
export const SEND_POST_SUCCESS = "SEND_POST_SUCCESS";


export interface Post {
    id: number;
    title: string;
    body: string;
}

export interface Data {
    data: { Post }
}


export interface PostState {
    loading: boolean;
    error: string;
    posts: Array<Post>;
    post: Post;
}

export type PostAction = {
    type: string,
    posts?: Post[],
    post?: Post,
    err?: string,
}

type ThunkResult<R> = ThunkAction<R, PostState, undefined, PostAction>;

export const addPosts = (posts: Post[]): PostAction => {
    const action: PostAction = {
        type: FETCH_POSTS_SUCCESS,
        posts
    };
    return action;
};

export const requestPosts = (): PostAction => {
    return {
        type: FETCH_POSTS_REQUEST,
    };
};

export const failurePosts = (err: string): PostAction => {
    return {
        type: FETCH_POSTS_FAILURE,
        err,
    };
};

export const addSinglePost = (post: Post): PostAction => {
    return {
        type: FETCH_SINGLE_POST_SUCCESS,
        post
    };
};

export const sendUserPost = (): PostAction => {
    const action: PostAction = {
        type: SEND_POST_SUCCESS,
    };
    return action;
};

export const failureUserPost = (err: string): PostAction => {
    const action: PostAction = {
        type: SEND_POST_SUCCESS,
        err
    };
    return action;
};

export const requestUserPost = (): Action => {

    return { type: SEND_POST_SUCCESS };
};


export const requestSinglePost = (): Action => {
    return {
        type: FETCH_SINGLE_POST_REQUEST,
    };
};

export const failureSinglePost = (err: string): PostAction => {
    return {
        type: FETCH_SINGLE_POST_FAILURE,
        err,
    };
};

export const getPosts = (posts: Post[]): ThunkResult<void> => async (dispatch: Dispatch<PostAction>) => {
    dispatch(requestPosts());
    try {
        dispatch(addPosts(posts));
    } catch (error) {
        dispatch(failureSinglePost(error));
    }
};

export const getSinglePost = (post: Post): ThunkResult<void> => async (dispatch: Dispatch<PostAction>) => {
    dispatch(requestSinglePost());
    try {
        dispatch(addSinglePost(post));
    } catch (error) {
        dispatch(failureSinglePost(error));
    }
};

export const sendPost = (): ThunkResult<void> => async (dispatch: Dispatch<PostAction>) => {
    try {
        dispatch(sendUserPost());
    } catch (error) {
        dispatch(failureSinglePost(error));
    }
};
