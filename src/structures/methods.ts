import {StringNumberObject} from './types';

interface Points{
    party: string;
    points: number;
}

export default class Methods{
    static dHondt = (parties: StringNumberObject, mandates: number): StringNumberObject => {
        const results: StringNumberObject = {};
        const points: Points[] = [];
        for(const key in parties){
            results[key] = 0;
        }
        for(const [key, value] of Object.entries(parties)){
            for(let i = 0; i < mandates; i++){
                points.push({party: key, points: value/(i+1)});
            }
        }
        points.sort((a, b) => b.points - a.points);
        for(let i = 0; i < mandates; i++){
            results[points[i].party]++;
        }
        return results;
    }
    static sainteLague = (parties: StringNumberObject, mandates: number): StringNumberObject => {
        const results: StringNumberObject = {};
        const points: Points[] = [];
        for(const key in parties){
            results[key] = 0;
        }
        for(const [key, value] of Object.entries(parties)){
            for(let i = 0; i < mandates; i++){
                points.push({party: key, points: value/(2*i+1)});
            }
        }
        points.sort((a, b) => b.points - a.points);
        for(let i = 0; i < mandates; i++){
            results[points[i].party]++;
        }
        return results;
    }
    static hareNiemeyer = (parties: StringNumberObject, mandates: number): StringNumberObject => {
        const results: StringNumberObject = {};
        const points: Points[] = [];
        let currentMandates = mandates;
        let total = 0;
        for(const key in parties){
            results[key] = 0;
            total += parties[key];
        }
        for(const [key, value] of Object.entries(parties)){
            const partyQuouta = Math.round((mandates * value/total) * 100)/100;
            const partyRemainder = Math.round((partyQuouta % 1) * 100)/100;
            const partySeats = Math.round(partyQuouta - partyRemainder);
            results[key] = partySeats;
            currentMandates -= partySeats;
            points.push({party: key, points: partyRemainder});
        }
        points.sort((a, b) => b.points - a.points);
        for(let i = 0; i < currentMandates; i++){
            results[points[i].party]++;
        }
        return results;
    }
}