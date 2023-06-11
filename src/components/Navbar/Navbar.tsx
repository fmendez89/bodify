import Link from "next/link";
import styles from "./Navbar.module.css";
import { Berkshire_Swash } from "next/font/google";
import { classnames } from "@/utils/classnames";7

const font = Berkshire_Swash({ subsets: ["latin"], weight: ["400"], variable: "--font-dancing-script", display: "swap" });

const Navbar = () => (
    <div className={styles.navbar}>
        <header className={styles.navbarHeader}>
            <div className={styles.navbarInner}>
                <div className={classnames(styles.logoWrap, font.variable)}>
                    <Link href="/" className={styles.logo}>
                        Carla Te Casa
                    </Link>
                </div>
                <div className={styles.desktopActions}>
                    <nav className={styles.desktopActionsNav}>
                        <div className={styles.actionsLeft}>
                            {/* <Link className={styles.tagLink} href="/pricing">
                                <div>Pricing</div>
                            </Link> */}
                            <span></span>
                        </div>
                        <div className={styles.actionsRight}>
                            <Link className={styles.tagLink} href="#planes">
                                <div>Planes</div>
                            </Link>
                            <Link className={styles.tagLink} href="#bodas">
                                <div>Bodas</div>
                            </Link>
                            <Link className={styles.tagLink} href="#nosotros">
                                <div>Nosotros</div>
                            </Link>
                            <Link className={styles.tagLink} href="/blog">
                                <div>Blog</div>
                            </Link>
                            <Link className={styles.cta} href="/crea-tu-plan">
                                <div>Crea tu plan</div>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    </div>
);

export default Navbar;
