import React, {FC} from 'react';
import {GetStaticProps, GetStaticPropsResult} from 'next';
import {AppContent} from '@components/pages.core';

interface IndexProps{
    strings: string[]
}

const Index: FC<IndexProps> = (props: IndexProps) => {
    return(
            <AppContent>
                <div>XD</div>
            </AppContent>
    )
}

export const getStaticProps = async (context): Promise<GetStaticPropsResult<IndexProps>> => {
    return {
        props: {
            strings: [
                "Dark",
                "Light"
            ],
        },
    };
}

export default Index;