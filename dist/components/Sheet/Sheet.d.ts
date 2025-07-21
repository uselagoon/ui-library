import { default as React } from 'react';
import { Sheet } from '../ui/sheet';
type SheetProps = React.ComponentProps<typeof Sheet> & {
    sheetTitle?: string;
    sheetTrigger?: string;
    sheetDescription?: string;
    sheetFooterButton?: string;
    buttonAction?: React.MouseEventHandler<HTMLButtonElement>;
    sheetFields: {
        id: string;
        label: string;
        inputDefault: string;
    }[];
};
export default function UISheet({ sheetTrigger, sheetTitle, sheetDescription, sheetFooterButton, buttonAction, sheetFields, ...rest }: SheetProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=Sheet.d.ts.map