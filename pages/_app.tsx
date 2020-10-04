import { Provider } from "react-redux";
import React from "react";
import store from "../store";
import { AppProps } from "next/app";
import { createWrapper } from "next-redux-wrapper";
import NextNprogress from "nextjs-progressbar";
import "../styles/globals.css";

function MyApp(props: AppProps) {
    const { Component, pageProps } = props;
    return (
        <>
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
