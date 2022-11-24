import React from 'react';
import {DisplayValue} from "./DisplayValue/DisplayValue";
import {ButtonCont} from "../Button/Button";

type IncValuePropsType = {
    value: number
    finalValue: number
    startValue: number
    increase: () => void
    reset: () => void
    warningEnter: string
    settingOn: () => void
    setting: boolean
    buttonSet: boolean
}

export const IncValue: React.FC<IncValuePropsType> = ({
                                                          value,
                                                          finalValue,
                                                          startValue,
                                                          increase, reset,
                                                          warningEnter,
                                                          settingOn,
                                                          buttonSet
                                                      }) => {


    return (
        <div>
            <DisplayValue warningEnter={warningEnter} value={value} finalValue={finalValue} startValue={startValue}/>
            <ButtonCont name={'inc'} callback={increase} disabled={value === finalValue}/>
            <ButtonCont name={'reset'} callback={reset} disabled={value === startValue}/>
            {buttonSet && <ButtonCont name={'set'} callback={settingOn}/>}
        </div>
    );
};
