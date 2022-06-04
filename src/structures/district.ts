import {StringNumberObject, Results} from './types';
import Methods from './methods';
import mandates from './mandates';
import names from './names';

export default class District{
    public id: number;
    public name: string;
    public mandates: number;
    public parties: StringNumberObject;
    private _results: Results;
    constructor(id: number, parties: StringNumberObject){
        this.id = id;
        this.name = names[this.id];
        this.mandates = mandates[this.id];
        this.parties = parties;
        this._results = {
            seats:{},
            percentages:{},
            seatsPercentages:{}
        };
    }

    get results(){
        return this._results;
    }
    //0 - dHondt, 1 - sainteLague, 2 - hareNiemeyer
    calculate = (method: 0 | 1 | 2): Results => {
        let sum = 0;
        const parties: StringNumberObject = {};
        const results: Results = {
            percentages: parties,
            seats: {},
            seatsPercentages: {}
        }
        for(const [, value] of Object.entries(this.parties)){
            sum += value;
        }
        for(const [key, value] of Object.entries(this.parties)){
            parties[key] = Math.round(value * 10000/sum)/100;
        }
        if(this.id === 21) parties['MN'] = sum * 0.08;
        if (method === 0) results.seats = Methods.dHondt(parties, this.mandates);
        if (method === 1) results.seats = Methods.sainteLague(parties, this.mandates);
        if (method === 2) results.seats = Methods.hareNiemeyer(parties, this.mandates);
        for(const [key, value] of Object.entries(results.seats)){
            results.seatsPercentages[key] = Math.round(value * 10000/this.mandates)/100;
        }
        this._results = results;
        return results;
    }
}