"use client";

import React from "react";
import Image from "next/image";
import { Grid, Row, Col } from "react-flexbox-grid";
import { useAnimation, motion, Variants, useInView, useScroll, useTransform } from "framer-motion";
import { Oooh_Baby } from "next/font/google";
import styles from "./UsSection.module.css";

const dancigScript = Oooh_Baby({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-dancing-script",
    display: "swap",
});

const textContainer: Variants = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.2,
        },
    },
    hidden: { opacity: 0 },
};

const textItem: Variants = {
    visible: {
        opacity: 1,
        translateY: 0,
        transition: {
            duration: 0.6,
        },
    },
    hidden: { opacity: 0, translateY: 100 },
};

const imageAnimation: Variants = {
    visible: { opacity: 1, translateX: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, translateX: -100 },
};

const UsSection = () => {
    const controls = useAnimation();
    const ref = React.useRef<HTMLDivElement>(null);
    const inView = useInView(ref, {
        margin: "0px 0px -300px 0px",
    });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div ref={ref} style={{ marginBottom: "40px" }}>
            <Grid fluid className={dancigScript.variable}>
                <Row>
                    <Col xs={12} sm={12} md={7} lg={7}>
                        <motion.div
                            className={styles.section}
                            animate={controls}
                            initial="hidden"
                            variants={textContainer}
                        >
                            <motion.h1 variants={textItem} className={styles.title}>
                                Acerca de nosotros
                            </motion.h1>
                            <motion.p variants={textItem} className={styles.content}>
                                En Carla te casa damos una nueva visión a la organización de las bodas. Observamos que
                                los costes de contratar una wedding planner eran muy altos y que, además, no podías
                                conocer nada del proceso sin realizar el primer pago. Con nuestra herramienta de
                                inteligencia artificial conseguimos enviar a los novios propuestas totalmente adaptadas
                                a sus ideas y necesidades de manera gratuita y rápida. A partir de ahí, y una vez que
                                están convencidos de que el plan puede ser tal y como lo habían imaginado, y dentro de
                                su presupuesto, comenzamos a realizar el trabajo para convertirlo en realidad.
                            </motion.p>
                        </motion.div>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5}>
                        <motion.div
                            style={{ y }}
                            className={styles.image}
                            animate={controls}
                            initial="hidden"
                            variants={imageAnimation}
                        >
                            <Image src="/images/landing/one.jpg" alt="Hero" fill />
                        </motion.div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default UsSection;
