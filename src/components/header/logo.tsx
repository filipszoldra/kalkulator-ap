import React, {FC} from 'react';
import LogoSvg from '@assets/svg/logo3.svg';
import styled from 'styled-components';

const LogoCore = styled.div`
    height: 100%;
    width: auto;
    & > img{
        height: 100%;
        width: auto;
    }
`;

const Logo: FC = () => {
    return(
        <LogoCore>
            <img src={LogoSvg}/>
        </LogoCore>
    )
}

export default Logo;