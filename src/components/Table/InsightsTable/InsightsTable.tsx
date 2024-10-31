import BaseTable from '../Base';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import { Tooltip } from 'antd';
import Text from '../../Text';
import { ActionWrap } from '../styles';
import { StyledDownloadButton } from './styles';
import InsightsTableSkeleton from './InsightsTableSkeleton';

dayjs.extend(duration);
dayjs.extend(utc);

type Insight = {
	created: string;
	downloadUrl: string;
	file: string;
	fileId: number | null;
	id: number;
	service: string;
	size: string;
	type: string;
};

export type InsightsProps = {
	insights: Insight[];
	skeleton?: false;
};

export type InsightsTableSkeleton = {
	skeleton: true;
};

export type InsightsTableProps = InsightsTableSkeleton | InsightsProps;

const ProblemsTable = (props: InsightsTableProps) => {
	if ('skeleton' in props && props.skeleton) {
		return <InsightsTableSkeleton />;
	}

	const { insights } = props;

	const insightsColumns = [
		{
			title: 'Name',
			dataIndex: 'file',
			key: 'file',
			width: '17.18%',
		},
		{
			title: 'Service',
			dataIndex: 'service',
			key: 'service',
			width: '24.7%',
		},
		{
			title: 'Type',
			dataIndex: 'type',
			key: 'type',
			width: '20.94%',
		},
		{
			title: 'Created',
			dataIndex: 'created',
			key: 'created',
			width: '20.94%',
		},
		{
			title: 'Size',
			dataIndex: 'size',
			key: 'size',
			width: '20.94%',
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
		},
	];

	const remappedInsights =
		insights &&
		insights.map((insight) => {
			return {
				...insight,
				created: (
					<Tooltip placement="top" title={insight.created}>
						{dayjs.utc(insight.created).local().fromNow()}
					</Tooltip>
				),

				actions: (
					<ActionWrap>
						<Text href={insight.downloadUrl} target="_blank">
							<Tooltip placement="bottom" title={`Download (${insight.size})`}>
								<StyledDownloadButton />
							</Tooltip>
						</Text>
					</ActionWrap>
				),
			};
		});

	return (
		<>
			<BaseTable dataSource={remappedInsights} columns={insightsColumns} rowKey={(record) => record.id} />
		</>
	);
};

export default ProblemsTable;
