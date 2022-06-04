import {Elections} from '@structures/index';
import {StringNumberObject, CustomElection, Results} from '@structures/types';
import React from 'react';
import { ActionObject } from './reducer';

const initController = new Elections(0);

export const initElectionData: StringNumberObject = {
    "PiS": 43.59,
    "KO": 27.40,
    "Lewica": 12.56,
    "PSL": 8.55,
    "Konfederacja": 6.81
};

export const initElectionResults: Results = {
    seats: {},
    seatsPercentages: {},
    percentages: {}
};

export interface Store{
    readonly dispatch: React.Dispatch<ActionObject>;
    readonly controller: Elections;
    electionData: StringNumberObject | CustomElection;
    electionResults: Results;
    activeDistrict: number;
};

const initialStore: Store = {
    dispatch: () => null,
    controller: initController,
    electionData: {...initElectionData},
    electionResults: {...initElectionResults},
    activeDistrict: 19
};

export default initialStore;