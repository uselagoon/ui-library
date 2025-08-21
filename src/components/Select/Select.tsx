import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';

type Option = { label: string; value: string | number };
type OptionGroup = { label: string; options: Option[] };

export type SelectProps = Omit<React.ComponentProps<typeof Select>, 'disabled'> & {
	placeholder: string;
	options?: Option[] | OptionGroup[];
	disabled?: boolean;
	width?: number;
};

function isOptionGroupArray(options: Option[] | OptionGroup[] | undefined): options is OptionGroup[] {
	return Array.isArray(options) && options.length > 0 && 'options' in options[0]!;
}

export default function SelectWithOptions({ placeholder, options, disabled, width, ...rest }: SelectProps) {
	return (
		<Select disabled={disabled} {...rest}>
			<SelectTrigger className={`w-[${width ?? '266px'}]`}>
				<SelectValue placeholder={placeholder || 'Make a selection'} />
			</SelectTrigger>
			{!disabled &&
				options &&
				Array.isArray(options) &&
				(options.length > 0 ? (
					<SelectContent>
						{isOptionGroupArray(options)
							? options.map((group) => (
									<SelectGroup key={group.label}>
										<SelectLabel>{group.label}</SelectLabel>
										{group.options.map((option) => (
											<SelectItem key={option.value} value={String(option.value)}>
												{option.label}
											</SelectItem>
										))}
									</SelectGroup>
								))
							: options.map((option) => (
									<SelectItem key={option.value} value={String(option.value)}>
										{option.label}
									</SelectItem>
								))}
					</SelectContent>
				) : (
					<SelectContent className="text-center text-muted-foreground">No options</SelectContent>
				))}
		</Select>
	);
}
