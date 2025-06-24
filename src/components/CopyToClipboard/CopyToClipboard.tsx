import React, { useState } from 'react';
import { Copy, Check, Eye, EyeOff } from 'lucide-react';
import { Tooltip } from 'antd';
import { cva } from 'class-variance-authority';

export interface ClipboardProps {
	text: string | number;
	type?: 'visible' | 'hidden' | 'hiddenWithIcon' | 'alwaysHidden';
	width?: number | string;
	fontSize?: string;
	withToolTip?: boolean;
	iconOnly?: boolean;
}

const textVariants = cva('truncate transition-all duration-300', {
	variants: {
		type: {
			visible: '',
			hidden: 'blur-sm select-none hover:blur-0 hover:select-text',
			hiddenWithIcon: '',
			alwaysHidden: 'blur-sm select-none',
		},
		unblur: {
			true: '!blur-0 !select-text',
			false: '',
		},
	},
	compoundVariants: [
		{
			type: 'hiddenWithIcon',
			unblur: false,
			className: 'blur-sm select-none',
		},
		{
			type: 'hiddenWithIcon',
			unblur: true,
			className: '!blur-0 !select-text',
		},
	],
	defaultVariants: {
		type: 'visible',
		unblur: false,
	},
});

const CopyToClipboard: React.FC<ClipboardProps> = ({
	text,
	width,
	fontSize = '14px',
	type = 'visible',
	withToolTip = false,
	iconOnly = false,
}) => {
	const [copied, setCopied] = useState(false);
	const [manualUnblur, setManualUnblur] = useState(false);

	const copyFn = () => {
		navigator.clipboard.writeText(text.toString());
	};

	const handleCopy = () => {
		copyFn();
		setCopied(true);
		setTimeout(() => setCopied(false), 3500);
	};

	const handleBlurToggle = () => setManualUnblur(!manualUnblur);

	const containerStyle: React.CSSProperties = {
		maxWidth: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
		fontSize,
		width: iconOnly ? 'max-content' : undefined,
	};

	return (
		<div className="flex items-start gap-4 min-w-max justify-between" style={containerStyle}>
			{!iconOnly && (
				<span className={textVariants({ type, unblur: manualUnblur })} style={{ maxWidth: containerStyle.maxWidth }}>
					{withToolTip ? (
						<Tooltip overlayInnerStyle={{ width: '300px' }} title={text} placement="bottom">
							<span className="truncate">{text}</span>
						</Tooltip>
					) : (
						text
					)}
				</span>
			)}

			<div className="flex items-center gap-3">
				{!copied ? (
					<>
						<Copy
							className="w-4 h-4 text-muted-foreground hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
							data-cy="copy-button"
							onClick={handleCopy}
						/>
						{type === 'hiddenWithIcon' &&
							(manualUnblur ? (
								<EyeOff
									className="w-4 h-4 ml-3 cursor-pointer text-muted-foreground hover:bg-gray-200 active:bg-gray-300"
									onClick={handleBlurToggle}
								/>
							) : (
								<Eye
									className="w-4 h-4 ml-3 cursor-pointer text-muted-foreground hover:bg-gray-200 active:bg-gray-300"
									onClick={handleBlurToggle}
								/>
							))}
					</>
				) : (
					<Tooltip placement="right" title="Copied!">
						<div className="flex items-center">
							<Check className="w-4 h-4 text-green-500" />
							{type === 'hiddenWithIcon' &&
								(manualUnblur ? (
									<EyeOff
										className="w-4 h-4 ml-3 cursor-pointer text-muted-foreground hover:bg-gray-200 active:bg-gray-300"
										onClick={handleBlurToggle}
									/>
								) : (
									<Eye
										className="w-4 h-4 ml-3 cursor-pointer text-muted-foreground hover:bg-gray-200 active:bg-gray-300"
										onClick={handleBlurToggle}
									/>
								))}
						</div>
					</Tooltip>
				)}
			</div>
		</div>
	);
};

export default CopyToClipboard;
