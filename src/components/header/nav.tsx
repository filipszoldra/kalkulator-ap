import React, {FC} from 'react';
import {NavCore, NavLink as Link} from './headerStyle';


const Nav: FC = () => {

    return(
        <NavCore>
            <Link href={'/'} label={'Strona główna'}/>
            <Link href={'/kalkulator'} label={'Kalkulator'}/>
            <Link href={'/sondaz-miesieczny'} label={'Sondaż miesięczny'}/>
        </NavCore>
    )
}

export default Nav;