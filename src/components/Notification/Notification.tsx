import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { ReactNode } from 'react';

type NotificationProps = {
	title: string;
	message: ReactNode;
	cancelText?: string;
	onCancel?: () => void;
	confirmText?: string;
	confirmDisabled?: boolean;
	onConfirm?: () => void;
} & (
	| { children?: ReactNode }
	| {
			open?: boolean;
			onOpenChange?: (open: boolean) => void;
	  }
);

export default function Notification({
	title,
	message,
	cancelText,
	onCancel,
	confirmText,
	confirmDisabled = false,
	onConfirm,
	...rest
}: NotificationProps) {
	const alertDialogProps =
		'rest' in arguments && 'open' in rest && 'onOpenChange' in rest
			? { open: rest.open, onOpenChange: rest.onOpenChange }
			: {};

	return (
		<AlertDialog {...alertDialogProps}>
			<AlertDialogTrigger asChild>{'children' in rest ? rest.children : null}</AlertDialogTrigger>

			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{message}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel
						onClick={() => {
							onCancel && onCancel();
						}}
					>
						{cancelText ?? 'Cancel'}
					</AlertDialogCancel>
					<AlertDialogAction
						disabled={confirmDisabled}
						onClick={() => {
							onConfirm && onConfirm();
						}}
					>
						{confirmText ?? 'Continue'}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
