import React from 'react';
import {ButtonCont} from "../Button/Button";
import {Input} from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppReduxStore} from "../redux/store";
import {
    ChangeFinalValueAC,
    ChangeStartValueAC, EnterWarningAC, IsSettingAC,
    ResetWarningAC, SetValueResetValueAC,
    ValueType
} from "../redux/valueReducer";

export const SettingValue: React.FC = () => {

    const valueState = useSelector<AppReduxStore, ValueType>(state => state.valueState)
    const dispatch = useDispatch()

    const errorStart = valueState.startValue === valueState.finalValue
        ? true
        : valueState.startValue > valueState.finalValue
            ? true
            : valueState.startValue < 0

    const errorFinal = valueState.startValue === valueState.finalValue

    return (
        <div>
            <div>
                <div>
                    Start value: <Input
                    error={errorStart}
                    value={valueState.startValue}
                    onChangeCallback={(changeSValue) => dispatch(ChangeStartValueAC(changeSValue))}
                    onBlurCallback={() => dispatch(ResetWarningAC())}
                    onFocusCallback={() => dispatch(EnterWarningAC())}/>
                </div>
                <div>
                    Final value: <Input
                    error={errorFinal}
                    value={valueState.finalValue}
                    onChangeCallback={(changeFValue) => dispatch(ChangeFinalValueAC(changeFValue))}
                    onBlurCallback={() => dispatch(ResetWarningAC())}
                    onFocusCallback={() => dispatch(EnterWarningAC())}/>
                </div>
            </div>
            <ButtonCont name={'Set'} callback={() => {
                dispatch(SetValueResetValueAC())
                dispatch(IsSettingAC(false))
            }}
                        disabled={valueState.startValue < 0 || valueState.startValue === valueState.finalValue || valueState.finalValue < valueState.startValue}/>
        </div>
    );
};

