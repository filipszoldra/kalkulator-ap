import React, {FC, useState, useRef} from 'react';
import {FormData, initialParties, convertFormData} from '../util';
import {Props, CalcForm, CalcFormInputContainer,
    CalcFormInputTitle, CalcFormInput, CalcFormDeleteInput, CalcFormAddInput} from './CalcFormsStyle';
import {CalcFormsMethodChanger, CalcFormsSubmitButtons, CalcFormsTitles} from './CalcFormsComponents';

import {useForm} from 'react-hook-form';

import {useCalcStoreContext} from '@store/calcStore';
import {calculateStandard} from '@store/calcStore/reducer';

const CalcStandardForm: FC<Props> = ({active}) => {

    const [parties, setParties] = useState<FormData>({...initialParties});
    const {dispatch} = useCalcStoreContext();

    const { register, handleSubmit } = useForm<FormData>();
    const addPartyInput = useRef<HTMLInputElement>(null);

    const onSubmit = handleSubmit((formData: FormData) => {
        const convertedFormData = convertFormData(formData);
        if (convertedFormData !== null) dispatch(calculateStandard(convertedFormData));
    })

    const deleteParty = (key: string) => {
        delete parties[key];
        setParties({...parties});
    }

    const addParty = () => {
        if(addPartyInput && addPartyInput.current.value.trim() !== ""){
            const key = addPartyInput.current.value;
            if(!parties[key]){
                parties[key] = 0;
                addPartyInput.current.value = '';
                setParties({...parties});
            }
        }
    }

    const renderInputs = Object.entries(parties).map(([name, number]) => {
        return(
            <CalcFormInputContainer key={`${name}-container`}>
                <CalcFormInputTitle key={`${name}-title`}>{name}</CalcFormInputTitle>
                <CalcFormInput step={0.01} key={`${name}-input`} ref={register({min: 1})} name={name} type={'number'} defaultValue={number}/>
                <CalcFormDeleteInput key={`${name}-delete`} onClick={() => deleteParty(name)}/>
            </CalcFormInputContainer>
        )
    })

    return(
        <CalcForm active={active} onSubmit={onSubmit}>
            <CalcFormsTitles number={0}/>
            <CalcFormsMethodChanger/>
            <CalcFormInputContainer>
                <CalcFormInputTitle>Nazwa partii:</CalcFormInputTitle>
                <CalcFormInput ref={addPartyInput} name={'addParty'} type={'text'}/>
                <CalcFormAddInput onClick={addParty}>+</CalcFormAddInput>
            </CalcFormInputContainer>
            {renderInputs}
            <CalcFormsSubmitButtons/>
        </CalcForm>
    )
}

export default CalcStandardForm;