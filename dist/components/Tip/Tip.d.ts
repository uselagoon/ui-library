import React, { ReactNode } from 'react';
type TipProps = {
    content: ReactNode;
};
declare const Tip: React.ForwardRefExoticComponent<TipProps & React.RefAttributes<HTMLElement>>;
export type { TipProps };
export default Tip;
