import React, { isValidElement, ReactNode } from 'react';
import { Statistic, StatisticProps } from 'antd';
import { StyledStatistic } from './styles';

type StatProps = Omit<StatisticProps, 'value'> & {
	fullWidth?: boolean;
	lowercaseValue?: boolean;
	capitalizeValue?: boolean;
	value: ReactNode;
};
function formatToCypressString(input: string) {
	return input.toLowerCase().replace(/\s+/g, '-');
}

const UIStat: React.FC<StatProps> = ({ fullWidth = false, lowercaseValue, capitalizeValue, value, ...rest }) => {
	let isElement = isValidElement(value);

	let textStyles = {};

	if (lowercaseValue) {
		textStyles = { textTransform: 'lowercase' };
	}
	if (capitalizeValue) {
		textStyles = { textTransform: 'capitalize' };
	}

	return (
		<StyledStatistic $fullWidth={fullWidth}>
			<Statistic
				className="ui-statistic"
				{...rest}
				value={isElement ? '' : (value as string | number)}
				valueStyle={isElement ? { display: 'none' } : {}}
				valueRender={(node) => (
					<span style={textStyles} data-cy={formatToCypressString(rest.title as string)}>
						{node}
					</span>
				)}
			/>
			{isElement ? (
				<div style={textStyles} data-cy={formatToCypressString(rest.title as string)} className="statistic-element">
					{value}
				</div>
			) : null}
		</StyledStatistic>
	);
};

UIStat.displayName = 'Stat';

export default UIStat;

export type { StatProps as UIStatProps };
