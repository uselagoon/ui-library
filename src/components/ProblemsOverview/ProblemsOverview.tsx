import React from 'react';
import UIDataCard from '../DataCard';
import { StyledOverview, StyledProblemsList } from './styles';
import UIHead2 from '../Heading/H2';
import { FrownOutlined, MehOutlined, QuestionCircleOutlined, SmileOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import ProblemsOverviewSkeleton from './ProblemsOverviewSkeleton';

type LagoonProblemsOverviewProps = {
	problems: number;
	critical: number;
	high: number;
	medium: number;
	low: number;
	skeleton?: false;
};
type Props =
	| LagoonProblemsOverviewProps
	| {
			skeleton: true;
	  };

const LagoonProblemsOverview: React.FC<Props> = (props) => {
	if (props.skeleton) {
		return <ProblemsOverviewSkeleton />;
	}

	const { problems, critical, high, medium, low } = props;
	const problemsList = (
		<StyledProblemsList>
			<UIDataCard text="Problems" count={problems} />
			<UIDataCard text="Critical" count={critical} critical />
			<UIDataCard text="High" count={high} high />
			<UIDataCard text="Medium" count={medium} medium />
			<UIDataCard text="Low" count={low} low />
		</StyledProblemsList>
	);

	const getStatusIcon = () => {
		if (critical >= 1) return <FrownOutlined className="icon-status pink" />;
		if (high >= 1) return <MehOutlined className="icon-status orange" />;
		if (medium >= 1 || low >= 1) return <SmileOutlined className="icon-status green" />;

		return <SmileOutlined className="icon-status green" />;
	};
	return (
		<StyledOverview>
			<div className="icon">{getStatusIcon()}</div>
			<div className="overview-title">
				<UIHead2>
					At a glance
					<Popover
						className="explainer"
						placement="right"
						title="Whats this?"
						content="The summary of all the problems is shown here"
					>
						<QuestionCircleOutlined />
					</Popover>
				</UIHead2>
			</div>

			{problemsList}
		</StyledOverview>
	);
};

LagoonProblemsOverview.displayName = 'LagoonProblemsOverview';

export default LagoonProblemsOverview;

export type { LagoonProblemsOverviewProps };
