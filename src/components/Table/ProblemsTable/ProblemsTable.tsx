import { Tooltip } from 'antd';
import BaseTable from '../Base';
import { ActionWrap } from '../styles';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import { ProblemIdentifier, WrappedText } from './styles';
import { CloseCircleOutlined } from '@ant-design/icons';
import ProblemsTableSkeleton from './ProblemsTableSkeleton';
import { useState } from 'react';
import Head4 from '../../Heading/H4';
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

	const [expandedRowIds, setExpandedRowIds] = useState<number[]>([]);

	// manually handle row expansion
	const handleExpand = (expanded: boolean, record: Problem) => {
		setExpandedRowIds(expanded ? [...expandedRowIds, record.id] : expandedRowIds.filter((id) => id !== record.id));
	};
	const { problems } = props as ProblemProps;

	const ProblemsColumns = [
		{
			title: 'CVE ID',
			dataIndex: 'identifier',
			key: 'identifier',
			width: '12.25%',
			sorter: (a: Problem, b: Problem) => a.identifier.localeCompare(b.identifier),
			render: (identifier: string, problem: Problem) => {
				return (
					<ProblemIdentifier onClick={() => handleExpand(!expandedRowIds.includes(problem.id), problem)}>
						{identifier}
					</ProblemIdentifier>
				);
			},
		},
		{
			title: 'Detected',
			dataIndex: 'created',
			key: 'created',
			width: '11.25%',
			sorter: (a: Problem, b: Problem) => new Date(a.created).getTime() - new Date(b.created).getTime(),
			render: (created: string) => {
				const createdLocalTime = dayjs.utc(created).local();
				return (
					<Tooltip placement="top" title={createdLocalTime.format('YYYY-MM-DD HH:mm:ss')}>
						{createdLocalTime.fromNow()}
					</Tooltip>
				);
			},
		},
		{
			title: 'Source',
			dataIndex: 'source',
			key: 'source',
			width: '13.6%',
			sorter: (a: Problem, b: Problem) => a.source.localeCompare(b.source),
		},
		{
			title: 'Service',
			dataIndex: 'service',
			key: 'service',
			width: '9.89%',
			sorter: (a: Problem, b: Problem) => a.service.localeCompare(b.service),
		},
		{
			title: 'Package',
			dataIndex: 'associatedPackage',
			key: 'associatedPackage',
			width: '20.87%',
			sorter: (a: Problem, b: Problem) => a.associatedPackage.localeCompare(b.associatedPackage),
			render: (_: string, record: Problem) => {
				return (
					<>
						{record.associatedPackage}:{record.version}{' '}
					</>
				);
			},
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
			width: '21.77%',
			sorter: (a: Problem, b: Problem) => a.description.localeCompare(b.description),
			render: (description: string) => {
				return (
					<Tooltip title={description} placement="bottomRight" overlayInnerStyle={{ width: '400px' }}>
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

	const problemsWithActions =
		problems &&
		problems.map((problem) => {
			return {
				...problem,
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
			<BaseTable
				expandable={{
					expandedRowKeys: expandedRowIds,
					expandRowByClick: true,
					showExpandColumn: false,
					expandedRowRender: (record) => (
						<p style={{ margin: 0 }}>
							<Head4>Detailed problem description:</Head4>
							<br />
							{record.description}
						</p>
					),
				}}
				disableScrollable
				dataSource={problemsWithActions}
				columns={ProblemsColumns}
				rowKey={(record) => record.id}
				components={{
					body: {
						row: (props: any) => <tr {...props} data-cy="problem-row" />,
					},
				}}
			/>
		</>
	);
};

export default ProblemsTable;
