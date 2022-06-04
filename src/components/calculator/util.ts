import {useContext} from "react";
import {ThemeContext} from "styled-components";

import names from '@structures/names';

export interface FormData{
    [key: string]: number;
}

export const initialParties: FormData = {
    'PiS': 43.59,
    'KO': 27.40,
    'Lewica': 12.56,
    'PSL': 8.55,
    'Konfederacja': 6.81
}

export const methodNames = {
    0: 'd\'Hondt',
    1: 'Sainte-Laguë',
    2: 'Hare-Niemeyer'
}

export const titleStrings = {
    0: 'Kalkulacja tylko na podstawie wyniku krajowego',
    1: 'Kalkulacja na podstawie wyniku w okręgach',
    2: 'Kalkulacja na podstawie wyniku krajowego i tendencjach w okręgach'
}

export const convertFormData = (formData: FormData): FormData => {
    if(Object.keys(formData).length > 0){
        const convertedFormData: FormData = {};
        for(const [key, value] of Object.entries(formData)){
            convertedFormData[key] = Number(value);
        }
        return convertedFormData;
    }
    else return null;
}

export const chartColors = {
    'PiS': 'rgba(24,86,161,0.7)',
    'KO': 'rgba(2,175,243,0.7)',
    'Polska2050': 'rgba(249,191,19,0.7)',
    'Lewica': 'rgba(254,1,3,0.7)',
    'PSL': 'rgba(40,210,148,0.7)',
    'Konfederacja': 'rgba(2,31,97,0.7)'
}

export const outlineChartColors = {
    'PiS': '#0e2b56',
    'KO': '#0b7081',
    'Polska2050': '#94720d',
    'Lewica': '#820a13',
    'PSL': '#1c7d59',
    'Konfederacja': '#01133a'
}

export const selectStyles = () => {

    const theme = useContext(ThemeContext);

    return {
        option: (provided, state) => ({
            ...provided,
            background: state.isSelected ? theme.colors.content.theme : theme.colors.content.background,
            color: state.isSelected ? theme.colors.content.fontSecondary : theme.colors.content.fontPrimary,
            padding: 10,
            fontSize: '0.8em',
            cursor: 'pointer'
        }),
        menu: (provided) => ({
            ...provided,
            height: '200px',
            width: 'calc(100% - 10px)',
            background: theme.colors.content.background,
            boxShadow: `0 0 5px ${theme.colors.content.fontPrimary}`
        }),
        menuList: (provided) => ({
            ...provided,
            maxHeight: '200px'
        })
    }
}

export const calcCustomOptions = () => {
    const options = [];
    options.push({label: "Domyślne wyniki", value: "default"});
    for(let i = 1; i <= 41; i++){
        options.push({label: `Okręg nr ${i} - ${names[i]}`, value: i});
    }
    return options;
}