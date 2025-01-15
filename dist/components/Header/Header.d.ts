import React, { ReactNode } from 'react';
import { MenuProps } from 'antd';
export type HeaderProps = {
    logo?: React.ReactNode;
    toggleTheme: () => void;
    userInfo: {
        email: string;
        image?: React.ImgHTMLAttributes<HTMLImageElement>['src'];
        firstName?: string;
        lastName?: string;
    };
    userDropdownMenu: MenuProps['items'];
    navLinks: ReactNode[];
    currentPath?: string;
};
declare const LagoonHeader: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>>;
export default LagoonHeader;
