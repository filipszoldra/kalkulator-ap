import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Switch} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const MySwitch = withStyles({
    switchBase: {
        color: '#25354F',
        '&$checked': {
            color: '#25354F',
        },
        '&$checked + $track': {
            backgroundColor: '#25354F',
        },
    },
    checked: {},
    track: {}
})(Switch);

interface Props{
    switchTheme(): void
}

const DarkModeCore = styled.div`
    font-size: 0.6em;
    color: ${({theme}) => theme.colors.appFrame.font};
    display: flex;
    width: 60px;
    height: fit-content;
    align-content: center;
    flex-direction: column;
    align-self: center;
`;

const DarkMode: FC<Props> = ({switchTheme}) => {

    const [checked, setChecked] = useState<boolean>(false);

    const onClick = () => {
        setChecked(!checked)
        switchTheme()
    }

    return(
        <DarkModeCore>
            <label>Tryb ciemny</label>
            <MySwitch checked={checked} onChange={onClick}/>
        </DarkModeCore>
    )
}

export default DarkMode;