import { AppProps } from 'next/app'
import AppFrame from '@appframe/index';

const App = ({ Component, pageProps }: AppProps) => {
    return(
        <AppFrame>
            <Component {...pageProps} />
        </AppFrame>
    )
}

export default App;