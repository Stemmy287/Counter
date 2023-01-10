import {Dispatch} from "redux";

type ActionType = SetValueActionType
    | IncreaseActionType
    | ChangeStartValueActionType
    | ChangeFinalValueActionType
    | EnterWarningActionType
    | ResetEnterWarningActionType
    | IsSettingActionType


type SetValueActionType = {
    type: 'SET-VALUE-/-RESET-VALUE'
}

type IncreaseActionType = {
    type: 'INCREASE'
}

type ChangeStartValueActionType = {
    type: 'CHANGE-START-VALUE'
    changeSValue: number
}

type ChangeFinalValueActionType = {
    type: 'CHANGE-FINAL-VALUE'
    changeFValue: number
}

type EnterWarningActionType = {
    type: 'ENTER-WARNING'
}

type ResetEnterWarningActionType = {
    type: 'RESET-WARNING'
}

type IsSettingActionType = {
    type: 'SETTING-ON-OFF'
    isSetting: boolean
}

export type ValueType = {
    startValue: number
    finalValue: number
    value: number
    warning: WarningType
    isSetting: boolean
}

export type WarningType = '' | 'Enter values and press set'

export const initialState: ValueType = {
    startValue: 0,
    finalValue: 5,
    value: 0,
    warning: '',
    isSetting: false
}

export const valueReducer = (state = initialState, action: ActionType): ValueType => {
    switch (action.type) {
        case 'SET-VALUE-/-RESET-VALUE':
            return {...state, value: state.startValue}
        case 'INCREASE':
            return {...state, value: state.value + 1}
        case 'CHANGE-START-VALUE':
            return {...state, startValue: action.changeSValue}
        case 'CHANGE-FINAL-VALUE':
            return {...state, finalValue: action.changeFValue}
        case 'ENTER-WARNING':
            return {...state, warning: 'Enter values and press set'}
        case 'RESET-WARNING':
            return {...state, warning: ''}
        case 'SETTING-ON-OFF':
            return {...state, isSetting: action.isSetting}
        default:
            return state
    }
};

export const SetValueResetValueAC = (): SetValueActionType => ({
    type: 'SET-VALUE-/-RESET-VALUE'
})

export const IncreaseAC = (): IncreaseActionType => ({
    type: 'INCREASE'
})

export const ChangeStartValueAC = (changeSValue: number): ChangeStartValueActionType => ({
    type: 'CHANGE-START-VALUE',
    changeSValue
})

export const ChangeFinalValueAC = (changeFValue: number): ChangeFinalValueActionType => ({
    type: 'CHANGE-FINAL-VALUE',
    changeFValue
})

export const EnterWarningAC = (): EnterWarningActionType => ({
    type: 'ENTER-WARNING'
})

export const ResetWarningAC = (): ResetEnterWarningActionType => ({
    type: 'RESET-WARNING'
})

export const IsSettingAC = (isSetting: boolean): IsSettingActionType => ({
    type: 'SETTING-ON-OFF',
    isSetting
})

export const IncValueThunk = (value: number) => (dispatch: Dispatch) => {

}
