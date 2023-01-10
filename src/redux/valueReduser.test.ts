import {
    ChangeFinalValueAC,
    ChangeStartValueAC, EnterWarningAC,
    IncreaseAC, IsSettingAC, ResetWarningAC,
    SetValueResetValueAC,
    valueReducer,
    ValueType
} from "./valueReducer";

let initialState: ValueType

beforeEach(() => {
    initialState = {
        startValue: 3,
        finalValue: 10,
        value: 0,
        warning: '',
        isSetting: false
    }
})

test('set value', () => {

    const copyState = valueReducer(initialState ,SetValueResetValueAC())
    console.log(copyState)
    expect(copyState.value).toBe(3)
})

test('increase', () => {

    const copyState = valueReducer(initialState , IncreaseAC())
    console.log(copyState)
    expect(copyState.value).toBe(1)
})

test('change start value', () => {

    const copyState = valueReducer(initialState , ChangeStartValueAC(1))
    console.log(copyState)
    expect(copyState.startValue).toBe(1)
})

test('change final value', () => {

    const copyState = valueReducer(initialState , ChangeFinalValueAC(1))
    console.log(copyState)
    expect(copyState.finalValue).toBe(1)
})

test('reset', () => {

    const copyState = valueReducer(initialState , SetValueResetValueAC())
    console.log(copyState)
    expect(copyState.value).toBe(3)
})

test('enter warning', () => {

    const copyState = valueReducer(initialState , EnterWarningAC())
    console.log(copyState)
    expect(copyState.warning).toBe('Enter values and press set')
})

test('reset warning', () => {

    const copyState = valueReducer(initialState , ResetWarningAC())
    console.log(copyState)
    expect(copyState.warning).toBe('')
})

test('Setting On', () => {

    const copyState = valueReducer(initialState, IsSettingAC(true))
    console.log(copyState)
    expect(copyState.isSetting).toBe(true)
})

test('Setting Off', () => {

    const copyState = valueReducer(initialState, IsSettingAC(false))
    console.log(copyState)
    expect(copyState.isSetting).toBe(false)
})
