import React from 'react';
import {DisplaySettingValue} from "./DisplaySettingValue/DisplaySettingValue";
import {ButtonCont} from "../Button/Button";

type SettingValuePropsType = {
    changeStartValue: (changeFValue: number) => void
    changeFinalValue: (changeFValue: number) => void
    enterValueWarning: () => void
    resetEnterValueWarning: () => void
    settValue: () => void
    startValue: number
    finalValue: number
}

export const SettingValue: React.FC<SettingValuePropsType> = ({
                                                                  startValue,
                                                                  finalValue,
                                                                  changeStartValue,
                                                                  changeFinalValue,
                                                                  settValue,
                                                                  enterValueWarning,
                                                                  resetEnterValueWarning
                                                              }) => {


    return (
        <div>
            <DisplaySettingValue
                startValue={startValue}
                finalValue={finalValue}
                changeStartValue={changeStartValue}
                changeFinalValue={changeFinalValue}
                enterValueWarning={enterValueWarning}
                resetEnterValueWarning={resetEnterValueWarning}
            />
            <ButtonCont name={'Set'} callback={settValue}
                        disabled={startValue < 0 || startValue === finalValue || finalValue < startValue}/>
        </div>
    );
};

