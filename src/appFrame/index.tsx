import React, {FC} from 'react';
import Header from '@components/header';
import GlobalStyle from './globalStyle';
import useSwitchTheme from '@theme/index';
import {ThemeProvider} from 'styled-components';
import Head from './head';
import {MainContainer} from '@components/pages.core';
import Footer from '@components/footer';

interface Props{
    children: JSX.Element;
}

const AppFrame: FC<Props> = ({children}) => {

    const [theme, switchTheme] = useSwitchTheme();

    return(
        <>
            <Head/>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <MainContainer>
                    <Header switchTheme={switchTheme}/>
                    {children}
                    <Footer/>
                </MainContainer>
            </ThemeProvider>
        </>
    )
}

export default AppFrame;