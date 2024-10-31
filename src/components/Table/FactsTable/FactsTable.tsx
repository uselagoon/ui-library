import BaseTable from '../Base';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import FactsTableSkeleton from './FactsTableSkeleton';

dayjs.extend(duration);
dayjs.extend(utc);

type Fact = {
	description: string;
	id: number;
	name: string;
	source: string;
	value: string;
};

export type FactsProps = {
	facts: Fact[];
	skeleton?: false;
};

export type FactsTableSkeleton = {
	skeleton: true;
};

export type FactsTableProps = FactsTableSkeleton | FactsProps;

const ProblemsTable = (props: FactsTableProps) => {
	if ('skeleton' in props && props.skeleton) {
		return <FactsTableSkeleton />;
	}

	const { facts } = props;

	const factsColumns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			width: '17.18%',
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
			width: '24.7%',
		},
		{
			title: 'Source',
			dataIndex: 'source',
			key: 'source',
			width: '20.94%',
		},
		{
			title: 'Value',
			dataIndex: 'value',
			key: 'value',
			width: '20.94%',
		},
	];

	return (
		<>
			<BaseTable dataSource={facts} columns={factsColumns} rowKey={(record) => record.id} />
		</>
	);
};

export default ProblemsTable;
