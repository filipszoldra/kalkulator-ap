import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
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
          fontPrimary: '#2D2D2D',
          fontSecondary: '#E2E2E2',
          theme: '#25354F',
          themeHover: '#02203A',
          background: '#F6F6F6'
      }
    }
  };

export default lightTheme;