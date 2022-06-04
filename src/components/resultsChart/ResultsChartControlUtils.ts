import {useContext} from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Elections} from '@structures/index';
import { ThemeContext } from 'styled-components';

export const chartToPng = (chartRef: Doughnut) => {
    if(chartRef){
        const download = document.createElement('a');
        download.href = chartRef.chartInstance.toBase64Image();
        download.download = 'wyniki.png';
        download.click();
        download.remove();
    }
}

export const optionsValuesConfig = {
    partyOutline: {
        value: 'partyOutline',
        label: 'Obramowanie'
    },
    partyBackground: {
        value: 'partyBackground',
        label: 'Tło'
    },
    canvasBackground: {
        value: 'canvasBackground',
        label: 'Tło wykresu'
    },
    legendFontColor: {
        value: 'legendFontColor',
        label: 'Kolor czcionki legendy'
    },
    chartFontColor: {
        value: 'labelFontColor',
        label: 'Kolor czcionki wykresu'
    }
}

interface InputsConfig{
    key: string;
    title: string;
    type: string;
    defaultValue: any;
}

export const inputsConfig: (arg: any) => InputsConfig[] = (chartInstance: any) => ([
    {
        key: 'chartLegendFontSize',
        title: 'Rozmiar czcionki legendy',
        type: 'number',
        defaultValue: chartInstance.options.legend.labels.fontSize
    },
    {
        key: 'chartFontSize',
        title: 'Rozmiar czcionki wykresu',
        type: 'number',
        defaultValue: chartInstance.options.plugins.datalabels.font.size
    },
    {
        key: 'chartOutlineSize',
        title: 'Grubość obramowania partii',
        type: 'number',
        defaultValue: chartInstance.data.datasets[0].borderWidth
    }
]);

export const inputsKeys = {
    chartLegendFontSize: 'chartLegendFontSize',
    chartFontSize: 'chartFontSize',
    chartOutlineSize: 'chartOutlineSize'
}

export const useSelectOptions = (controller: Elections) => {
    const options = [];
    options.push({value: optionsValuesConfig.canvasBackground.value, label: optionsValuesConfig.canvasBackground.label});
    options.push({value: optionsValuesConfig.chartFontColor.value, label: optionsValuesConfig.chartFontColor.label});
    options.push({value: optionsValuesConfig.legendFontColor.value, label: optionsValuesConfig.legendFontColor.label});
    Object.keys(controller.results.seats).forEach((key) => {
        options.push({value: `${key}-${optionsValuesConfig.partyOutline.value}`, label: `${optionsValuesConfig.partyOutline.label} - ${key}`});
        options.push({value: `${key}-${optionsValuesConfig.partyBackground.value}`, label: `${optionsValuesConfig.partyBackground.label} - ${key}`});
    });
    return options;
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
            background: theme.colors.content.background,
            boxShadow: `0 0 5px ${theme.colors.content.fontPrimary}`
        }),
        menuList: (provided) => ({
            ...provided,
            maxHeight: '200px'
        })
    }
}

export interface InputsValues{
    [key: string]: any;
}

export const inputsValues: (arg: any) => InputsValues = (config: InputsConfig[]) => {
    const returnObj: InputsValues = {};
    config.map(input => returnObj[input.key] = input.defaultValue);
    return returnObj;
}

export interface SwtichConfig{
    percentageValues: boolean;
    disableLegend: boolean;
}