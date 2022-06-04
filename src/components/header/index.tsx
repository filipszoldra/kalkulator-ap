import React, {FC, useState} from 'react';
import Nav from './nav';
import Logo from './logo';
import DarkMode from './darkMode';
import {HeaderCore, HamburgerIcon, LogoSwitch} from './headerStyle';
import Sidebar from '@components/sidebar';

interface Props{
    switchTheme(): void
}

const Header: FC<Props> = ({switchTheme}) => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return(
        <>
            <HeaderCore>
                <LogoSwitch>
                    <Logo/>
                    <DarkMode switchTheme={switchTheme}/>
                </LogoSwitch>
                <HamburgerIcon onClick={() => setMenuOpen(!menuOpen)}>
                    <span/>
                    <span/>
                    <span/>
                </HamburgerIcon>     
            </HeaderCore>
            <Sidebar active={menuOpen} setActive={setMenuOpen}/>
        </>
    )
}

export default Header;