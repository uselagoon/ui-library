import React, { ReactNode } from 'react';
export type HeaderProps = {
    icon?: React.ReactNode;
    toggleTheme: () => void;
    userInfo: {
        email: string;
        image?: React.ImgHTMLAttributes<HTMLImageElement>['src'];
        firstName?: string;
        lastName?: string;
    };
    navLinks: ReactNode[];
};
declare const LagoonHeader: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>>;
export default LagoonHeader;
