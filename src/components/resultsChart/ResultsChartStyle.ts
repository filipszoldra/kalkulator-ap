import styled, { DefaultTheme } from 'styled-components';
import Select from 'react-select';
import {RgbaColorPicker} from 'react-colorful';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

export const ResultsChartCore = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px;
    margin: 20px 0;
    @media(max-width: 1000px){
        max-width: 100%;
    }
    font-size: 0.85em;
`;


export const ResultsChartControlCore = styled.div`
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    @media(max-width: ${({theme}) => theme.mobileFontSize}){
        flex-direction: column;
    }
`;

export const ResultsChartControlColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;
    @media(max-width: ${({theme}) => theme.mobileFontSize}){
        width: 100%;
    }
`;

export const ResultsChartControlRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 5px 0;
    position: relative;
    align-items: center;
`;

export const ResultsChartButton = styled.button`
    font-size: 1.1em;
    padding: 6px 8px;
    outline: none;
    border: none;
    background-color: ${({theme}) => theme.colors.content.theme};
    color: ${({theme}) => theme.colors.content.fontSecondary};
    border-radius: 3px;
    cursor: pointer;
    &:hover{
        background-color: ${({theme}) => theme.colors.content.themeHover};
    }
`;

export const ResultsChartControlSelect = styled(Select)`
    width: 100%;
    & *{
        scrollbar-width: thin;
        *::-webkit-scrollbar {
            width: 15px;
        }
        *::-webkit-scrollbar-track {
            background: ${({theme}) => theme.colors.content.theme};
            border-radius: 6px;
        }
        *::-webkit-scrollbar-thumb {
            background-color: ${({theme}) => theme.colors.content.background};
            border-radius: 6px;
            border: 3px solid ${({theme}) => theme.colors.content.theme};
        }
    }
`;

export const ResultsChartColorPicker = styled(RgbaColorPicker)`
    width: 100% !important;
`;

export const ResultsChartInputTitle = styled.span`
    font-size: 1em;
    word-wrap: break-word;
    @media(max-width: 450px){
        font-size: 0.85em;
    }
`;

export const ResultsChartInput = styled.input`
    padding: 8px 10px;
    outline: none;
    border: none;
    font-size: 1em;
    margin: 0 0 0 10px;
    border: 2px solid ${({theme}) => theme.colors.content.theme};
    border-radius: 3px;
    &::selection{
        color: ${({theme}) => theme.colors.appFrame.font};
        background: ${({theme}) => theme.colors.appFrame.background};
    }
    flex: 1;
`;

export const MySwitch = (theme: DefaultTheme) => {
    return withStyles({
        switchBase: {
            color: theme.colors.content.themeHover,
            '&$checked': {
                color: theme.colors.content.themeHover,
            },
            '&$checked + $track': {
                backgroundColor: theme.colors.content.theme,
            },
        },
        checked: {},
        track: {}
    })(Switch);
}