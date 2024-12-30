import React, { forwardRef, ReactNode } from 'react';
import styled from 'styled-components';
import Stat from '../Stat';

type StatItem = {
	key: string;
	label: string;
	children?: ReactNode;
	loading?: boolean;
};
type DetailedStatsProps = {
	items: StatItem[];
};

const InternalDetailedStats: React.ForwardRefRenderFunction<HTMLDivElement, DetailedStatsProps> = ({ items }, ref) => {
	return (
		<StyledDetails className="ui-detailedStats" ref={ref}>
			{items.map(({ label, children, key, loading = false }) => (
				<Stat key={key} title={label} value={children} loading={loading} fullWidth />
			))}
		</StyledDetails>
	);
};

const StyledDetails = styled.div`
	font-family: 'AmericaMono-Regular', sans-serif;
	text-transform: uppercase;
	border-radius: 5px;
	display: grid;
	--colcount: 4;
	grid-template-columns: repeat(auto-fill, minmax(max(20.25rem, 100% / var(--colcount)), 1fr));
	align-items: stretch;
	grid-auto-rows: auto;
	gap: 20px;
	padding-block: 1rem;
`;

const UIDetailedStats = forwardRef<HTMLDivElement, DetailedStatsProps>(InternalDetailedStats);

UIDetailedStats.displayName = 'DetailedStats';

export default UIDetailedStats;

export type { DetailedStatsProps };
