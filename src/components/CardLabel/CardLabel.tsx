import React, { forwardRef } from 'react';
import colors from '../../_util/colors';
import { SplitLabels, StyledHorizontalLabel, StyledLabel } from './styles';

export const colorMap = {
	development: colors.blue,
	project: colors.black,
	production: colors.green,
	active: colors.purple,
	standby: colors.purple,
	['active production']: colors.green,
	['standby production']: colors.yellow,
	uat: colors.orange,
	error: colors.pink,
} as const;

type LagoonCardLabelProps = {
	type:
		| 'active'
		| 'standby'
		| 'development'
		| 'project'
		| 'production'
		| 'active production'
		| 'standby production'
		| 'uat'
		| 'error';
	variant?: 'vertical' | 'horizontal';
};

const InternalLabel: React.ForwardRefRenderFunction<HTMLDivElement, LagoonCardLabelProps> = (
	{ type, variant = 'vertical' },
	ref,
) => {
	const currentColor = colorMap[type];

	if (variant === 'horizontal') {
		if (type === 'active production' || type === 'standby production') {
			type ColorKey = keyof typeof colorMap;
			type SingleWordKey = Exclude<ColorKey, 'active production' | 'standby production'>;

			const splitTypes = type.split(' ') as SingleWordKey[];

			return (
				<SplitLabels>
					<StyledHorizontalLabel className="lagoon-label" $currentColor={colorMap[splitTypes[1]]} ref={ref}>
						<span>{splitTypes[1]}</span>
					</StyledHorizontalLabel>
					<StyledHorizontalLabel className="lagoon-label" $currentColor={colorMap[splitTypes[0]]} ref={ref}>
						<span>{splitTypes[0]}</span>
					</StyledHorizontalLabel>
				</SplitLabels>
			);
		}
		return (
			<StyledHorizontalLabel className="lagoon-label" $currentColor={currentColor} ref={ref}>
				<span>{type}</span>
			</StyledHorizontalLabel>
		);
	}
	return (
		<StyledLabel className="lagoon-label" $currentColor={currentColor} ref={ref}>
			<span>{type}</span>
		</StyledLabel>
	);
};

const UICardLabel = forwardRef<HTMLDivElement, LagoonCardLabelProps>(InternalLabel);

UICardLabel.displayName = 'CardLabel';

export default UICardLabel;

export type { LagoonCardLabelProps };
