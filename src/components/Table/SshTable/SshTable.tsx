import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import BaseTable from '../Base';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import { ActionWrap } from '../styles';

dayjs.extend(utc);
dayjs.extend(relativeTime);

type Error = {
	message?: string;
};
type sshKey = {
	id: number;
	name: string;
	created: string;
	keyType: string;
	keyValue: string;
	keyFingerprint: string;
	deleteMutation: {
		mutate: () => void;
		loading: boolean;
		called: boolean;
		error?: Error;
	};
	updateMutation: {
		mutate: (name: string, publicKey: string) => void;
		loading: boolean;
		called: boolean;
		error?: Error;
	};
};

export type SshTableProps = {
	sshKeys: sshKey[];
	deleteMutation: (variables: {
		input: {
			id: sshKey['id'];
		};
	}) => void;
	updateMutation: (variables: {
		input: {
			id: sshKey['id'];
			patch: {
				name: sshKey['name'];
				publicKey: string;
			};
		};
	}) => void;
};

const sshColumns = [
	{
		title: 'Key Name',
		dataIndex: 'name',
		key: 'name',
		width: '17.4%',
	},
	{
		title: 'Type',
		dataIndex: 'keyType',
		key: 'keyType',
		width: '11.7%',
	},
	{
		title: 'Fingerprint',
		dataIndex: 'keyFingerprint',
		key: 'keyFingerprint',
		width: '41.3%',
	},
	{
		title: 'Timestamp',
		dataIndex: 'created',
		key: 'created',
		width: '17.4%',
	},
	{
		title: 'Actions',
		dataIndex: 'actions',
		key: 'actions',
	},
];

const SshTable = ({ sshKeys, deleteMutation, updateMutation }: SshTableProps) => {
	console.log(sshKeys);

	const relativelyTimedKeysWithActions =
		sshKeys &&
		sshKeys.map((key) => {
			return {
				...key,
				created: dayjs.utc(key.created).local().fromNow(),
				actions: (
					<ActionWrap>
						<EditOutlined />
						<DeleteOutlined />
					</ActionWrap>
				),
			};
		});

	return <BaseTable dataSource={relativelyTimedKeysWithActions} columns={sshColumns} />;
};

export default SshTable;
