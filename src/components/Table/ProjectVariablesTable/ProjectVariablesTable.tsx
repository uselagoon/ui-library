import React, { ReactNode, useState } from 'react';
import { TableProps, Tooltip } from 'antd';
import { ActionWrap, EmptyAction } from '../styles';
import { LinkContainer } from '../DeploymentsTable/styles';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import BaseTable from '../Base';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import CopyToClipboard from '../../CopyToClipboard';
import ProjectVariablesSkeleton from './ProjectVariablesSkeleton';

dayjs.extend(duration);
dayjs.extend(utc);

type EnvVariableScope = 'build' | 'runtime' | 'global' | 'container_registry' | 'internal_container_registry';

export type Variable = {
	id: number;
	name: string;
	scope: EnvVariableScope;
	value?: string;
};

export type ProjectVariablesProps = {
	variables: Variable[];
	newVariableModal: ReactNode;
	deleteVariableModal: (currentVariable: Variable) => ReactNode;
	editVariableModal: (currentVariable: Variable) => ReactNode;
	skeleton?: false;
};

export type ProjectVariablesTableSkeleton = {
	skeleton: true;
};

export type ProjectVariablesTableProps = Omit<TableProps, 'pagination' | 'filteredValue'> &
	(ProjectVariablesTableSkeleton | ProjectVariablesProps);

const ProjectVariablesTable = (props: ProjectVariablesTableProps) => {
	if ('skeleton' in props && props.skeleton) {
		return <ProjectVariablesSkeleton />;
	}

	const { variables, editVariableModal, deleteVariableModal, newVariableModal } = props;

	// blur every variable initially.
	const [hiddenVars, setHiddenVars] = useState(variables.map((variable) => variable.id));

	const projectVariablesCols = [
		{
			title: 'Variable Name',
			dataIndex: 'name',
			key: 'name',
			width: '44%',
		},
		{
			title: 'Scope',
			dataIndex: 'scope',
			key: 'scope',
			width: '11.32%',
		},
		{
			title: 'Value',
			dataIndex: 'value',
			key: 'value',
			render: (value: string, record: Variable) => {
				return (
					<div style={{ maxWidth: '300px' }}>
						{value ? (
							<CopyToClipboard
								withToolTip={value.length > 45}
								text={value}
								type={hiddenVars.includes(record.id) ? 'hidden' : 'visible'}
							/>
						) : (
							'-'
						)}
					</div>
				);
			},
			width: '32.3%',
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: (item: string) => <div style={{ textAlign: 'center', fontSize: '1.25rem' }}>{item}</div>,
		},
	];

	const variablesWithActions =
		variables &&
		variables.map((variable) => {
			const id = variable.id;
			const isVariableHidden = hiddenVars.includes(id);

			const toggleShowHide = () => {
				setHiddenVars(
					(prev) =>
						prev.includes(id)
							? prev.filter((number) => number !== id) // remove if exists
							: [...prev, id], // add if not
				);
			};

			const blurIcon = isVariableHidden ? (
				<EyeInvisibleOutlined onClick={toggleShowHide} />
			) : (
				<EyeOutlined onClick={toggleShowHide} />
			);
			return {
				...variable,
				actions: (
					<ActionWrap>
						<LinkContainer>
							{variable.value ? (
								<Tooltip title={isVariableHidden ? 'show' : 'hide'}>{blurIcon}</Tooltip>
							) : (
								<EmptyAction></EmptyAction>
							)}
						</LinkContainer>
						{editVariableModal(variable)}
						{deleteVariableModal(variable)}
					</ActionWrap>
				),
			};
		});

	// only possible child is a `tr` element
	const summary = () => <tr className="summary">{newVariableModal}</tr>;

	return (
		<>
			<BaseTable
				dataSource={variablesWithActions}
				columns={projectVariablesCols}
				rowKey={(record) => record.id}
				summary={summary}
			/>
		</>
	);
};

export default ProjectVariablesTable;
