import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        fontFamily: string;
        fontWeight: {
            light: number;
            normal: number;
            bold: number;
        },
        mobileViewWidth: string;
        mobileFontSize: string;
        colors: {
            appFrame: {
                font: string;
                background: string;
            },
            content: {
                fontPrimary: string;
                fontSecondary: string;
                theme: string;
                themeHover: string;
                background: string;
            }
        }
    };
}