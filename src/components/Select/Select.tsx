import React from 'react';
import { Item, useSelectState } from 'react-stately';
import { HiddenSelect, useSelect } from 'react-aria';
import { useListBox, useOption } from 'react-aria';
import { DismissButton, Overlay, usePopover } from 'react-aria';
import type { AriaPopoverProps } from 'react-aria';
import type { OverlayTriggerState } from 'react-stately';
import { useButton } from 'react-aria';

function Select(props) {
    // Create state based on the incoming props
    let state = useSelectState(props);

    // Get props for child elements from useSelect
    let ref = React.useRef(null);
    let {
        labelProps,
        triggerProps,
        valueProps,
        menuProps
    } = useSelect(props, state, ref);

    return (
        <div style={{ display: 'inline-block' }}>
            <div {...labelProps}>{props.label}</div>
            <HiddenSelect
                isDisabled={props.isDisabled}
                state={state}
                triggerRef={ref}
                label={props.label}
                name={props.name}
            />
            <Button
                {...triggerProps}
                buttonRef={ref}
                style={{ height: 30, fontSize: 14 }}
            >
                <span {...valueProps}>
                    {state.selectedItem
                        ? state.selectedItem.rendered
                        : 'Select an option'}
                </span>
                <span
                    aria-hidden="true"
                    style={{ paddingLeft: 5 }}
                >
                    ▼
                </span>
            </Button>
            {state.isOpen &&
                (
                    <Popover state={state} triggerRef={ref} placement="bottom start">
                        <ListBox
                            {...menuProps}
                            state={state}
                        />
                    </Popover>
                )}
        </div>
    );
}


function ListBox(props) {
    let ref = React.useRef(null);
    let { listBoxRef = ref, state } = props;
    let { listBoxProps } = useListBox(props, state, listBoxRef);

    return (
        <ul
            {...listBoxProps}
            ref={listBoxRef}
            style={{
                margin: 0,
                padding: 0,
                listStyle: 'none',
                maxHeight: 150,
                overflow: 'auto',
                minWidth: 100,
                background: 'lightgray'
            }}
        >
            {[...state.collection].map((item) => (
                <Option
                    key={item.key}
                    item={item}
                    state={state}
                />
            ))}
        </ul>
    );
}

function Option({ item, state }) {
    let ref = React.useRef(null);
    let { optionProps, isSelected, isFocused, isDisabled } = useOption(
        { key: item.key },
        state,
        ref
    );

    return (
        <li
            {...optionProps}
            ref={ref}
            style={{
                background: isFocused ? 'gray' : 'transparent',
                color: isDisabled ? 'gray' : isFocused ? 'white' : 'black',
                padding: '2px 5px',
                outline: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px'
            }}
        >
            {item.rendered}
            {isSelected ? <span>✓</span> : null}
        </li>
    );
}

function Button(props) {
    let ref = props.buttonRef;
    let { buttonProps } = useButton(props, ref);
    return (
        <button {...buttonProps} ref={ref} style={props.style}>
            {props.children}
        </button>
    );
}



interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
    children: React.ReactNode;
    state: OverlayTriggerState;
}

function Popover({ children, state, ...props }: PopoverProps) {
    let popoverRef = React.useRef(null);
    let { popoverProps, underlayProps } = usePopover({
        ...props,
        popoverRef
    }, state);

    return (
        <Overlay>
            <div {...underlayProps} style={{ position: 'fixed', inset: 0 }} />
            <div
                {...popoverProps}
                ref={popoverRef}
                style={{
                    ...popoverProps.style,
                    background: 'var(--page-background)',
                    border: '1px solid gray'
                }}
            >
                <DismissButton onDismiss={state.close} />
                {children}
                <DismissButton onDismiss={state.close} />
            </div>
        </Overlay>
    );
}