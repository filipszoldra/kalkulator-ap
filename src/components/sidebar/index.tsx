import React, {FC} from 'react';
import {SidebarCore, SidebarItemList, CloseButton} from './SidebarStyle';
import {NavLink as Link, StyledNav} from '@components/header/headerStyle';

interface Props{
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: FC<Props> = ({active, setActive}) => {
    return(
        <SidebarCore active={active}>
            <SidebarItemList>
                <Link onClick={() => setActive(!active)} href={'/'} label={'Wprowadzenie'}/>
                <Link onClick={() => setActive(!active)} href={'/kalkulator'} label={'Kalkulator'}/>
                <Link onClick={() => setActive(!active)} href={'/sondaz-miesieczny'} label={'Sondaż miesięczny'}/>
                <StyledNav onClick={() => setActive(!active)} active>Zamknij menu</StyledNav>
            </SidebarItemList>
        </SidebarCore>
    )
}

export default Sidebar;