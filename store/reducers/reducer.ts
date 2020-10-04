import * as actionTypes from "../actions/actionTypes";

export const initialState: actionTypes.PostState = {
    loading: false,
    error: null,
    posts: [],
    post: {
        id: null,
        body: '',
        title: '',
    },
};

const rootReducer = (state = initialState, action: actionTypes.PostAction): actionTypes.PostState => {
    switch (action.type) {

    case actionTypes.FETCH_POSTS_SUCCESS:
        return {
            ...state,
            loading: false,
            posts: action.posts,
        };

    case actionTypes.FETCH_SINGLE_POST_REQUEST:
    case actionTypes.SEND_POST_REQUEST:
    case actionTypes.SEND_POST_SUCCESS:
    case actionTypes.FETCH_POSTS_REQUEST:
        return {
            ...state,
            loading: true,
        };

    case actionTypes.FETCH_SINGLE_POST_SUCCESS:
        return {
            ...state,
            loading: false,
            post: action.post,
        };

    case actionTypes.FETCH_SINGLE_POST_FAILURE:
    case actionTypes.SEND_POST_FAILURE:
    case actionTypes.FETCH_POSTS_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.err
        };


    default:
        return state;
    }
};
export default rootReducer;
