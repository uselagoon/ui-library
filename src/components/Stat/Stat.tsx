import React, { isValidElement, ReactNode } from 'react';
import { Statistic, StatisticProps } from 'antd';
import { StyledStatistic } from './styles';

type StatProps = Omit<StatisticProps, 'value'> & {
	fullWidth?: boolean;
	value: ReactNode;
};
const UIStat: React.FC<StatProps> = ({ fullWidth = false, value, ...rest }) => {
	let isElement = isValidElement(value);

	return (
		<StyledStatistic $fullWidth={fullWidth}>
			<Statistic
				className="ui-statistic"
				{...rest}
				value={isElement ? '' : (value as string | number)}
				valueStyle={isElement ? { display: 'none' } : {}}
			/>
			{isElement ? <div className="statistic-element">{value}</div> : null}
		</StyledStatistic>
	);
};

UIStat.displayName = 'Stat';

export default UIStat;

export type { StatProps as UIStatProps };
