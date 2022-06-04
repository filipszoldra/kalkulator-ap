import React, {FC} from 'react';
import {Props, CalcForm, CalcFormInputContainer,
    CalcFormInputTitle, CalcFormInput} from './CalcFormsStyle';
import {FormData, initialParties, convertFormData} from '../util';
import {CalcFormsMethodChanger, CalcFormsSubmitButtons, CalcFormsTitles} from './CalcFormsComponents';

import {useForm} from 'react-hook-form';

import {useCalcStoreContext} from '@store/calcStore';
import {calculateWithAnalisys} from '@store/calcStore/reducer';

const CalcAnalisysForm: FC<Props> = ({active}) => {

    const {register, handleSubmit} = useForm<FormData>();
    const {dispatch} = useCalcStoreContext();

    const onSubmit = handleSubmit((formData: FormData) => {
        dispatch(calculateWithAnalisys(convertFormData(formData)));
    })

    const renderInputs = Object.entries(initialParties).map(([name, number]) => {
        return(
            <CalcFormInputContainer key={`${name}-container`}>
                <CalcFormInputTitle key={`${name}-title`}>{name}</CalcFormInputTitle>
                <CalcFormInput step={0.01} key={`${name}-input`} ref={register} name={name} type={'number'} defaultValue={number}/>
            </CalcFormInputContainer>
        )
    })

    return(
        <CalcForm active={active} onSubmit={onSubmit}>
            <CalcFormsTitles number={2}/>
            <CalcFormsMethodChanger/>
            {renderInputs}
            <CalcFormsSubmitButtons/>
        </CalcForm>
    )
}

export default CalcAnalisysForm;