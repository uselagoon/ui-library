import React, { useState } from 'react';
import { CheckOutlined, CopyOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import colors from '../../_util/colors';
import { Tooltip } from 'antd';

export interface ClipboardProps {
	text: string | number;
	type?: 'visible' | 'hidden' | 'hiddenWithIcon' | 'alwaysHidden';
	width?: number | string;
	fontSize?: string;
	withToolTip?: boolean;
}
const CopyToClipboard: FC<ClipboardProps> = ({
	text,
	width,
	fontSize = '14px',
	type = 'visible',
	withToolTip = false,
}) => {
	const copyFn = () => navigator.clipboard.writeText(text as string);

	const [copied, setCopied] = useState(false);
	const [manualUnblur, setManualUnblur] = useState(false);

	const handleCopy = () => {
		copyFn();
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 3500);
	};

	const computedStyles = width ? { maxWidth: `${width}px` } : {};

	const handleBlurToggle = () => void setManualUnblur(!manualUnblur);

	const unblurIcon = !manualUnblur ? (
		<EyeOutlined className="eye-icon" onClick={handleBlurToggle} />
	) : (
		<EyeInvisibleOutlined className="eye-icon" onClick={handleBlurToggle} />
	);
	return (
		<StyledText $fontSize={fontSize} style={{ ...computedStyles }}>
			<CopyableText className="copyable" $maxWidth={width} $type={type} $manualUnblur={manualUnblur}>
				{!withToolTip ? (
					text
				) : (
					<Tooltip overlayInnerStyle={{ width: '300px' }} title={text} placement="bottom">
						<TooltipTextLabel>{text}</TooltipTextLabel>
					</Tooltip>
				)}
			</CopyableText>

			<div className="icons">
				{!copied ? (
					<>
						<CopyOutlined onClick={handleCopy} className="copy-icon" />
						{type === 'hiddenWithIcon' && unblurIcon}
					</>
				) : (
					<Tooltip placement="right" title="Copied!">
						<CheckOutlined className="check-icon" />
						{type === 'hiddenWithIcon' && unblurIcon}
					</Tooltip>
				)}
			</div>
		</StyledText>
	);
};

const TooltipTextLabel = styled.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

const CopyableText = styled.span<{
	$type: ClipboardProps['type'];
	$manualUnblur: boolean;
	$maxWidth?: number | string;
}>`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: ${(props) => props.theme.UI.texts.primary};
	max-width: ${(props) =>
		props.$maxWidth ? `${typeof props.$maxWidth === 'number' ? `${props.$maxWidth}px` : props.$maxWidth}` : '18.75rem'};
	${(props) =>
		(props.$type === 'hidden' ||
			props.$type === 'alwaysHidden' ||
			(props.$type === 'hiddenWithIcon' && !props.$manualUnblur)) &&
		css`
			filter: blur(0.3rem);
			user-select: none;
			transition: all 0.3s ease;
		`};

	${(props) =>
		props.$type === 'hidden' &&
		css`
			&:hover {
				filter: none;
				user-select: initial;
			}
		`};
`;

const StyledText = styled.div<{
	$fontSize: string;
}>`
	font-family: 'ArabicPro-Regular', sans-serif;
	font-size: ${(props) => props.$fontSize};
	line-height: 1.5rem;
	min-width: max-content;
	display: flex;
	justify-content: space-between;
	align-content: baseline;
	gap: 1rem;

	span:not(.copyable) {
		color: ${(props) => props.theme.UI.texts.primary};
		display: flex;
		align-items: center;
	}
	.check-icon {
		font-size: 16px;
		position: relative;
		z-index: 1;
		transition: all 0.25s ease;
		color: ${colors.green} !important;
	}
	.icons {
		display: flex;
	}
	.copy-icon,
	.eye-icon {
		font-size: 16px;
		position: relative;
		z-index: 1;
		transition: all 0.25s ease;

		&:hover {
			background-color: #a4a3a32c;
		}

		&:active {
			background-color: #1616162c;
		}
	}
	.eye-icon {
		margin-left: 12px;
		cursor: pointer;
	}
`;

export default CopyToClipboard;
