"use client";

import Link from "next/link";
import styles from "./SignInLink.module.css";

const SignInLink = () => {
    return (
        <Link className={styles.signInLink} href="/charts">
            Charts
        </Link>
    );
};

export default SignInLink;
