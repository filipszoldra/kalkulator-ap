import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body, body > div, #appMount > div {
    height: 100%
}
body{
    margin: 0;
    padding: 0;
    min-height: 100%;
    font-family: ${({theme}) => theme.fontFamily}, sans-serif;
    background: ${({theme}) => theme.colors.content.background};
    color: ${({theme}) => theme.colors.content.fontPrimary};
}
*{
    box-sizing: border-box;
    transition: .15s;
}
`;

export default GlobalStyle;