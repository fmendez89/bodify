"use client";

import { AriaButtonProps, useButton } from "react-aria";
import React from "react";

import styles from "./Button.module.css";

export type ButtonProps = AriaButtonProps<"button">;

export default function Button(props: ButtonProps) {
    const ref = React.useRef(null);
    const { buttonProps } = useButton(props, ref);

    return (
        <button {...buttonProps} ref={ref} className={styles.button}>
            {props.children}
        </button>
    );
}
