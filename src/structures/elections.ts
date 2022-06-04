import District from './district';
import {DistrictList, Results, StringNumberObject, CustomData} from './types';
import models from './models';

const toPercentageValue = (value: number, sum: number) => Math.round((value* 10000/sum))/100;

export default class Elections{
    private _results: Results;
    private readonly _districtList: DistrictList;
    private _method: 0 | 1 | 2;

    constructor(method: 0 | 1 | 2){
        this._method = method;
        this._results = {
            percentages: {},
            seats: {},
            seatsPercentages: {}
        };
        this._districtList = {};
    }

    set method(method: 0 | 1 | 2){
        this._method = method;
    }

    get method(){
        return this._method;
    }

    get results(){
        return this._results;
    }

    get districtList(){
        return this._districtList;
    }

    calculateStandard = (countryStats: StringNumberObject) => {
        this._results = {
            percentages: {},
            seats: {},
            seatsPercentages: {}
        };
        for(let i = 1; i <= 41; i++){
            const statsWithStep = {};
            for(const [key, value] of Object.entries(countryStats)){
                value < 5 ? statsWithStep[key] = 0 : statsWithStep[key] = value;
            }
            const district = new District(i, statsWithStep);
            const districtResults = district.calculate(this._method);
            this._districtList[i] = district;
            for(const [key, value] of Object.entries(districtResults.seats)){
                this._results.seats[key] ? this._results.seats[key] += value : this._results.seats[key] = value;
            }
        }
        let votesSum = 0;
        for(const value of Object.values(countryStats)){
            votesSum += value;
        }
        for(const [key, value] of Object.entries(countryStats)){
            this._results.percentages[key] = toPercentageValue(value, votesSum);
        }
        for(const [key, value] of Object.entries(this._results.seats)){
            this._results.seatsPercentages[key] = toPercentageValue(value, 460);
        }
        return this._results;
    }
    calculateWithCustomData = (defaultStats: StringNumberObject, customStats: CustomData) => {
        this._results = {
            percentages: {},
            seats: {},
            seatsPercentages: {}
        };
        const statsWithSteps: CustomData = {};
        const partiesVotesSum: StringNumberObject = {};
        let votesSum = 0;
        for(let i = 1; i <= 41; i++){
            for(const [key, value] of Object.entries(defaultStats)){
                if(customStats[i]){
                    votesSum += customStats[i][key];
                    partiesVotesSum[key] ? partiesVotesSum[key] += customStats[i][key] : partiesVotesSum[key] = customStats[i][key];
                }
                else{
                    votesSum += value;
                    partiesVotesSum[key] ? partiesVotesSum[key] += value :partiesVotesSum[key] = value;
                }
            }
            statsWithSteps[i] = {};
        }
        for(const [key, value] of Object.entries(partiesVotesSum)){
            this._results.percentages[key] = toPercentageValue(value, votesSum);
            if(partiesVotesSum[key]/votesSum < 0.05){
                for(let i = 1; i <= 41; i++){
                    statsWithSteps[i][key] = 0;
                }
            }
            else{
                for(let i = 1; i <= 41; i++){
                    customStats[i] ? statsWithSteps[i][key] = customStats[i][key] : statsWithSteps[i][key] = defaultStats[key];
                }
            }
        }
        for(let i = 1; i <= 41; i++){
            const district = new District(i, statsWithSteps[i]);
            const districtResults = district.calculate(this._method);
            this._districtList[i] = district;
            console.log(district);
            for(const [key, value] of Object.entries(districtResults.seats)){
                this._results.seats[key] ? this._results.seats[key] += value : this._results.seats[key] = value;
            }
        }
        for(const [key, value] of Object.entries(this._results.seats)){
            this._results.seatsPercentages[key] = toPercentageValue(value, 460);
        }
        for(const [key, value] of Object.entries(partiesVotesSum)){
            this._results.percentages[key] = toPercentageValue(value, votesSum);
        }
        return this._results;
    }
    calculateWithAnalisys = (countryStats: StringNumberObject) => {
        this._results = {
            percentages: {},
            seats: {},
            seatsPercentages: {}
        };
        let votesSum = 0;
        const partiesVotesSum: StringNumberObject = {};
        for(let i = 1; i <= 41; i++){
            const statsWithAnalisys = {};
            for(const [key, value] of Object.entries(countryStats)){
                const analysedValue = models[key.toLowerCase()] ? value * models[key.toLowerCase()][i] : value;
                partiesVotesSum[key] ? partiesVotesSum[key] += analysedValue : partiesVotesSum[key] = analysedValue;
                value < 5 ? statsWithAnalisys[key] = 0 : statsWithAnalisys[key] = analysedValue;
                votesSum += analysedValue;
            }
            const district = new District(i, statsWithAnalisys);
            const districtResults = district.calculate(this._method);
            this._districtList[i] = district;
            for(const [key, value] of Object.entries(districtResults.seats)){
                this._results.seats[key] ? this._results.seats[key] += value : this._results.seats[key] = value;
            }
        }
        for(const [key, value] of Object.entries(partiesVotesSum)){
            this._results.percentages[key] = toPercentageValue(value, votesSum);
        }
        for(const [key, value] of Object.entries(this._results.seats)){
            this._results.seatsPercentages[key] = toPercentageValue(value, 460);
        }
        return this._results;
    }
}