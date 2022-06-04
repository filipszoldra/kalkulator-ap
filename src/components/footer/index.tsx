import React, {FC} from 'react';
import styled from 'styled-components';

const FooterCore = styled.div`
    width: 100%;
    height: 40px;
    color: ${({theme}) => theme.colors.appFrame.font};
    background: ${({theme}) => theme.colors.appFrame.background};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Paragraph = styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.7em;
    text-align: center;
`;

const Footer: FC = () => {
    return(
        <FooterCore>
            <Paragraph>Copyright © 2021 | Ad Personam</Paragraph>
        </FooterCore>
    )
}

export default Footer;