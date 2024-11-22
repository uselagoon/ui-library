import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import BaseTable from '../Base';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import { ActionWrap } from '../styles';
import Modal from '../../Modal';
import { useState } from 'react';
import { Highlighted, ModalButton, ModalForm, ModalHeader, ModalText } from './styles';
import FormItem from '../../FormItem';
import Input from '../../Input';
import { useForm } from 'antd/es/form/Form';
import { Tooltip } from 'antd';

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
	lastUsed?: string | null;
};

export type SshTableProps = {
	sshKeys: sshKey[];
	refetch: BasicFn;
	deleteKey: {
		delete: BasicFn;
		data?: any;
		loading: boolean;
		err?: Error;
	};
	updateKey: {
		update: BasicFn;
		data?: any;
		loading: boolean;
		err?: Error;
	};
	addNewKey: {
		add: (keyName: string, keyValue: string) => Promise<any>;
		loading: boolean;
		err?: Error;
	};
};

const sshColumns = [
	{
		title: 'Key ID - Name',
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
		width: '24%',
	},
	{
		title: 'Created',
		dataIndex: 'created',
		key: 'created',
		width: '17.4%',
	},
	{
		title: 'Last Used',
		dataIndex: 'lastUsed',
		key: 'lastUsed',
		width: '17.4%',
	},
	{
		title: 'Actions',
		dataIndex: 'actions',
		key: 'actions',
	},
];

const SshTable = ({ sshKeys, addNewKey: { add, loading }, updateKey, deleteKey, refetch }: SshTableProps) => {
	const [newModalOpen, setNewModalOpen] = useState(false);
	const [addForm] = useForm();

	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [deleteForm] = useForm();

	const [editModalOpen, setEditModalOpen] = useState(false);
	const [editForm] = useForm();

	const [selectedKey, setSelectedKey] = useState<sshKey>();
	const [deleteDisabled, setDeleteDisabled] = useState(true);

	const handleAddModalClose = () => {
		setNewModalOpen(false);
		addForm.resetFields();
	};

	const handleEditModalClose = () => {
		setEditModalOpen(false);
		editForm.resetFields();
		setSelectedKey(undefined);
	};

	const handleDeleteModalClose = () => {
		setDeleteModalOpen(false);
		setSelectedKey(undefined);
		deleteForm.resetFields();
	};

	const handleAddKey = () => {
		addForm
			.validateFields()
			.then(() => {
				const { keyName, keyValue } = addForm.getFieldsValue();

				add(keyName, keyValue).finally(() => {
					refetch();
					handleAddModalClose();
				});
			})
			.catch(() => {});
	};

	const handleEditKey = () => {
		editForm
			.validateFields()
			.then(() => {
				const { keyName, keyValue } = editForm.getFieldsValue();

				updateKey.update(selectedKey?.id, keyName, selectedKey?.keyType, keyValue).finally(() => {
					refetch();
					handleEditModalClose();
				});
			})
			.catch(() => {});
	};

	const handleDeleteKey = () => {
		deleteKey.delete(selectedKey?.id).finally(() => {
			refetch();
			handleDeleteModalClose();
		});
	};

	const renderEditModal = () => {
		return (
			<Modal
				confirmText="Update"
				title={<ModalHeader>Edit SSH Key</ModalHeader>}
				open={editModalOpen}
				onCancel={handleEditModalClose}
				minHeight="350px"
				destroyOnClose
				onOk={handleEditKey}
				confirmLoading={updateKey?.loading}
			>
				<ModalForm form={editForm}>
					<FormItem
						required
						rules={[{ required: true, message: '' }]}
						initialValue={selectedKey?.name}
						label="Key Name"
						name="keyName"
					>
						<Input placeholder="Enter a name for the variable" />
					</FormItem>

					<FormItem
						required
						rules={[{ required: true, message: '' }]}
						initialValue={selectedKey?.keyValue}
						label="Fingerprint Value"
						name="keyValue"
					>
						<Input placeholder="Enter the variable value" />
					</FormItem>
				</ModalForm>
			</Modal>
		);
	};

	const renderDeleteModal = () => {
		return (
			<Modal
				confirmText="Delete"
				title={<ModalHeader>Delete SSH Key</ModalHeader>}
				open={deleteModalOpen}
				onCancel={handleDeleteModalClose}
				minHeight="200px"
				onOk={handleDeleteKey}
				confirmLoading={deleteKey?.loading}
				dangerConfirm
				confirmDisabled={deleteDisabled}
			>
				<>
					This action will delete the SSH key <Highlighted>{selectedKey?.name}</Highlighted> and cannot be undone.
					<ModalForm form={deleteForm}>
						<FormItem
							required
							rules={[{ required: true, message: '' }]}
							label="Type the name of the SSH Key to confirm"
							name="keyName"
						>
							<Input
								placeholder="Variable name"
								value={selectedKey?.name}
								onChange={(e) => {
									setDeleteDisabled(e.target.value !== selectedKey?.name);
								}}
							/>
						</FormItem>
					</ModalForm>
				</>
			</Modal>
		);
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
					confirmLoading={loading}
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
				{renderEditModal()}
				{renderDeleteModal()}
			</>
		),
	};

	const relativelyTimedKeysWithActions =
		sshKeys &&
		sshKeys.map((key) => {
			return {
				...key,
				name: (
					<>
						{key.id} - {key.name}
					</>
				),
				created: (
					<Tooltip placement="top" title={key.created}>
						{dayjs.utc(key.created).local().fromNow()}
					</Tooltip>
				),
				lastUsed: (
					<Tooltip placement="top" title={key.lastUsed ?? 'This key has not been used yet.'}>
						{key.lastUsed ? dayjs.utc(key.lastUsed).local().fromNow() : 'Never'}
					</Tooltip>
				),

				actions: (
					<ActionWrap>
						<EditOutlined
							onClick={() => {
								setSelectedKey(key);
								setEditModalOpen(true);
							}}
						/>

						<DeleteOutlined
							onClick={() => {
								setSelectedKey(key);
								setDeleteModalOpen(true);
							}}
						/>
					</ActionWrap>
				),
			};
		});

	return (
		<BaseTable
			rowKey={(record) => record.id || record.name}
			dataSource={[...relativelyTimedKeysWithActions, lastRow]}
			columns={sshColumns}
		/>
	);
};

export default SshTable;
