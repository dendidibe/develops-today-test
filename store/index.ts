import { createStore, applyMiddleware } from "redux";
import { initialState } from "./reducers/reducer";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/index";
import logger from "redux-logger";

let middlewares = [];
if (process.env.NODE_ENV === "development") {
    middlewares = [...middlewares, thunkMiddleware, logger];
} else {
    middlewares = [...middlewares, thunkMiddleware];
}

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
);

export default store;
