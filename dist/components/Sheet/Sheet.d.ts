import { default as React, ReactNode } from 'react';
import { Sheet } from '../ui/sheet';
import { SelectProps } from '../Select/Select';
type SheetProps = React.ComponentProps<typeof Sheet> & {
    sheetTitle?: ReactNode;
    sheetTrigger?: ReactNode;
    sheetDescription?: string;
    sheetFooterButton?: string;
    loading?: boolean;
    buttonAction?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, values: any) => Promise<boolean | void> | boolean | void;
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
        readOnly?: boolean;
        triggerFieldUpdate?: boolean;
        validate?: (value: string | boolean) => string | null;
    }[];
    onFieldChange?: (fieldId: string, value: string | boolean, currentValues: Record<string, string | boolean>) => void;
};
export default function UISheet({ sheetTrigger, sheetTitle, sheetDescription, sheetFooterButton, buttonAction, sheetFields, loading, additionalContent, error, onFieldChange, ...rest }: SheetProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=Sheet.d.ts.map