import { ReactNode } from 'react';
export declare const highlightTextInElement: (element: ReactNode, searchString: string, key: string | number) => any;
export declare const genAvatarBackground: (firstLetter: string, secondLetter: string) => {
    bgColor: string;
    textColor: string;
};
export declare const setLocalStorage: (key: string, value: string | boolean, expiryDays: number) => void;
export declare const getLocalStorage: (key: string) => any;
//# sourceMappingURL=helpers.d.ts.map