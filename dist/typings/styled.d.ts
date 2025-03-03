export interface UITheme {
    colorScheme: 'dark' | 'light';
    UI: {
        backgrounds: {
            primary: string;
            secondary: string;
            input: string;
            modal: string;
            dataCard: string;
            selection: string;
            lagoonCard: string;
            lagoonCardInverted: string;
            footer: string;
            header: string;
            navTabs: string;
        };
        texts: {
            primary: string;
            primaryInverted: string;
            label: string;
            secondary: string;
            timeline: string;
            nav: string;
        };
        confirm: {
            text: string;
            background: string;
        };
        highlights: {
            selection: string;
        };
        borders: {
            box: string;
            card: string;
            cardInverted: string;
        };
        notification: string;
        skeleton: {
            base: string;
            highlight: string;
        };
    };
}
declare module 'styled-components' {
    interface DefaultTheme extends UITheme {
    }
}
export type ThemeObject = UITheme;
