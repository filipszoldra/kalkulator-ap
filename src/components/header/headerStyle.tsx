import styled from 'styled-components';
import Link from 'next/link';
import React, {FC} from 'react';



interface StyledNavProps{
    active?: boolean;
}

interface LinkProps{
    href?: string;
    label: string;
    onClick?(): any;
}

export const StyledNav = styled.div<StyledNavProps>`
    font-size: 1.5em;
    cursor: pointer;
    text-decoration: none;
    font-weight: ${({theme}) => theme.fontWeight.bold};
    text-transform: uppercase;
    color: ${(props) => props.active ? props.theme.colors.appFrame.background : props.theme.colors.appFrame.font};
    background: ${(props) => props.active ? props.theme.colors.appFrame.font : props.theme.colors.appFrame.background};
    padding: 4px 5px;
    border-radius: 5px;
    margin: 0 10px;
    &:visited{
        color: ${(props) => props.active ? props.theme.colors.appFrame.background : props.theme.colors.appFrame.font};
    }
    &:hover{
        background: ${(props) => props.active ? props.theme.colors.appFrame.background : props.theme.colors.appFrame.font};
        color: ${(props) => props.active ? props.theme.colors.appFrame.font : props.theme.colors.appFrame.background};
    }
`;

export const NavLink: FC<LinkProps> = ({href, label, onClick}) => (<Link href={href}><StyledNav onClick={onClick ? () => onClick() : () => undefined}>{label}</StyledNav></Link>)

export const NavCore  = styled.div`
    margin: 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media(max-width: 999px){
        display: none;
    }
`;

export const HamburgerIcon = styled.div`
    width: 27px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    & > span{
        width: 100%;
        height: 3px;
        background: ${({theme}) => theme.colors.appFrame.font};
    }
`;

export const HeaderCore = styled.div`
    height: 90px;
    width: 100%;
    padding: 10px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${({theme}) => theme.colors.appFrame.background};
    @media(max-width: 1000px){
        padding: 10px;
    }
    position: sticky;
    z-index: 999;
    top: 0;
    left: 0;
`;

export const LogoSwitch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    & img{
        margin-right: 20px !important;
    }
`;