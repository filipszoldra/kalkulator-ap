import styled from 'styled-components';
import Select from "react-select";

export interface Props{
    active: boolean;
}

export interface ButtonProps{
    active?: boolean;
}

export const CalcFormsCore = styled.div`
    transition: opacity .25s;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    overflow: hidden;
    width: 450px;
    margin: 0 auto;
    @media(max-width: 1000px){
        width: 100%;
        margin: 0 auto 30px;
        padding: 0 20px;
    }
`;

export const CalcForm = styled.form<Props>`
    display: flex;
    flex-direction: column;
    grid-row: 1/1;
    grid-column: 1/1;
    z-index: ${props => props.active ? 1 : -1};
    opacity: ${props => props.active ? 1 : 0};
    & > *{
        margin: 5px 0;
    }
`;

export const CalcFormTitle = styled.h1`
    padding: 0;
    margin: 0 0 20px;
    width: 100%;
    font-size: 1.7em;
    font-weight: ${({theme}) => theme.fontWeight.bold};
    color: ${({theme}) => theme.colors.content.fontPrimary};
    @media(max-width: ${({theme}) => theme.mobileFontSize}){
        font-size: 1.5em;
    }
`;

export const CalcFormInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
`;

export const CalcFormInputTitle = styled.span`
    font-size: 1em;
    word-wrap: break-word;
    @media(max-width: 450px){
        font-size: 0.85em;
    }
    width: 120px;
`;

export const CalcFormInput = styled.input`
    padding: 8px 10px;
    outline: none;
    font-size: 1em;
    margin: 0 5px 0 auto;
    border: 2px solid ${({theme}) => theme.colors.content.theme};
    border-radius: 3px;
    &::selection{
        color: ${({theme}) => theme.colors.appFrame.font};
        background: ${({theme}) => theme.colors.appFrame.background};
    }
    @media(max-width: ${({theme}) => theme.mobileFontSize}){
        font-size: 0.85em;
        width: 120px;
    }
`;

export const CalcFormDeleteInput = styled.div`
    cursor: pointer;
    width: 22px;
    height: 24px;
    position: relative;
    margin: 0 5px;
    &:hover{
        width: 26px;
        height: 28px;
    }
    &:hover:before, &:hover:after{
        height: 28px;
    }
    &:before, &:after {
        content: '';
        height: 24px;
        border-left: 3px solid ${({theme}) => theme.colors.content.theme};
        position: absolute;
        left: 12px;
        top: -1px;
    }
    &:before {
        transform: rotate(-45deg);
    }
    &:after {
        transform: rotate(45deg);
    }
`;

export const CalcFormAddInput = styled.div`
    cursor: pointer;
    padding: 6px 5px;
    margin: 0 5px 0 0;
    color: ${({theme}) => theme.colors.content.fontPrimary};
    font-size: 1.6em;
    &:hover{
        font-size: 1.7em;
    }
`;

export const CalcFormButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
    padding: 0 5px;
`;

export const CalcFormButton = styled.button<ButtonProps>`
    font-size: 1.1em;
    padding: 6px 8px;
    box-shadow: 0 0 5px #000;
    outline: none;
    border: none;
    background-color: ${(props) => props.active ? props.theme.colors.content.fontSecondary : props.theme.colors.content.theme};
    color: ${(props) => props.active ? props.theme.colors.content.theme : props.theme.colors.content.fontSecondary};
    border-radius: 3px;
    cursor: pointer;
    transition: .25s;
    &:hover{
        background-color: ${({theme}) => theme.colors.content.themeHover};
        color: ${({theme}) => theme.colors.content.fontSecondary};
    }
    @media(max-width: ${({theme}) => theme.mobileFontSize}){
        font-size: 0.8em;
    }
`;

export const CalcFormsSelect = styled(Select)`
    padding: 0 5px;
    margin: 5px auto;
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