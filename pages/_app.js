import { Provider } from "react-redux";
import React from 'react';
import store from "../store";
import '../styles/globals.css';
import { createWrapper } from "next-redux-wrapper";

function MyApp(props) {
    const { Component, pageProps } = props;
    return (
        <Provider store={store}>
            <Component {...pageProps}> </Component>
        </Provider>
    );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);