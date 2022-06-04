import React, {FC, useEffect, useContext, useState} from 'react';
import {ResultsChartCore} from './ResultsChartStyle';
import {Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ThemeContext } from 'styled-components';
import ResultsChartControl from './ResultsChartControl';


import {useCalcStoreContext} from '@store/calcStore';

interface Colors{
    [key: string]: string;
}

interface Props{
    initialColors: Colors;
    initialOutlineColors: Colors;
}

const ResultsChart: FC<Props> = ({initialColors, initialOutlineColors}) => {

    const [chartRef, setChartRef] = useState<Doughnut>(null);

    const {controller} = useCalcStoreContext();
    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        Chart.plugins.register(ChartDataLabels);
        Chart.plugins.register({
            beforeDraw: chartInstance => {
                const {backgroundColor} = chartInstance.chart.options;
                if(backgroundColor){
                    const ctx = chartInstance.chart.ctx;
                    const canvas = chartInstance.chart.canvas;
                    ctx.fillStyle = backgroundColor;
                    ctx.fillRect(0, 0, canvas.width, canvas.height)
                }
            }
        });
    }, [null]);

    const data = {
        labels: Object.keys(controller.results.seats).map(key => key),
        datasets: [
            {
                label: '# of Votes',
                data: Object.values(controller.results.seats).map(value => value),
                backgroundColor: Object.keys(controller.results.seats)
                    .map(key => initialColors[key] ? initialColors[key] : '#bebeb6'),
                borderColor: Object.keys(controller.results.seats)
                    .map(key => initialOutlineColors[key] ? initialOutlineColors[key] : '#5f5f5b'),
                borderWidth: 1,
            }
        ],
    }

    const options = {
        rotation: Math.PI,
        circumference: Math.PI,
        plugins: {
            datalabels: {
                color: themeContext.colors.content.fontPrimary,
                padding: '0',
                backgroundColor: 'transparent',
                offset: 0,
                align: 'top',
                anchor: 'center',
                display: context => context.dataset.hidden,
                clamping: true,
                font: {
                    size: 12
                }
           },
        },
        legend: {
            labels: {
                fontColor: themeContext.colors.content.fontPrimary,
                fontSize: 14
            }
        }
    }

    if(Object.keys(controller.results.seats).length > 0) return(
        <ResultsChartCore>
            <Doughnut data={data} options={options} ref={ref => setChartRef(ref)}/>
            {chartRef ? <ResultsChartControl chartRef={chartRef}/> : null}
        </ResultsChartCore>
    )
    else return(
        <>
        </>
    )
}

export default ResultsChart;