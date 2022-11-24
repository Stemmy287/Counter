import React from 'react';
import {Container, Grid, Paper} from "@mui/material";
import s from "./App.module.css";
import {IncValue} from "./IncValue/IncValue";
import {SettingValue} from "./SettingValue/SettingValue";

type TogetherPropsType = {
    setting: boolean
    warningEnter: string
    value: number
    finalValue: number
    startValue: number
    increase: () => void
    reset: () => void
    settingOn: () => void
    changeStartValue: (changeFValue: number) => void
    changeFinalValue: (changeFValue: number) => void
    settValue: () => void
    enterValueWarning: () => void
    resetEnterValueWarning: () => void
}

export const Together: React.FC<TogetherPropsType> = ({
                                                          warningEnter,
                                                          value,
                                                          finalValue,
                                                          startValue,
                                                          increase,
                                                          reset,
                                                          changeStartValue,
                                                          changeFinalValue,
                                                          settValue,
                                                          enterValueWarning,
                                                          resetEnterValueWarning,
                                                          settingOn,
                                                          setting

                                                      }) => {
    return (
        <div>
            <Container fixed>
                <Grid container
                      spacing={10}
                      alignItems="center"
                      justifyContent="center"
                      minHeight="100vh"
                >
                    <Grid item>
                        <Paper elevation={3}
                               className={s.paper}
                        >
                            <IncValue warningEnter={warningEnter}
                                      value={value}
                                      finalValue={finalValue}
                                      startValue={startValue}
                                      increase={increase}
                                      reset={reset}
                                      settingOn={settingOn}
                                      setting={setting}
                                      buttonSet={false}
                            />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={3}
                               className={s.paper}
                        >
                            <SettingValue startValue={startValue}
                                          finalValue={finalValue}
                                          changeStartValue={changeStartValue}
                                          changeFinalValue={changeFinalValue}
                                          settValue={settValue}
                                          enterValueWarning={enterValueWarning}
                                          resetEnterValueWarning={resetEnterValueWarning}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

