import React from 'react';
import {
    styleDisplayIncorrect,
    styleDisplayValue,
    styleDisplayValueRed,
    styleDisplayWarningEnter
} from "./styleDisplayValue";

type DisplayValuePropsType = {
    value: number
    finalValue: number
    startValue: number
    warningEnter: string
}

export const DisplayValue: React.FC<DisplayValuePropsType> = ({
                                                                  value,
                                                                  finalValue,
                                                                  warningEnter,
                                                                  startValue
                                                              }) => {


    const display = finalValue <= startValue || startValue < 0 || finalValue < 0 ?
        <div style={styleDisplayIncorrect}>Incorrect value!</div>
        : warningEnter
            ? <div style={styleDisplayWarningEnter}>{warningEnter}</div>
            : <div style={value === finalValue ? styleDisplayValueRed : styleDisplayValue}>{value}</div>
    return (
        display
    );
};

