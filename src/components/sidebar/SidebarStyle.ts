import styled from 'styled-components';

interface Props{
    active: boolean;
}

export const SidebarItemList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > *{
        margin: 5px 0 !important;
    }
    overflow: hidden;
`;

export const SidebarCore = styled.div<Props>`
    position: absolute;
    right: 0;
    top: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 100%;
    transition: 1s;
    background-color: ${({theme}) => theme.colors.appFrame.background};
    z-index: 999;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const CloseButton = styled.div`
    cursor: pointer;
    width: 28px;
    height: 30px;
    position: relative;
    margin: 0 auto;
    &:before, &:after {
        content: '';
        height: 30px;
        border-left: 3px solid ${({theme}) => theme.colors.appFrame.font};
        position: absolute;
        left: 12px;
        top: -1px;
    }
    &:before {
        transform: rotate(-45deg);
    }
    &:after {
        transform: rotate(45deg);
    }
`;