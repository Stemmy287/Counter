import React from 'react';
import {ButtonCont} from "../Button/Button";
import {
    styleDisplayIncorrect,
    styleIncValue,
    styleDisplayValueRed,
    styleDisplayWarningEnter
} from "./styleIncValue";
import {useDispatch, useSelector} from "react-redux";
import {AppReduxStore} from "../redux/store";
import {
    IncreaseAC,
    IsSettingAC,
    SetValueResetValueAC,
    ValueType
} from "../redux/valueReducer";

type IncValuePropsType = {
    buttonSetting: boolean
}

export const IncValue: React.FC<IncValuePropsType> = (props) => {

    const valueState = useSelector<AppReduxStore, ValueType>(state => state.valueState)
    const dispatch = useDispatch()

    const display = valueState.finalValue <= valueState.startValue || valueState.startValue < 0 || valueState.finalValue < 0 ?
        <div style={styleDisplayIncorrect}>Incorrect value!</div>
        : valueState.warning
            ? <div style={styleDisplayWarningEnter}>{valueState.warning}</div>
            : <div style={valueState.value === valueState.finalValue ? styleDisplayValueRed : styleIncValue}>{valueState.value}</div>
    return (
        <div>
            {display}
            <ButtonCont name={'inc'} callback={() => dispatch(IncreaseAC())} disabled={valueState.value === valueState.finalValue}/>
            <ButtonCont name={'reset'} callback={() => dispatch(SetValueResetValueAC())} disabled={valueState.value === valueState.startValue}/>
            {props.buttonSetting && <ButtonCont name={'setting'} callback={() => dispatch(IsSettingAC(true))}/>}
        </div>
    );
};
