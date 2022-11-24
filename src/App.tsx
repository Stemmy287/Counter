import React, {useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import {Separately} from "./Separately";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Together} from "./Together";
import {ErrorRoute} from "./ErrorRoute";


function App() {

    const [startValue, setStartValue] = useState(0)
    const [finalValue, setFinalValue] = useState(5)

    const [value, setValue] = useState<number>(startValue)

    const [warningEnter, setWarningEnter] = useState('')
    const [setting, setSetting] = useState(false)

    useEffect(() => {
        let localValue = localStorage.getItem('counter')
        if (localValue) {
            setValue(JSON.parse(localValue))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('counter', JSON.stringify(value))
    }, [value])

    useEffect(() => {
        let localValue = localStorage.getItem('StartValue')
        if (localValue) {
            setStartValue(JSON.parse(localValue))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('StartValue', JSON.stringify(startValue))
    }, [startValue])

    useEffect(() => {
        let localValue = localStorage.getItem('FinalValue')
        if (localValue) {
            setFinalValue(JSON.parse(localValue))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('FinalValue', JSON.stringify(finalValue))
    }, [finalValue])


    const increase = () => {
        value < finalValue && setValue(value + 1)
    }

    const reset = () => {
        setValue(startValue)
        localStorage.removeItem('counter')
    }

    const changeStartValue = (changeSValue: number) => {
        setStartValue(changeSValue)
    }

    const changeFinalValue = (changeFValue: number) => {
        setFinalValue(changeFValue)
    }

    const settValue = () => {
        setValue(startValue)
        setFinalValue(finalValue)
        setSetting(false)
    }

    const enterValueWarning = () => {
        setWarningEnter('Enter values and press set')
    }

    const resetEnterValueWarning = () => {
        setWarningEnter('')
    }

    const settingOn = () => {
        setSetting(true)
    }

    return (
        <div><AppBar position="static">
            <Toolbar style={{justifyContent: "space-between"}}>
                <Typography variant="h6">
                    <NavLink style={{textDecoration: 'none', color: 'white', marginLeft: '20px'}} to={'Together'}>Together</NavLink>
                    <NavLink style={{textDecoration: 'none', color: 'white', marginLeft: '20px'}} to={'Separately'}>Separately</NavLink>
                </Typography>
            </Toolbar>
        </AppBar>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/Together'}/>}/>
                <Route path={'/Separately'} element={<Separately
                    setting={setting}
                    warningEnter={warningEnter}
                    value={value}
                    finalValue={finalValue}
                    startValue={startValue}
                    increase={increase}
                    reset={reset}
                    settingOn={settingOn}
                    changeStartValue={changeStartValue}
                    changeFinalValue={changeFinalValue}
                    settValue={settValue}
                    enterValueWarning={enterValueWarning}
                    resetEnterValueWarning={resetEnterValueWarning}
                />}/>
                <Route path={'/Together'} element={<Together
                    setting={setting}
                    warningEnter={warningEnter}
                    value={value}
                    finalValue={finalValue}
                    startValue={startValue}
                    increase={increase}
                    reset={reset}
                    changeStartValue={changeStartValue}
                    changeFinalValue={changeFinalValue}
                    settValue={settValue}
                    enterValueWarning={enterValueWarning}
                    resetEnterValueWarning={resetEnterValueWarning}
                    settingOn={settingOn}
                />}/>
                <Route path={'/*'} element={<ErrorRoute/>}/>
            </Routes>
        </div>

    );
}

export default App;
