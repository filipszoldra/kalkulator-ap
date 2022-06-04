import React, {FC, useEffect, useState, useContext} from 'react';
import { ThemeContext } from 'styled-components';
import {Doughnut} from 'react-chartjs-2';
import {RgbaColor} from "react-colorful";
import {ResultsChartButton, ResultsChartControlCore, ResultsChartControlColumn,
    ResultsChartControlRow, ResultsChartControlSelect, ResultsChartColorPicker,
    ResultsChartInput, ResultsChartInputTitle, MySwitch} from './ResultsChartStyle';
import {chartToPng, optionsValuesConfig, inputsConfig,
    useSelectOptions, selectStyles, inputsValues, InputsValues,
    inputsKeys, SwtichConfig} from './ResultsChartControlUtils';


import {useCalcStoreContext} from '@store/calcStore';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


interface Props{
    chartRef: Doughnut;
}

const ResultsChartControl: FC<Props> = ({chartRef}) => {

    const Switch = MySwitch(useContext(ThemeContext));

    const {controller} = useCalcStoreContext();

    const [color, setColor] = useState<RgbaColor>({r: 255, g: 255, b: 255, a: 1});
    const [selected, setSelected] = useState<string>(optionsValuesConfig.canvasBackground.value);
    const [otherOptions, setOtherOptions] = useState<InputsValues>(inputsValues(inputsConfig(chartRef.chartInstance)));
    const [switchState, setSwitchState] = useState<SwtichConfig>({percentageValues: false, disableLegend: false});

    const options = useSelectOptions(controller);

    useEffect(() => {
        setColor({r: 255, g: 255, b: 255, a: 0});    
    }, [null]);

    useEffect(() => {
        const chartInstance = chartRef.chartInstance;
        if(selected === optionsValuesConfig.canvasBackground.value){
            chartInstance.options.backgroundColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
            chartInstance.ctx.canvas.style.background = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
        }
        if(selected === optionsValuesConfig.legendFontColor.value){
            chartInstance.options.legend.labels.fontColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
        }
        if(selected === optionsValuesConfig.chartFontColor.value){
            chartInstance.options.plugins.datalabels.color = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
        }
        if(selected.split('-')[1] === optionsValuesConfig.partyBackground.value){
            const key = selected.split('-')[0];
            const keyIndex = chartInstance.data.labels.indexOf(key);
            chartInstance.data.datasets[0].backgroundColor[keyIndex] = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
        }
        if(selected.split('-')[1] === optionsValuesConfig.partyOutline.value){
            const key = selected.split('-')[0];
            const keyIndex = chartInstance.data.labels.indexOf(key);
            chartInstance.data.datasets[0].borderColor[keyIndex] = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
        }
        Object.entries(otherOptions).map(([key, value]) => {
            if(key === inputsKeys.chartLegendFontSize) chartInstance.options.legend.labels.fontSize = value;
            if(key === inputsKeys.chartFontSize) chartInstance.options.plugins.datalabels.font.size = value;
            if(key === inputsKeys.chartOutlineSize) chartInstance.data.datasets[0].borderWidth = value;
        });
        chartInstance.legend.options.display = !switchState.disableLegend;
        chartInstance.options.plugins.datalabels.formatter = switchState.disableLegend ?
            (value, context) => `${context.chart.data.labels[context.dataIndex]}: ${value}${switchState.percentageValues ? '%' : ''}`
            : (value, context) => `${value}${switchState.percentageValues ? '%' : ''}`;
        chartInstance.data.datasets[0].data = switchState.percentageValues ? Object.values(controller.results.percentages) : Object.values(controller.results.seats);
        chartInstance.update();
    }, [color, otherOptions, switchState]);

    const renderInputs = inputsConfig(chartRef.chartInstance).map(input => (
        <ResultsChartControlRow key={`${input.key}-container`}>
            <ResultsChartInputTitle key={`${input.key}-title`}>{input.title}</ResultsChartInputTitle>
            <ResultsChartInput
                key={`${input.key}-input`}
                type={input.type}
                defaultValue={input.defaultValue}
                onChange={e => {
                    otherOptions[input.key] = Number(e.currentTarget.value);
                    setOtherOptions({...otherOptions})
                }}
            />
        </ResultsChartControlRow>
    ));

    return(
        <ResultsChartControlCore>
            <ResultsChartControlColumn>
                <ResultsChartControlRow>
                    <ResultsChartControlSelect
                        styles={selectStyles()}
                        defaultValue={{ label: optionsValuesConfig.canvasBackground.label, value: optionsValuesConfig.canvasBackground.value }} 
                        onChange={e => setSelected(e.value)}
                        options={options}
                    />
                </ResultsChartControlRow>
                {renderInputs}
                <ResultsChartControlRow>
                    <FormControl>
                        <FormGroup>
                            <ResultsChartControlRow>
                                <FormControlLabel
                                    control={<Switch checked={switchState.percentageValues}
                                    onChange={e => setSwitchState({...switchState, percentageValues: e.currentTarget.checked})}
                                    />}
                                    label={'Wyniki procentowe'}
                                />
                                <FormControlLabel
                                    control={<Switch checked={switchState.disableLegend}
                                    onChange={e => setSwitchState({...switchState, disableLegend: e.currentTarget.checked})}
                                    />}
                                    label={'Wyłącz legendę'}
                                />
                            </ResultsChartControlRow>
                        </FormGroup>
                    </FormControl>
                </ResultsChartControlRow>
            </ResultsChartControlColumn>
            <ResultsChartControlColumn>
                <ResultsChartControlRow>
                    <ResultsChartColorPicker color={color} onChange={changeColor => setColor({...changeColor})}/>
                </ResultsChartControlRow>
                <ResultsChartButton onClick={() => chartToPng(chartRef)}>Pobierz jako .png</ResultsChartButton>
            </ResultsChartControlColumn>
        </ResultsChartControlCore>
    )
}

export default ResultsChartControl;