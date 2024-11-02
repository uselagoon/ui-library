import { Tooltip } from 'antd';
import BaseTable from '../Base';
import { ActionWrap } from '../styles';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import { ProblemIdentifier, WrappedText } from './styles';
import { CloseCircleOutlined } from '@ant-design/icons';
import ProblemsTableSkeleton from './ProblemsTableSkeleton';
dayjs.extend(duration);
dayjs.extend(utc);

enum ProblemSeverityRating {
	NONE,
	UNKNOWN,
	NEGLIGIBLE,
	LOW,
	MEDIUM,
	HIGH,
	CRITICAL,
}
type Problem = {
	id: number;
	identifier: string;
	environment: {
		id: number | null;
		name: string | null;
	};
	data: {};
	severity: keyof typeof ProblemSeverityRating;
	source: string;
	service: string;
	created: string;
	deleted: string;
	severityScore: number;
	associatedPackage: string;
	description: string;
	version: string;
	fixedVersion: string;
	links: string;
};

export type ProblemProps = {
	problems: Problem[];
	skeleton?: false;
};

export type ProblemsTableSkeleton = {
	skeleton: true;
};

export type ProblemsTableProps = ProblemsTableSkeleton | ProblemProps;

const ProblemsTable = (props: ProblemsTableProps) => {
	if ('skeleton' in props && props.skeleton) {
		return <ProblemsTableSkeleton />;
	}

	const { problems } = props as ProblemProps;

	const ProblemsColumns = [
		{
			title: 'CVE ID',
			dataIndex: 'identifier',
			key: 'identifier',
			width: '12.25%',
			render: (identifier: string) => {
				return <ProblemIdentifier>{identifier}</ProblemIdentifier>;
			},
		},
		{
			title: 'Detected',
			dataIndex: 'created',
			key: 'created',
			width: '11.25%',
		},
		{
			title: 'Source',
			dataIndex: 'source',
			key: 'source',
			width: '13.6%',
		},
		{
			title: 'Service',
			dataIndex: 'service',
			key: 'service',
			width: '9.89%',
		},
		{
			title: 'Package',
			dataIndex: 'packageWithVersion',
			key: 'packageWithVersion',
			width: '20.87%',
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
			width: '21.77%',
			render: (description: string) => {
				return (
					<Tooltip title={description} placement="left" overlayInnerStyle={{ width: '400px' }}>
						<WrappedText>{description}</WrappedText>
					</Tooltip>
				);
			},
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
		},
	];

	const remappedProblems =
		problems &&
		problems.map((problem) => {
			return {
				...problem,
				created: (
					<Tooltip placement="top" title={problem.created}>
						{dayjs.utc(problem.created).local().fromNow()}
					</Tooltip>
				),
				packageWithVersion: (
					<>
						{problem.associatedPackage}:{problem.version}
					</>
				),
				actions: (
					<ActionWrap>
						{/**TODO: DISMISS PROBLEMS render prop once we decide how dismissal is handled*/}
						{problem.deleted !== '0000-00-00 00:00:00' && (
							<Tooltip placement="top" title="Dismiss">
								<CloseCircleOutlined />
							</Tooltip>
						)}
					</ActionWrap>
				),
			};
		});

	return (
		<>
			<BaseTable dataSource={remappedProblems} columns={ProblemsColumns} rowKey={(record) => record.id} />
		</>
	);
};

export default ProblemsTable;
