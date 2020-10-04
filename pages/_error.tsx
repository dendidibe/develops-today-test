import Link from "next/link";
import React, { ReactElement } from "react";
import { Layout } from "components/layout/layout";
import styles from "styles/Error.module.css";

function Error({ statusCode }: { statusCode: number }): ReactElement {
    return (
        <Layout>
            <h3>
                {statusCode === 404
                    ? `Page not found`
                    : "An error occurred on client"}
            </h3>
            <Link href="/">
                <a className={styles.errorLink}>Go back home</a>
            </Link>
        </Layout>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
