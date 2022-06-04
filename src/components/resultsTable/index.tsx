import React, {FC} from 'react';
import {ResultsTableCore, ResultsTableText, ResultsTableHeading, 
    ResultsTableRow, ResultsTableOverflowContainer} from './ResultsTableStyles';

import {useCalcStoreContext} from '@store/calcStore';

const ResultsTable: FC = () => {

    const {controller, activeDistrict} = useCalcStoreContext();

    const renderHeading = (district: number) => {
        return(
            <thead>
                <ResultsTableHeading>
                    <th key={'th-parties'}>Partie</th>
                    <th key={'th-seats'}>Madaty w sejmie</th>
                    <th key={'th-percentages'}>Procent poparcia w kraju</th>
                    <th key={'th-seatsPercentages'}>Procent mandatów w sejmie</th>
                    <th key={'th-districtSeats'}>Mandaty w okręgu</th>
                    <th key={'th-districtPercentages'}>Procent poparcia w okręgu</th>
                    <th key={'th-districtSeatsPercentages'}>Procent mandatów w okręgu</th>
                </ResultsTableHeading>
            </thead>
        )
    }

    const renderResults = (district: number) => Object.entries(controller.results.percentages).map(([key]) => (
        <ResultsTableRow key={`${key}-row`}>
            <td key={`${key}-name`}>{key}</td>
            <td key={`${key}-seats`}>{controller.results.seats[key]}</td>
            <td key={`${key}-percentages`}>{controller.results.percentages[key]}%</td>
            <td key={`${key}-seatsPercentages`}>{controller.results.seatsPercentages[key]}%</td>
            <td key={`${key}-districtSeats`}>{controller.districtList[district].results.seats[key]}</td>
            <td key={`${key}-districtPercentages`}>{controller.districtList[district].results.percentages[key]}%</td>
            <td key={`${key}-districtSeatsPercentages`}>{controller.districtList[district].results.seatsPercentages[key]}%</td>
        </ResultsTableRow>
    ))

    const viewCondition = controller.districtList[activeDistrict]?.results?.seats &&
    Object.keys(controller.districtList[activeDistrict]?.results?.seats).length > 0;

    return(
        <ResultsTableOverflowContainer>
        {viewCondition ?
        <ResultsTableCore>
            {renderHeading(activeDistrict)}
            <tbody>
            {renderResults(activeDistrict)}
            </tbody>
        </ResultsTableCore> :
        <ResultsTableText>
            Oblicz wyniki i klikaj na okręgi na mapie by pokazały się dane!
        </ResultsTableText>}
        </ResultsTableOverflowContainer>
    )
}

export default ResultsTable;