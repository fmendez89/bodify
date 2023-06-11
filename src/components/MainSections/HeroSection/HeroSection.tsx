"use client"

import React from "react";
import Button from "@/components/Button/Button";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import { useAnimation, motion, Variants, useInView, useScroll, useTransform } from "framer-motion";
import { Oooh_Baby } from "next/font/google";

const dancigScript = Oooh_Baby({ subsets: ["latin"], weight: ["400"], variable: "--font-dancing-script", display: "swap" });

const textContainer: Variants = {
    visible: {
        opacity: 1, transition: {
            duration: 0.6,
            staggerChildren: 0.2
        }
    },
    hidden: { opacity: 0 }
};

const textItem: Variants = {
    visible: {
        opacity: 1, translateY: 0, transition: {
            duration: 0.6,
        }
    },
    hidden: { opacity: 0, translateY: 100 }
};

const imageAnimation: Variants = {
    visible: { opacity: 1, translateX: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, translateX: 100 }
};

const HeroSection = () => {
    const controls = useAnimation();
    const ref = React.useRef<HTMLDivElement>(null)
    const inView = useInView(ref)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div ref={ref}>
            <Grid fluid className={dancigScript.variable}>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} >
                        <motion.div
                            className={styles.section}
                            animate={controls}
                            initial="hidden"
                            variants={textContainer}>
                            <motion.h1 variants={textItem} className={styles.title}>El sueño de tu boda hecho realidad</motion.h1>
                            <motion.p variants={textItem} className={styles.content}>Somos expertos en hacer de tu boda un recuerdo que atesorarás por siempre. Organizamos cada detalle para que disfrutes de cada momento junto a tus seres queridos.</motion.p>
                            <motion.div variants={textItem} className={styles.button}>
                                <Button>Crea tu plan</Button>
                            </motion.div>
                        </motion.div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <motion.div
                            style={{ y }}
                            className={styles.image}
                            animate={controls}
                            initial="hidden"
                            variants={imageAnimation}>
                            <Image src="/images/hero.jpg" alt="Hero" fill />
                        </motion.div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default HeroSection;
