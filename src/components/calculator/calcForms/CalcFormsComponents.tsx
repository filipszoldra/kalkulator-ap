import React, {FC} from 'react';
import {CalcFormButtonContainer, CalcFormButton, CalcFormTitle} from './CalcFormsStyle';
import {titleStrings, methodNames} from '../util';

import {useCalcStoreContext} from '@store/calcStore';
import {changeMethod} from '@store/calcStore/reducer';

export const CalcFormsSubmitButtons: FC = () => {
    return(
        <CalcFormButtonContainer>
            <CalcFormButton type={'submit'}>Pokaż wyniki</CalcFormButton>
            <CalcFormButton type={'reset'}>Resetuj dane</CalcFormButton>
        </CalcFormButtonContainer>
    )
}

export const CalcFormsMethodChanger: FC = () => {

    const {dispatch, controller} = useCalcStoreContext();

    return(
        <CalcFormButtonContainer>
            <CalcFormButton active={controller.method === 0} onClick={() => dispatch(changeMethod(0))} type={'button'}>d'Hondt</CalcFormButton>
            <CalcFormButton active={controller.method === 1} onClick={() => dispatch(changeMethod(1))} type={'button'}>Sainte-Laguë</CalcFormButton>
            <CalcFormButton active={controller.method === 2} onClick={() => dispatch(changeMethod(2))} type={'button'}>Hare-Niemeyer</CalcFormButton>
        </CalcFormButtonContainer>
    )
}

export const CalcFormsTitles: FC<{number: number;}> = ({number}) => {
    return(
        <CalcFormTitle>{`${titleStrings[number]}`}</CalcFormTitle>
    )
}
