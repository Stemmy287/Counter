import React from 'react';
import {Container, Grid, Paper} from "@mui/material";
import s from "./App.module.css";
import {useSelector} from "react-redux";
import {AppReduxStore} from "./redux/store";
import {IncValue} from "./IncValue/IncValue";
import {SettingValue} from "./SettingValue/SettingValue";

export const Separately = () => {

    const isSetting = useSelector<AppReduxStore, boolean>(state => state.valueState.isSetting)

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
                            {isSetting ? <SettingValue/> : <IncValue buttonSetting={true}/>}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

