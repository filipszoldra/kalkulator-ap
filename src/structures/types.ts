import District from './district';

export interface NumberNumberObject{
    [key: number]: number;
}

export interface NumberStringObject{
    [key: number]: string;
}

export interface StringNumberObject{
    [key: string]: number;
}

export interface Models{
    [key: string]: NumberNumberObject;
}

export interface CustomData{
    [key: number]: StringNumberObject;
}

export interface CustomElection{
    default: StringNumberObject;
    districts: CustomData;
}

export interface Results{
    seats: StringNumberObject,
    percentages: StringNumberObject,
    seatsPercentages: StringNumberObject,
}

export interface DistrictList{
    [key: number]: District;
}