import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
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
import Checkbox from '../Checkbox';
import SelectWithOptions from '../Select';
import { SelectProps } from '../Select/Select';
import { Loader2 } from 'lucide-react';

type SheetProps = React.ComponentProps<typeof Sheet> & {
	sheetTitle?: ReactNode;
	sheetTrigger?: string;
	sheetDescription?: string;
	sheetFooterButton?: string;
	loading?: boolean;
	buttonAction?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, values: any) => void;
	sheetFields: {
		id: string;
		label: string;
		inputDefault?: string;
		type?: string;
		placeholder?: string;
		required?: boolean;
		options?: SelectProps['options'];
	}[];
};

export default function UISheet({
	sheetTrigger = 'Open',
	sheetTitle = '',
	sheetDescription = '',
	sheetFooterButton = 'Save changes',
	buttonAction = () => {},
	sheetFields,
	loading = false,
	...rest
}: SheetProps) {
	const [sheetOpen, setSheetOpen] = useState(false);

	const prevLoadingRef = useRef(loading);

	const getInitialFieldValues = useMemo(() => {
		return () => {
			const initialValues: Record<string, string | boolean> = {};
			sheetFields.forEach((field) => {
				if (field.inputDefault !== undefined) {
					initialValues[field.id] = field.inputDefault;
				}
			});
			return initialValues;
		};
	}, [sheetFields]);

	const [fieldValues, setFieldValues] = useState<Record<string, string | boolean>>(getInitialFieldValues);

	const buttonDisabled = useMemo(() => {
		const requiredFieldsNotFilled = sheetFields.some((field) => {
			if (field.required) {
				switch (field.type ?? 'text') {
					case 'checkbox':
						return fieldValues[field.id] !== true;
					case 'select':
					case 'textarea':
					case 'text':
					case 'email':
					case 'number':
					case 'password':
					case 'tel':
						return !fieldValues[field.id];
					default:
						return false;
				}
			}
			return false;
		});
		return requiredFieldsNotFilled || loading;
	}, [sheetFields, fieldValues, loading]);

	const handleInputChange = (id: string, value: string | boolean) => {
		setFieldValues((prev) => ({
			...prev,
			[id]: value,
		}));
	};

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (buttonDisabled) return;
		buttonAction && buttonAction(e, fieldValues);
		// if loading was never passed/default false, then close
		if (!loading) {
			setImmediate(() => setSheetOpen(false));
		}
	};

	useEffect(() => {
		if (sheetOpen) {
			setFieldValues(getInitialFieldValues());
		}
	}, [sheetOpen, getInitialFieldValues]);

	useEffect(() => {
		// if loading was provided and it flips, close the sheet, otherwise this won't have an effect and will be dealt in the submit handler.
		if (prevLoadingRef.current === true && loading === false && sheetOpen) {
			setSheetOpen(false);
		}
		prevLoadingRef.current = loading;
	}, [loading, sheetOpen]);

	return (
		<Sheet open={sheetOpen} onOpenChange={setSheetOpen} {...rest}>
			<SheetTrigger asChild>
				<Button variant="outline">{sheetTrigger}</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>{sheetTitle}</SheetTitle>
					<SheetDescription>{sheetDescription}</SheetDescription>
				</SheetHeader>
				{sheetFields.map((field) => (
					<div className="grid auto-rows-min gap-6 px-4" key={field.id}>
						<div className="grid gap-3">
							{field.type !== 'checkbox' && (
								<Label htmlFor={field.id}>
									{field.label}
									{field.required && <span className="text-red-500 ml-1">*</span>}
								</Label>
							)}

							{(() => {
								switch (field.type) {
									case 'checkbox':
										return (
											<div className="flex items-center space-x-2">
												<Checkbox
													label={field.label}
													id={field.id}
													checked={fieldValues[field.id] === 'true'}
													onCheckedChange={(checked) => handleInputChange(field.id, checked)}
												/>
												<Label htmlFor={field.id}>
													{field.label}
													{field.required && <span className="text-red-500 ml-1">*</span>}
												</Label>
											</div>
										);
									case 'textarea':
										return (
											<textarea
												id={field.id}
												className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
												value={(fieldValues[field.id] as string) || ''}
												onChange={(e) => handleInputChange(field.id, e.target.value)}
												placeholder={field?.placeholder}
											/>
										);
									case 'select':
										return (
											<SelectWithOptions
												placeholder={field?.placeholder || ''}
												options={field?.options || []}
												defaultValue={(fieldValues[field.id] as string) || ''}
												onValueChange={(e: any) => handleInputChange(field.id, e.target.value)}
											/>
										);
									default: // defaults for for text, email, number, password, tel
										return (
											<Input
												type={field?.type || 'text'}
												id={field.id}
												value={(fieldValues[field.id] as string) || ''}
												onChange={(e) => handleInputChange(field.id, e.target.value)}
												placeholder={field?.placeholder}
											/>
										);
								}
							})()}
						</div>
					</div>
				))}
				<SheetFooter>
					<Button onClick={handleSubmit} disabled={buttonDisabled}>
						{loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
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
