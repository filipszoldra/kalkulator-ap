import styled from 'styled-components';

interface PathProps{
    active: boolean;
}

export const MapSvg = styled.svg`
    width: 450px;
    @media(max-width: 1000px){
        width: 100%;
    }
`;

export const MapPath = styled.path<PathProps>`
    transition: .5s;
    cursor: pointer;
    fill: ${props => props.active ? props.theme.colors.content.themeHover : props.theme.colors.content.theme};
    transform: ${props => props.active ? 'scale(1.0025)' : 'none'};
    &:hover{
        fill:${({theme}) => theme.colors.content.themeHover};
    }
`;