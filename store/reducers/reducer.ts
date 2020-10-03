import * as actionTypes from "../actions/actionTypes";


export const initialState = {
    loading: false,
    error: null,
    posts: [],
    post: {},
};

const rootReducer = (state = initialState, action: actionTypes.PostAction) => {
    switch (action.type) {

        case actionTypes.FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
                posts: action.payload,
            };

        case actionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
            };
        case actionTypes.FETCH_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case actionTypes.FETCH_SINGLE_POST_REQUEST:
        case actionTypes.SEND_POST_REQUEST:
        case actionTypes.SEND_POST_SUCCESS:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_SINGLE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                post: action.payload,
            };
        case actionTypes.FETCH_SINGLE_POST_FAILURE:
        case actionTypes.SEND_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };


        default:
            return state;
    }
};
export default rootReducer;
