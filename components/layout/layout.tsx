import Head from "next/head";
import { Header } from "./ header";
import { Footer } from "./footer";
import React, { ReactElement } from "react";

export const Layout = ({ children, title = "Blog App" }: {
    children: React.ReactNode,
    title?: string
}): ReactElement => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <main className="container">{children}</main>
            <Footer />
        </>
    );
};
