import React from 'react';
import { Label } from '../ui/label';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTrigger,
	SheetFooter,
	SheetTitle,
	SheetHeader,
	SheetClose,
} from '../ui/sheet';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

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

export default function UISheet({
	sheetTrigger = 'Open',
	sheetTitle = 'Edit profile',
	sheetDescription = "Make changes to your profile here. Click save when you're done.",
	sheetFooterButton = 'Save changes',
	buttonAction = () => {},
	sheetFields,
	...rest
}: SheetProps) {
	return (
		<Sheet {...rest}>
			<SheetTrigger asChild>
				<Button variant="outline">{sheetTrigger}</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>{sheetTitle}</SheetTitle>
					<SheetDescription>{sheetDescription}</SheetDescription>
				</SheetHeader>
				{sheetFields.map((field) => (
					<div className="grid auto-rows-min gap-6 px-4">
						<div className="grid gap-3">
							<Label htmlFor={field.id}>{field.label}</Label>
							<Input id={field.id} defaultValue={field.inputDefault} />
						</div>
					</div>
				))}
				<SheetFooter>
					<Button onClick={buttonAction} type="submit">
						{sheetFooterButton}
					</Button>
					<SheetClose asChild>
						<Button variant="outline">Close</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
