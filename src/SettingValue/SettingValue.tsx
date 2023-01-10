import React, {memo} from 'react';
import {ButtonCont} from "../Button/Button";
import {Input} from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppReduxStore} from "../redux/store";
import {
    ChangeFinalValueAC,
    ChangeStartValueAC,
    EnterWarningAC,
    IsSettingAC,
    ResetWarningAC,
    SetValueResetValueAC
} from "../redux/valueReducer";

export const SettingValue: React.FC = memo(() => {
    console.log('settingValue render')
    const startValue = useSelector<AppReduxStore, number>(state => state.valueState.startValue)
    const finalValue = useSelector<AppReduxStore, number>(state => state.valueState.finalValue)
    const dispatch = useDispatch()

    const errorStart = startValue === finalValue
        ? true
        : startValue > finalValue
            ? true
            : startValue < 0

    const errorFinal = startValue === finalValue

    return (
        <div>
            <div>
                <div>
                    Start value: <Input
                    error={errorStart}
                    value={startValue}
                    onChangeCallback={(changeSValue) => dispatch(ChangeStartValueAC(changeSValue))}
                    onBlurCallback={() => dispatch(ResetWarningAC())}
                    onFocusCallback={() => dispatch(EnterWarningAC())}/>
                </div>
                <div>
                    Final value: <Input
                    error={errorFinal}
                    value={finalValue}
                    onChangeCallback={(changeFValue) => dispatch(ChangeFinalValueAC(changeFValue))}
                    onBlurCallback={() => dispatch(ResetWarningAC())}
                    onFocusCallback={() => dispatch(EnterWarningAC())}/>
                </div>
            </div>
            <ButtonCont name={'Set'} callback={() => {
                dispatch(SetValueResetValueAC())
                dispatch(IsSettingAC(false))
            }}
                        disabled={startValue < 0 || startValue === finalValue || finalValue < startValue}/>
        </div>
    );
});

