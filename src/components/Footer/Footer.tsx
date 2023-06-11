import { Berkshire_Swash } from "next/font/google";

import styles from "./Footer.module.css";

const font = Berkshire_Swash({ subsets: ["latin"], weight: ["400"], variable: "--font-dancing-script", display: "swap" });

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.footerNav}>
                <div className={styles.footerNavLeft}>left</div>
                <div className={styles.footerNavRight}>right</div>
            </nav>
        </footer>
    );
}
