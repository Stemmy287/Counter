import React, {ChangeEvent, FocusEvent} from 'react';
import {TextField} from "@mui/material";

type InputPropsType = {
    onChangeCallback?: (changeValue: number) => void
    onFocusCallback?: () => void
    onBlurCallback?: () => void
    error: boolean
    value: number
}

export const Input = (props: InputPropsType) => {

    const {onChangeCallback, onFocusCallback, onBlurCallback, error, value} = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        if (onChangeCallback) {
            onChangeCallback(e.currentTarget.valueAsNumber)

        }
    }

    const onFocusHandler = (e: FocusEvent<HTMLInputElement, Element>) => {
        if (onFocusCallback) {
            onFocusCallback()
        }
    }

    const onBlurHandler = (e: FocusEvent<HTMLInputElement, Element>) => {
        if (onBlurCallback) {
            onBlurCallback()
        }
    }


    return (
        <div>
            <TextField
                error={error}
                size={'small'}
                value={value}
                type={'number'}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
            />
        </div>
    );
};

