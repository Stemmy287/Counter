import React from 'react';
import {Container, Grid, Paper} from "@mui/material";
import s from "./App.module.css";
import {IncValue} from "./IncValue/IncValue";
import {SettingValue} from "./SettingValue/SettingValue";

export const Together = () => {
    console.log('together render')
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
                            <IncValue buttonSetting={false}/>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={3}
                               className={s.paper}
                        >
                            <SettingValue/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

