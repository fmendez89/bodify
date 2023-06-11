"use client";

import React from "react";
import { CheckboxGroupState, useCheckboxGroupState } from "react-stately";
import { AriaCheckboxGroupItemProps, AriaCheckboxGroupProps, useCheckboxGroup, useCheckboxGroupItem } from "react-aria";
import { classnames } from "@/utils/classnames";

import styles from "./CheckboxGroup.module.css";

const CheckboxGroupContext = React.createContext(null as unknown as CheckboxGroupState);

interface CheckboxGroupProps extends AriaCheckboxGroupProps {
    children?: React.ReactNode;
}

export function CheckboxGroup(props: CheckboxGroupProps) {
    const { children, label, description, errorMessage, validationState } = props;
    const state = useCheckboxGroupState(props);
    const { groupProps, labelProps, descriptionProps, errorMessageProps } = useCheckboxGroup(props, state);

    return (
        <div {...groupProps} className={styles.checkboxGroupContainer}>
            <div {...labelProps} className={styles.checkboxGroupLabel}>
                {label}
            </div>
            <div className={styles.checkboxInputsContainer}>
                <CheckboxGroupContext.Provider value={state}>{children}</CheckboxGroupContext.Provider>
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

export function Checkbox(props: AriaCheckboxGroupItemProps) {
    const { children } = props;
    const state = React.useContext(CheckboxGroupContext);
    const ref = React.useRef(null);
    const { inputProps } = useCheckboxGroupItem(props, state, ref);

    const isDisabled = state.isDisabled || props.isDisabled || false;
    const isSelected = state.isSelected(props.value);

    const classes = classnames({
        [styles.checkboxLabel]: true,
        [styles.checkboxLabelSelected]: isSelected,
        [styles.checkboxLabelDisabled]: isDisabled,
    });

    return (
        <label className={classes}>
            <input {...inputProps} ref={ref} />
            {children}
        </label>
    );
}

export function CheckboxProvince(props: AriaCheckboxGroupItemProps) {
    const { children } = props;
    const state = React.useContext(CheckboxGroupContext);
    const ref = React.useRef(null);
    const { inputProps } = useCheckboxGroupItem(props, state, ref);

    const isDisabled = state.isDisabled || props.isDisabled || false;
    const isSelected = state.isSelected(props.value);

    const classes = classnames({
        [styles.checkboxLabel]: true,
        [styles.checkboxLabelProvince]: true,
        [styles.checkboxLabelSelected]: isSelected,
        [styles.checkboxLabelDisabled]: isDisabled,
    });

    return (
        <label className={classes}>
            <input {...inputProps} ref={ref} />
            {children}
        </label>
    );
}
