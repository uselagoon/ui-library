import React, { ReactNode } from 'react';
import { MenuProps } from 'antd';
export type HeaderProps = {
    icon?: React.ReactNode;
    toggleTheme: () => void;
    userInfo: {
        email: string;
        image?: React.ImgHTMLAttributes<HTMLImageElement>['src'];
        firstName?: string;
        lastName?: string;
    };
    userDropdownMenu: MenuProps['items'];
    navLinks: ReactNode[];
    logoNav?: () => void;
    currentPageIndex?: number;
};
declare const LagoonHeader: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>>;
export default LagoonHeader;
