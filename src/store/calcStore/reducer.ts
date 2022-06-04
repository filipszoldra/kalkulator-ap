import {StringNumberObject, CustomElection} from '@structures/types';
import {Store} from './store';

export type ActionsType =  'CALCULATE_STANDARD' | 'CALCULATE_CUSTOM' | 'CALCULATE_WITH_ANALYSIS' | 'CHANGE_METHOD' | 'SET_ACTIVE_DISTRICT';

interface Actions{
    CALCULATE_STANDARD: 'CALCULATE_STANDARD';
    CALCULATE_CUSTOM: 'CALCULATE_CUSTOM';
    CALCULATE_WITH_ANALYSIS: 'CALCULATE_WITH_ANALYSIS';
    CHANGE_METHOD: 'CHANGE_METHOD';
    SET_ACTIVE_DISTRICT: 'SET_ACTIVE_DISTRICT';
}

const actions: Actions = {
    CALCULATE_STANDARD: 'CALCULATE_STANDARD',
    CALCULATE_CUSTOM: 'CALCULATE_CUSTOM',
    CALCULATE_WITH_ANALYSIS: 'CALCULATE_WITH_ANALYSIS',
    CHANGE_METHOD: 'CHANGE_METHOD',
    SET_ACTIVE_DISTRICT: 'SET_ACTIVE_DISTRICT'
}

export interface ActionObject{
    type: ActionsType;
    value: any;
}

export const calculateStandard = (data: StringNumberObject): ActionObject => ({
    type: actions.CALCULATE_STANDARD, value: data
} as ActionObject);

export const calculateCustom = (data: CustomElection): ActionObject => ({
    type: actions.CALCULATE_CUSTOM, value: data
} as ActionObject);

export const calculateWithAnalisys = (data: StringNumberObject): ActionObject => ({
    type: actions.CALCULATE_WITH_ANALYSIS, value: data
} as ActionObject);

export const changeMethod = (data: 0 | 1 | 2): ActionObject => ({
   type: actions.CHANGE_METHOD, value: data
} as ActionObject);

export const setActiveDistrict = (data: number): ActionObject => ({
    type: actions.SET_ACTIVE_DISTRICT, value: data
} as ActionObject);

const CalcReducer = (state: Store, action: ActionObject) => {
    switch(action.type){
        case actions.CALCULATE_STANDARD:
            return {
                ...state,
                electionData: {...action.value},
                electionResults: {...state.controller.calculateStandard(action.value)}
            };
        case actions.CALCULATE_CUSTOM:
            return {
                ...state,
                electionData: {...action.value},
                electionResults: {...state.controller.calculateWithCustomData(action.value.default, action.value.districts)}
            };
        case actions.CALCULATE_WITH_ANALYSIS:
            return {
                ...state,
                electionData: {...action.value},
                electionResults: {...state.controller.calculateWithAnalisys(action.value)}
            }
        case actions.CHANGE_METHOD:
            state.controller.method = action.value;
            return {
                ...state
            }
        case actions.SET_ACTIVE_DISTRICT:
            return {
                ...state,
                activeDistrict: action.value
            }
        default:
            return state;
    }
}

export default CalcReducer;
