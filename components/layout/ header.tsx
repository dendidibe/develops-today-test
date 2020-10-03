import Link from "next/link";
import React, { ReactElement } from "react";
import styles from "../../styles/Header.module.css";

export const Header = (): ReactElement => {
    return (
        <div className={styles.navbar}>
            <div>
                <Link href={"/posts/new"}>
                    <a className={styles.navLink}>Create post</a>
                </Link>
                <Link href={"/"}>
                    <a className={styles.navLink}>Home</a>
                </Link>
            </div>
        </div>
    );
};
