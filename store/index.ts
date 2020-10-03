import { createStore, applyMiddleware } from "redux";
import { initialState } from "./reducers/reducer";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/index";
import logger from "redux-logger";

const middlewares = [thunkMiddleware, logger];
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
);

export default store;
