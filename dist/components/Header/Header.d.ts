import React, { ReactNode } from "react";
export type HeaderProps = {
    userInfo: {
        image?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
        firstName: string;
        lastName: string;
        email: string;
        organization: string;
    };
    navLinks: {
        label: string;
        element: ReactNode;
    }[];
};
declare const LagoonHeader: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>>;
export default LagoonHeader;
