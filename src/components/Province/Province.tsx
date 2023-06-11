"use client";

import Image from "next/image";
import styles from "./Province.module.css";
import { CheckboxProvince } from "../CheckboxGroup/CheckboxGroup";

const Province = ({ name, normalized }: { name: string; normalized: string }) => (
    <CheckboxProvince value={name}>
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src={`/images/cities/${normalized}.jpg`} alt={normalized} width={100} height={50} />
            </div>
            <div className={styles.name}>{name}</div>
        </div>
    </CheckboxProvince>
);

export default Province;
