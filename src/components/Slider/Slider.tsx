import React from "react";
import { SliderState, useSliderState } from "react-stately";
import {
    AriaSliderProps,
    mergeProps,
    useFocusRing,
    useNumberFormatter,
    useSlider,
    useSliderThumb,
    VisuallyHidden,
} from "react-aria";
import { classnames } from "@/utils/classnames";

import styles from "./Slider.module.css";

interface ThumbProps {
    index: number;
    state: SliderState;
    trackRef: React.RefObject<Element>;
}

function Thumb(props: ThumbProps) {
    const { state, trackRef, index } = props;
    const inputRef = React.useRef<HTMLInputElement>(null);
    const { thumbProps, inputProps, isDragging } = useSliderThumb(
        {
            index,
            trackRef,
            inputRef,
        },
        state
    );

    const { focusProps, isFocusVisible } = useFocusRing();

    const thumbClasses = classnames({
        [styles.thumb]: true,
        [styles.focus]: isFocusVisible,
        [styles.dragging]: isDragging,
    });

    return (
        <div {...thumbProps} className={thumbClasses}>
            <VisuallyHidden>
                <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
            </VisuallyHidden>
        </div>
    );
}

interface SliderProps extends AriaSliderProps<number | number[]> {
    formatOptions?: Intl.NumberFormatOptions;
    postLabel?: string;
}

export function Slider(props: SliderProps) {
    const { formatOptions, ...sliderProps } = props;

    const trackRef = React.useRef(null);
    const numberFormatter = useNumberFormatter(props.formatOptions);
    const state = useSliderState({ ...sliderProps, numberFormatter });
    const { groupProps, trackProps, labelProps, outputProps } = useSlider(sliderProps, state, trackRef);

    const sliderClasses = classnames({
        [styles.slider]: true,
        [styles.vertical]: state.orientation === "vertical",
        [styles.horizontal]: state.orientation === "horizontal",
    });

    const trackClasses = classnames({
        [styles.track]: true,
        [styles.disabled]: state.isDisabled,
    });

    return (
        <div {...groupProps} className={sliderClasses}>
            {props.label && (
                <div className={styles.labelContainer}>
                    <label {...labelProps}>{props.label}</label>
                    <output {...outputProps}>
                        {state.getThumbValueLabel(0)}
                        {props.postLabel}
                    </output>
                </div>
            )}
            <div {...trackProps} ref={trackRef} className={trackClasses}>
                <Thumb index={0} state={state} trackRef={trackRef} />
            </div>
        </div>
    );
}
