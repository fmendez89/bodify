"use client";

import React from "react";
import Image from "next/image";
import { Grid, Row, Col } from "react-flexbox-grid";
import { useAnimation, motion, Variants, useInView, useScroll, useTransform } from "framer-motion";
import { Oooh_Baby } from "next/font/google";
import styles from "./TestimonialsSection.module.css";

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
    hidden: { opacity: 0, translateX: 100 },
};

const TestimonialsSection = () => {
    const controls = useAnimation();
    const ref = React.useRef<HTMLDivElement>(null);
    const inView = useInView(ref);

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
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <motion.div
                            className={styles.section}
                            animate={controls}
                            initial="hidden"
                            variants={textContainer}
                        >
                            <motion.p variants={textItem} className={styles.content}>
                                Gracias a Carla y a su equipo disfrutamos como nunca, sin duda superaron nuestras
                                expectativas.
                            </motion.p>
                            <motion.p variants={textItem} className={styles.content}>
                                Con ellas puedes tener la tranquilidad de saber que todo saldrá bien, su equipo te da
                                respuesta a todo de manera inmediata.
                            </motion.p>
                            <motion.p variants={textItem} className={styles.content}>
                                Con la tecnología controlan TODO en tiempo real, es alucinante lo que nos ayudó y lo
                                acertado de sus propuestas
                            </motion.p>
                            <motion.p variants={textItem} className={styles.content}>
                                Es increíble que finalmente celebrásemos todo tal y como nos propusieron a los 5 minutos
                                de compartirle nuestros gustos e ideas.
                            </motion.p>
                        </motion.div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <motion.div
                            style={{ y }}
                            className={styles.image}
                            animate={controls}
                            initial="hidden"
                            variants={imageAnimation}
                        >
                            <Image src="/images/landing/two.jpg" alt="Hero" fill />
                        </motion.div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default TestimonialsSection;
