import React, {FC} from 'react';
import {CalcFormsCore} from './CalcFormsStyle';

import CalcStandardForm from './CalcStandardForm';
import CalcCustomForm from './CalcCustomForm';
import CalcAnalysisForm from './CalcAnalysisForm';

interface Props{
    activeForm: number;
}

const CalcForms: FC<Props> = ({activeForm}) => {
    return(
        <CalcFormsCore>
            <CalcStandardForm active={activeForm === 0}/>
            <CalcCustomForm active={activeForm === 1}/>
            <CalcAnalysisForm active={activeForm === 2}/>
        </CalcFormsCore>
    )
}

export default CalcForms;