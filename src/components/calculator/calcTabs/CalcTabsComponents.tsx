import React, {FC} from 'react';
import {CalcTabsSwitch, CalcTabsSwitchButton, CalcTabsContainer, CalcTabsMapContainer, CalcTabsChosenDistrict} from './CalcTabsStyle';

import CalcForms from '@components/calculator/calcForms';
import SvgMap from '@components/svgMap';
import {useCalcStoreContext} from '@store/calcStore';
import names from '@structures/names';

interface CalcTabsSwitchProps{
    activeForm: number;
    setActiveForm: React.Dispatch<React.SetStateAction<number>>;
}

interface CalcTabsFormsProps{
    activeForm: number;
}

export const CalcTabsSwitchComponent: FC<CalcTabsSwitchProps> = ({activeForm, setActiveForm}) => {
    return(
        <CalcTabsSwitch>
            <CalcTabsSwitchButton active={activeForm === 0} onClick={() => setActiveForm(0)}>
                <span>Wynik krajowy</span>
            </CalcTabsSwitchButton>
            <CalcTabsSwitchButton active={activeForm === 1} onClick={() => setActiveForm(1)}>
                <span>Okręgi</span>
            </CalcTabsSwitchButton>
            <CalcTabsSwitchButton active={activeForm === 2} onClick={() => setActiveForm(2)}>
                <span>Tendencje</span>
            </CalcTabsSwitchButton>
        </CalcTabsSwitch>
    )
}

export const CalcTabsForms: FC<CalcTabsFormsProps> = ({activeForm}) => {

    const {activeDistrict} = useCalcStoreContext();

    return(
        <CalcTabsContainer>
            <CalcTabsMapContainer>
                <SvgMap/>
                <CalcTabsChosenDistrict>Wybrany okręg nr {activeDistrict} - {names[activeDistrict]}</CalcTabsChosenDistrict>
            </CalcTabsMapContainer>
            <CalcForms activeForm={activeForm}/>
        </CalcTabsContainer>
    )
}