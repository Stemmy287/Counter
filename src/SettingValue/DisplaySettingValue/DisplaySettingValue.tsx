import React from 'react';
import {Input} from "../../Input/Input";

type DisplaySettingValuePropsType = {
    changeStartValue: (changeSValue: number) => void
    changeFinalValue: (changeFValue: number) => void
    enterValueWarning: () => void
    resetEnterValueWarning: () => void
    startValue: number
    finalValue: number
}

export const DisplaySettingValue: React.FC<DisplaySettingValuePropsType> = ({
                                                                                changeStartValue,
                                                                                changeFinalValue,
                                                                                enterValueWarning,
                                                                                resetEnterValueWarning,
                                                                                startValue,
                                                                                finalValue
                                                                            }) => {




    const errorStart = startValue === finalValue
        ? true
        : startValue > finalValue
            ? true
            : startValue < 0
                ? true
                : false

    const errorFinal = startValue === finalValue
        ? true
        : false

    return (
        <div>
            <div>
                <div>
                    Start value: <Input
                    error={errorStart}
                    value={startValue}
                    onChangeCallback={changeStartValue}
                    onBlurCallback={resetEnterValueWarning}
                    onFocusCallback={enterValueWarning}/>
                </div>
                <div>
                    Final value: <Input
                    error={errorFinal}
                    value={finalValue}
                    onChangeCallback={changeFinalValue}
                    onBlurCallback={resetEnterValueWarning}
                    onFocusCallback={enterValueWarning}/>
                </div>
            </div>
        </div>
    );
};

