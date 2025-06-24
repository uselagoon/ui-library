import { ReactNode } from 'react';
type NotificationProps = {
    title: string;
    message: string;
    cancelText?: string;
    onCancel?: () => void;
    confirmText?: string;
    onConfirm?: () => void;
} & ({
    children?: ReactNode;
} | {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
});
export default function Notification({ title, message, cancelText, onCancel, confirmText, onConfirm, ...rest }: NotificationProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=Notification.d.ts.map