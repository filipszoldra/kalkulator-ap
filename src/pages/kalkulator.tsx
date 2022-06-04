import React, {FC} from 'react';
import {GetStaticProps, GetStaticPropsResult} from 'next';
import {CalcStoreProvider} from '@store/calcStore';
import {AppContent} from '@components/pages.core';
import CalcTabs from '@components/calculator/calcTabs';

const Kalkulator: FC = () => {
    return(
        <AppContent>
            <CalcStoreProvider>
                <CalcTabs/>
            </CalcStoreProvider>
        </AppContent>
    )
}

export default Kalkulator;