import React from "react";
export type FooterProps = {
    icon?: React.ReactNode;
    toggleTheme?: () => void;
};
declare const LagoonFooter: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>>;
export default LagoonFooter;
