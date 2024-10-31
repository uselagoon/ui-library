import { Head2, LoadingSkeleton } from '../..';
import UIDataCard from '../DataCard/DataCard';
import { StyledOverview, StyledProblemsList } from './styles';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Popover } from 'antd';

const ProblemsOverviewSkeleton = () => {
	const problemsList = (
		<StyledProblemsList>
			<UIDataCard text="Problems" count={0} />
			<UIDataCard text="Critical" count={0} critical />
			<UIDataCard text="High" count={0} high />
			<UIDataCard text="Medium" count={0} medium />
			<UIDataCard text="Low" count={0} low />
		</StyledProblemsList>
	);

	const getStatusIcon = () => {
		return <LoadingSkeleton style={{ borderRadius: '50%' }} width={50} height={50} />;
	};
	return (
		<StyledOverview>
			<div className="icon">{getStatusIcon()}</div>
			<div className="overview-title">
				<Head2>
					At a glance
					<Popover
						className="explainer"
						placement="right"
						title="Whats this?"
						content="The summary of all the problems is shown here"
					>
						<QuestionCircleOutlined />
					</Popover>
				</Head2>
			</div>

			{problemsList}
		</StyledOverview>
	);
};

export default ProblemsOverviewSkeleton;
