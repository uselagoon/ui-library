import { EyeOutlined } from '@ant-design/icons';
import BaseTable from '../Base';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { ActionWrap, EmptyAction } from '../styles';
import { useEffect, useMemo, useState } from 'react';
import StatusTag from '../../StatusTag';
import { StatusContainer } from '../DeploymentsTable/styles';
import Pagination from '../../Pagination';
import BackupsTableSkeleton from './BackupsTableSkeleton';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(utc);
dayjs.extend(relativeTime);

type Backup = {
	id: number;
	source: string;
	backupId: string;
	created: string;
	restore: {
		id: number;
		status: 'pending' | 'failed' | 'complete';
		restoreLocation?: string | null;
		restoreSize?: string | null;
	} | null;
};

export type BackupsProps = {
	backups: Backup[];
	skeleton?: false;
};

export type BackupsTableSkeleton = {
	skeleton: true;
};

export type BackupsTableProps = {
	resultsPerPage?: number;
	filterStatus?: 'pending' | 'failed' | 'complete';
	filterDateRange?: [string, string];
} & (BackupsTableSkeleton | BackupsProps);

const BackupsTable = (props: BackupsTableProps) => {
	const { resultsPerPage, filterStatus, filterDateRange } = props;

	// pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setResultsPerPage] = useState(resultsPerPage || 10);

	useEffect(() => {
		if (resultsPerPage) {
			setResultsPerPage(resultsPerPage);
		}
	}, [resultsPerPage]);

	if ('skeleton' in props && props.skeleton) {
		return <BackupsTableSkeleton />;
	}

	const { backups } = props as BackupsProps;

	// paginate based on the current filtered data ( status and date range )
	const filteredBackups = useMemo(() => {
		return backups
			? backups.filter((item) => {
					const statusMatches = filterStatus ? item?.restore?.status === filterStatus : true;
					const dateMatches =
						filterDateRange && filterDateRange.every(Boolean)
							? new Date(item.created) >= new Date(filterDateRange[0]) &&
								new Date(item.created) <= new Date(filterDateRange[1])
							: true;

					return statusMatches && dateMatches;
				})
			: [];
	}, [backups, filterStatus, filterDateRange]);

	// paginated data based on filtered results
	const paginatedData =
		pageSize > 0 ? filteredBackups.slice((currentPage - 1) * pageSize, currentPage * pageSize) : filteredBackups;

	const totalFilteredCount = filteredBackups.length;

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const backupsColumns = [
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			width: '9.5%',
			render: (statusTag: ReturnType<typeof StatusTag>) => {
				return <StatusContainer>{statusTag}</StatusContainer>;
			},
		},
		{
			title: 'Source',
			dataIndex: 'source',
			key: 'source',
			width: '11.76%',
			render: (source: string, backup: Backup) => {
				return <span>{source}</span>;
			},
		},
		{
			title: 'Backup ID',
			dataIndex: 'backupId',
			key: 'backupId',
			width: '44.81%',
		},
		{
			title: 'Timestamp',
			dataIndex: 'created',
			key: 'created',
			width: '17.43%',
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
		},
	];

	const remappedBackups =
		paginatedData &&
		paginatedData.map((backup) => {
			return {
				...backup,
				created: dayjs.utc(backup.created).local().fromNow(),
				status: <>{backup.restore?.status ? <StatusTag type={backup.restore?.status} /> : null}</>,
				actions: (
					<ActionWrap>
						{/**TODO: TRIGGER/DOWNLOAD BACKUP*/}

						<EmptyAction></EmptyAction>
					</ActionWrap>
				),
			};
		});

	return (
		<>
			<BaseTable dataSource={remappedBackups} columns={backupsColumns} rowKey={(record) => record.id} />
			<Pagination
				total={totalFilteredCount}
				pageSize={pageSize === -1 ? Infinity : pageSize}
				current={currentPage}
				onChange={handlePageChange}
			/>
		</>
	);
};

export default BackupsTable;
