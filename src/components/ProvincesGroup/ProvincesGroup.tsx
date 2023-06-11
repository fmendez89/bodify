"use client";

import React from 'react';
import { CheckboxGroupState, useCheckboxGroupState } from 'react-stately';
import { AriaCheckboxGroupItemProps, AriaCheckboxGroupProps, useCheckboxGroup, useCheckboxGroupItem } from 'react-aria';

import styles from './CheckboxGroup.module.css';
import { classnames } from '@/utils/classnames';

let CheckboxGroupContext = React.createContext(null as unknown as CheckboxGroupState);

interface CheckboxGroupProps extends AriaCheckboxGroupProps {
    children?: React.ReactNode,
}

export function CheckboxGroup(props: CheckboxGroupProps) {
    let { children, label, description, errorMessage, validationState } = props;
    let state = useCheckboxGroupState(props);
    let { groupProps, labelProps, descriptionProps, errorMessageProps } =
        useCheckboxGroup(props, state);

    return (
        <div {...groupProps} className={styles.checkboxGroupContainer}>
            <div {...labelProps} className={styles.checkboxGroupLabel}>{label}</div>
            <div className={styles.checkboxInputsContainer}>
                <CheckboxGroupContext.Provider value={state}>
                    {children}
                </CheckboxGroupContext.Provider>
            </div>
            {description && (
                <div {...descriptionProps} style={{ fontSize: 12 }}>{description}</div>
            )}
            {errorMessage && validationState === 'invalid' &&
                (
                    <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
                        {errorMessage}
                    </div>
                )}
        </div>
    );
}

export function Checkbox(props: AriaCheckboxGroupItemProps) {
    let { children } = props;
    let state = React.useContext(CheckboxGroupContext);
    let ref = React.useRef(null);
    let { inputProps } = useCheckboxGroupItem(props, state, ref);

    let isDisabled = state.isDisabled || props.isDisabled || false;
    let isSelected = state.isSelected(props.value);

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