import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import BaseTable from '../Base';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import { ActionWrap } from '../styles';
import Modal from '../../Modal';
import { useState } from 'react';
import { ModalButton, ModalForm, ModalHeader, ModalText } from './styles';
import FormItem from '../../FormItem';
import Input from '../../Input';
import { useForm } from 'antd/es/form/Form';

dayjs.extend(utc);
dayjs.extend(relativeTime);

type Error = {
	message?: string;
};

type BasicFn = (...args: any[]) => any;
type sshKey = {
	id: number;
	name: string;
	created: string;
	keyType: string;
	keyValue: string;
	keyFingerprint: string;
};

export type SshTableProps = {
	sshKeys: sshKey[];
	refetch: BasicFn;
	deleteOptions?: {
		deleteFunction: BasicFn;
		deleteData?: any;
		deleteLoading: boolean;
		deleteErr?: Error;
	};
	updateOptions?: {
		updateFunction: BasicFn;
		updateData?: any;
		updateLoading: boolean;
		updateErr?: Error;
	};
	addNewKey: {
		addMutation: (keyName: string, keyValue: string) => Promise<any>;
		addLoading: boolean;
	};
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

const SshTable = ({ sshKeys, addNewKey: { addMutation, addLoading }, refetch }: SshTableProps) => {
	console.log(sshKeys);

	const [newModalOpen, setNewModalOpen] = useState(false);
	const [addForm] = useForm();

	const handleAddKey = () => {
		addForm
			.validateFields()
			.then(() => {
				const { keyName, keyValue } = addForm.getFieldsValue();

				addMutation(keyName, keyValue).then(() => {
					refetch();
				});
			})
			.catch(() => {});
	};

	const handleAddModalClose = () => {
		setNewModalOpen(false);
		addForm.resetFields();
	};
	// add new key modal
	const lastRow = {
		name: (
			<>
				<ModalButton
					iconBefore={<PlusOutlined size={100} />}
					onClick={() => setNewModalOpen(true)}
					size="middle"
					type="primary"
				>
					Add new key
				</ModalButton>
				<Modal
					confirmText="Create"
					subTitle={<ModalText>Step 1 of 1</ModalText>}
					title={<ModalHeader>Add a SSH Key</ModalHeader>}
					open={newModalOpen}
					onCancel={handleAddModalClose}
					minHeight="350px"
					onOk={handleAddKey}
					confirmLoading={addLoading}
				>
					<ModalForm form={addForm}>
						<FormItem required rules={[{ required: true, message: '' }]} label="Key Name" name="keyName">
							<Input placeholder="Enter a name for the variable" />
						</FormItem>

						<FormItem required rules={[{ required: true, message: '' }]} label="Fingerprint Value" name="keyValue">
							<Input placeholder="Enter the variable value" />
						</FormItem>
					</ModalForm>
				</Modal>
			</>
		),
	};

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

	return <BaseTable dataSource={[...relativelyTimedKeysWithActions, lastRow]} columns={sshColumns} />;
};

export default SshTable;
