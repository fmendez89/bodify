"use client";

import React from "react";
import { RadioGroupState, useRadioGroupState } from "react-stately";
import { AriaRadioGroupProps, AriaRadioProps, useRadio, useRadioGroup } from "react-aria";
import { classnames } from "@/utils/classnames";

import styles from "./RadioGroup.module.css";

const RadioContext = React.createContext<RadioGroupState>(null as unknown as RadioGroupState);

interface RadioGroupProps extends AriaRadioGroupProps {
    children?: React.ReactNode;
}

export function RadioGroup(props: RadioGroupProps) {
    const { children, label, description, errorMessage, validationState } = props;
    const state = useRadioGroupState(props);
    const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } = useRadioGroup(props, state);

    return (
        <div {...radioGroupProps} className={styles.radioGroupContainer}>
            <div {...labelProps} className={styles.radioGroupLabel}>
                {label}
            </div>
            <div className={styles.radioInputsContainer}>
                <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
            </div>
            {description && (
                <div {...descriptionProps} style={{ fontSize: 12 }}>
                    {description}
                </div>
            )}
            {errorMessage && validationState === "invalid" && (
                <div {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
                    {errorMessage}
                </div>
            )}
        </div>
    );
}

export function Radio({ children, ...props }: AriaRadioProps) {
    const state = React.useContext(RadioContext);
    const ref = React.useRef(null);
    const { inputProps } = useRadio(props, state, ref);

    const classes = classnames({
        [styles.radioLabel]: true,
        [styles.radioLabelSelected]: state.selectedValue === props.value,
    });

    return (
        <label className={classes}>
            <input {...inputProps} ref={ref} />
            {children}
        </label>
    );
}
