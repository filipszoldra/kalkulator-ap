import React, {FC, useState} from 'react';
import {CalcTabsCore} from './CalcTabsStyle';
import {CalcTabsSwitchComponent, CalcTabsForms} from './CalcTabsComponents';
import {chartColors, outlineChartColors} from '../util';

import ResultsTable from '@components/resultsTable';
import ResultsChart from '@components/resultsChart';

const CalcTabs: FC = () => {

    const [activeForm, setActiveForm] = useState<number>(0);

    return(
        <CalcTabsCore>
            <CalcTabsSwitchComponent activeForm={activeForm} setActiveForm={setActiveForm}/>
            <CalcTabsForms activeForm={activeForm}/>
            <ResultsTable/>
            <ResultsChart
                initialColors={chartColors}
                initialOutlineColors={outlineChartColors}
            />
        </CalcTabsCore>
    )
}

export default CalcTabs;