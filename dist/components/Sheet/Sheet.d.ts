import { default as React, ReactNode } from 'react';
import { Sheet } from '../ui/sheet';
import { SelectProps } from '../Select/Select';
type SheetProps = React.ComponentProps<typeof Sheet> & {
    sheetTitle?: ReactNode;
    sheetTrigger?: ReactNode;
    sheetDescription?: string;
    sheetFooterButton?: string;
    loading?: boolean;
    buttonAction?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, values: any) => void;
    additionalContent: ReactNode;
    error: boolean;
    sheetFields: {
        id: string;
        label: string;
        inputDefault?: string;
        type?: string;
        placeholder?: string;
        required?: boolean;
        options?: SelectProps['options'];
        readonly?: boolean;
    }[];
};
export default function UISheet({ sheetTrigger, sheetTitle, sheetDescription, sheetFooterButton, buttonAction, sheetFields, loading, additionalContent, error, ...rest }: SheetProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=Sheet.d.ts.map