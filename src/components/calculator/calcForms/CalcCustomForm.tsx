import React, {FC, useEffect, useState} from 'react';
import {Props, CalcForm, CalcFormTitle, CalcFormInputContainer,
    CalcFormInputTitle, CalcFormInput, CalcFormsSelect} from './CalcFormsStyle';
import {CalcFormsSubmitButtons, CalcFormsTitles} from './CalcFormsComponents';
import {selectStyles, calcCustomOptions, initialParties, FormData, convertFormData} from '../util';

import {useForm} from 'react-hook-form';

import {calculateCustom} from "@store/calcStore/reducer";
import {useCalcStoreContext} from "@store/calcStore";

interface CustomOptions{
    [key: number]: FormData;
}

const CalcCustomForm: FC<Props> = ({active}) => {

    const {register, handleSubmit} = useForm<FormData>();
    const {dispatch} = useCalcStoreContext();

    const [selected, setSelected] = useState<string | number>("default");
    const [defaultOptions, setDefaultOptions] = useState<FormData>(initialParties);
    const [customOptions, setCustomOptions] = useState<CustomOptions>({});

    const onSubmit = handleSubmit(() => {
        for(let i = 1; i <= 41; i++){
            if(customOptions[i]){
                Object.keys(initialParties).map(key => {
                    if(!customOptions[i][key]) customOptions[i][key] = initialParties[key];
                });
            }
        }
        setCustomOptions({...customOptions});
        console.log({default: defaultOptions, districts: customOptions})
        dispatch(calculateCustom({default: defaultOptions, districts: customOptions}));
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;
        if(selected === "default"){
            defaultOptions[name] = Number(value);
            setDefaultOptions({...defaultOptions})
        }
        else{
            if(!customOptions[selected]) customOptions[selected] = {};
            customOptions[selected][name] = Number(value);
            setCustomOptions({...customOptions});
        }
    }

    const renderInputs = Object.entries(defaultOptions).map(([name, number]) => {
        return(
            <CalcFormInputContainer key={`${name}-${selected}-container`}>
                <CalcFormInputTitle key={`${name}-${selected}}-title`}>{name}</CalcFormInputTitle>
                <CalcFormInput
                    step={0.01}
                    key={`${name}-${selected}-input`}
                    onChange={onChange}
                    name={name}
                    type={'number'}
                    defaultValue={customOptions[selected] && customOptions[selected][name] ? Number(customOptions[selected][name]) : number}
                />
            </CalcFormInputContainer>
        )
    })

    return(
        <CalcForm active={active} onSubmit={onSubmit}>
            <CalcFormsTitles number={1}/>
            <CalcFormsSelect
                styles={selectStyles()}
                defaultValue={{label: "Domyślne wyniki", value: "default"}}
                options={calcCustomOptions()}
                onChange={e => setSelected(e.value)}
            />
            {renderInputs}
            <CalcFormsSubmitButtons/>
        </CalcForm>
    )
}


export default CalcCustomForm;