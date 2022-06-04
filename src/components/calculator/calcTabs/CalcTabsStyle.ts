import styled from 'styled-components';

interface Props{
    active: boolean;
}

export const CalcTabsCore = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 30px 10px;
    margin: 20px 0;
    flex: 1;
    @media(max-width: 1000px){
        max-width: 100%;
    }
    & > *{
        margin: 10px 0;
    }
`;

export const CalcTabsSwitch = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const CalcTabsSwitchButton = styled.div<Props>`
    width: 100%;
    height: 100%;
    padding: 3px 2px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: opacity .25s;
    background-color: ${props => props.active ? props.theme.colors.content.theme : props.theme.colors.content.background};
    color: ${props => props.active ? props.theme.colors.content.fontSecondary : props.theme.colors.content.fontPrimary};
    & > span{
        text-align: center;
    }
`;

export const CalcTabsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: fit-content;
    @media(max-width: 1000px){
        flex-direction: column-reverse;
        flex-wrap: wrap;
    }
`;

export const CalcTabsMapContainer = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(max-width: 1000px){
        width: 100%;
    }
`;

export const CalcTabsChosenDistrict = styled.h2`
    text-align: center;
    padding: 0;
    margin: 20px 0 0 0;
    font-size: 1.1em;
`;

