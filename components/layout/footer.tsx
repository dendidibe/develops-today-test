import styles from "../../styles/Footer.module.css";
import React, { ReactElement } from 'react';

export const Footer = (): ReactElement => {
    return (
        <footer className={styles.footer}>
            <div>
                <a
                    href="https://github.com/dendive/develops-today-test"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://github.com/dendive/develops-today-test
                </a>

            </div>
        </footer>
    );
};
