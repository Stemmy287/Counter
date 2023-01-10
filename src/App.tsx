import React from 'react';
import {AppBar, Toolbar} from "@mui/material";
import {NavLink, Route, Routes} from "react-router-dom";
import {Together} from "./Together";
import {Separately} from "./Separately";


function App() {
    console.log('app render')
    return (
        <div>
            <AppBar position="static">
                <Toolbar style={{justifyContent: "center"}}>
                        <NavLink to={'/together'} style={{textDecoration: 'none', color: "white", fontSize: 25, marginRight: '20px'}}>Together</NavLink>
                        <NavLink to={'/separately'} style={{textDecoration: 'none', color: "white", fontSize: 25, marginRight: '20px'}}>Separately</NavLink>
                </Toolbar>
            </AppBar>
            <Routes>
                <Route path={'/together'} element={<Together/>}/>
                <Route path={'/separately'} element={<Separately/>}/>
                <Route path={'/'} element={<Together/>}/>
            </Routes>
        </div>
    );
}

export default App;
