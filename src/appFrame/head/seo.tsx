import React, {FC} from 'react';
import {NextSeo} from 'next-seo';

const Seo: FC = () => {
    return(
        <NextSeo
            title={'Ad Calculate'}
            description={'Kalkulator wyborczy projektu Ad Personam. Sprawdź sam!'}
            openGraph={{
                type: 'website',
                site_name: 'Ad Calculate',
                description: 'Kalkulator wyborczy projektu Ad Personam. Sprawdź sam!',
                locale: 'pl'
              }}
              twitter={{
                handle: '@personam_ad',
                site: '@personam_ad',
                cardType: 'summary',
              }}
        />
    )
}

export default Seo;