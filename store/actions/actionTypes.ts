import { postData } from "../../api/index";

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
    data: {
        id: number;
        title: string;
        body: string;
    }
}

export interface PostState {
    posts: Post[];
}
export type PostAction = {
    type: string,
    payload?: Post[] | Post
}

export const addPosts = (posts: Post[]): PostAction => {
    const action: PostAction = {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    };
    return action;
};

export const requestPosts = (): PostAction => {
    return {
        type: FETCH_POSTS_REQUEST,
    };
};

export const failurePosts = (err: any): PostAction => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: err,
    };
};

export const addSinglePost = (post: Post): PostAction => {
    return {
        type: FETCH_SINGLE_POST_SUCCESS,
        payload: post
    };
};

export const sendUserPost = (post: Post) => {
    const action: PostAction = {
        type: SEND_POST_SUCCESS,
        payload: post
    };
    return action;
};
export const failureUserPost = (err: any) => {
    const action: PostAction = {
        type: SEND_POST_SUCCESS,
        payload: err
    };
    return action;
};
export const requestUserPost = (): PostAction => {

    return { type: SEND_POST_SUCCESS };
};


export const requestSinglePost = (): PostAction => {
    return {
        type: FETCH_SINGLE_POST_REQUEST,
    };
};

export const failureSinglePost = (err: any): PostAction => {
    return {
        type: FETCH_SINGLE_POST_FAILURE,
        payload: err,
    };
};

export const getPosts = (posts) => async (dispatch) => {
    dispatch(requestPosts());
    try {
        dispatch(addPosts(posts));
    } catch (error) {
        dispatch(failureSinglePost(error));
    }
};

export const getSinglePost = (post) => async (dispatch) => {
    dispatch(requestSinglePost());
    try {
        dispatch(addSinglePost(post));
    } catch (error) {
        dispatch(failureSinglePost(error));
    }
};

export const sendPost = (title: string, body: string) => async (dispatch) => {
    try {
        dispatch(postData(title, body));
    } catch (error) {
        dispatch(failureSinglePost(error));
    }
};
