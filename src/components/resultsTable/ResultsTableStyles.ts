import styled from 'styled-components';

export const ResultsTableOverflowContainer = styled.div`
    width: 100%;
    overflow-x: auto;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background: ${({theme}) => theme.colors.content.themeHover};
        border-radius: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.colors.content.background};
        border-radius: 6px;
        border: 3px solid ${({theme}) => theme.colors.content.themeHover};
    }
`;

export const ResultsTableCore = styled.table`
    width: 100%;
    border-radius: 3px;
    padding: 10px;
    margin: 20px 0;
    border: 3px ${({theme}) => theme.colors.content.theme} solid;
    border-collapse: collapse;
`;

export const ResultsTableText = styled.h1`
    margin: 0 auto;
    width: 100%;
    margin: 20px 0 0 0;
    padding: 20px 10px;
    text-align: center;
    font-size: 1em;
    border: 2px ${({theme}) => theme.colors.content.theme} solid;
    border-radius: 3px;
    @media(max-width: 450px){
        font-size: 0.85em;
    }
`;

export const ResultsTableHeading = styled.tr`
    background-color: ${({theme}) => theme.colors.content.theme};
    color: ${({theme}) => theme.colors.content.fontSecondary};
    & > th{
        text-align: center;
        padding: 3px 4px;
        font-size: 0.7em;
    }
`;

export const ResultsTableRow = styled.tr`
    color: ${({theme}) => theme.colors.content.fontPrimary};
    border-bottom: 2px ${({theme}) => theme.colors.content.theme} solid;
    & > td{
        text-align: center;
        padding: 3px 4px;
        font-size: 0.7em;
    }
`;


