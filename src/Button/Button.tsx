import React from 'react';
import {Button} from "@mui/material";

type ButtonPropsType = {
    name: string
    callback: () => void
    disabled?: boolean
}

export const ButtonCont = (props: ButtonPropsType) => {

    const {name, callback, disabled} = props

    const onClickHandler = () => {
        callback()
    }

    return (
        <Button style={{margin: '30px 0 0 5px'}}
                variant={"contained"}
                color="primary"
                onClick={onClickHandler}
                size={'large'}
                disabled={disabled}
        >{name}</Button>
    );
};

