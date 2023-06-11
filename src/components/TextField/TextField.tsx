"use client";

import React from "react";
import { AriaTextFieldOptions, useTextField } from "react-aria";

import styles from "./TextField.module.css";

export type TextFieldProps = AriaTextFieldOptions<"input">;

function TextField({ label, description, errorMessage, ...props }: TextFieldProps) {
    const ref = React.useRef<HTMLInputElement>(null);
    const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(props, ref);

    return (
        <div className={styles.container}>
            <label className={styles.label} {...labelProps} htmlFor={inputProps.id}>
                {label}
            </label>
            <input className={styles.input} {...inputProps} ref={ref} />
            {description && (
                <div className={styles.description} {...descriptionProps}>
                    {description}
                </div>
            )}
            {errorMessage && (
                <div className={styles.error} {...errorMessageProps}>
                    {errorMessage}
                </div>
            )}
        </div>
    );
}

export default TextField;
