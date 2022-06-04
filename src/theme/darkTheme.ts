import { DefaultTheme } from "styled-components";

const darkTheme: DefaultTheme = {
  fontFamily: 'Poppins',
  fontWeight: {
    light: 300,
    normal: 500,
    bold: 700
  },
  mobileViewWidth: '950px',
  mobileFontSize: '600px',
  colors: {
    appFrame: {
        font: '#E2E2E2',
        background: '#02203A'
    },
    content: {
        fontPrimary: '#E2E2E2',
        fontSecondary: '#2D2D2D',
        theme: '#CECECE',
        themeHover: '#A7A7A7',
        background: '#15202B'
    }
  }
};

export default darkTheme;