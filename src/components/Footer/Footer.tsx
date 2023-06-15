import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.footerNav}>
                <div className={styles.footerNavLeft}>Carla te casa </div>
                {/* <div className={styles.footerNavRight}>right</div> */}
            </nav>
        </footer>
    );
}
