import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { TableProps, Tooltip } from 'antd';
import { ActionWrap, EmptyAction, TableSummary } from '../styles';
import { LinkContainer } from '../DeploymentsTable/styles';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import BaseTable from '../Base';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import CopyToClipboard from '../../CopyToClipboard';
import VariablesSkeleton from './VariablesSkeleton';
import { PaginationWithSelector } from '../FactsTable/FactsTable';
import Pagination from '../../Pagination';
import type { RenderedCell } from 'rc-table/lib/interface';
import { highlightTextInElement } from '../../../_util/helpers';

dayjs.extend(duration);
dayjs.extend(utc);

type EnvVariableScope = 'build' | 'runtime' | 'global' | 'container_registry' | 'internal_container_registry';

export type Variable = {
	id: number;
	name: string;
	scope: EnvVariableScope;
	value?: string;
};

export type EnvironmentVariableType = {
	type: 'environment';
	resultsPerPage?: number;
	sortBy?: 'name_asc' | 'name_desc' | 'scope_asc' | 'scope_desc' | null;
	filterString?: string;
	filterScope?: EnvVariableScope;
	resultDropdown?: ReactNode;
};
export type ProjectVariableType = {
	type: 'project';
};

/**
 * either project variables or project environment variables.
 */

export type VariablesProps = {
	variables: Variable[];
	newVariableModal: ReactNode;
	deleteVariableModal: (currentVariable: Variable) => ReactNode;
	editVariableModal: (currentVariable: Variable) => ReactNode;
	skeleton?: false;
} & (EnvironmentVariableType | ProjectVariableType);

export type VariablesTableSkeleton = {
	skeleton: true;
};

export type VariablesTableProps = Omit<TableProps, 'pagination' | 'filteredValue'> &
	(VariablesTableSkeleton | VariablesProps);

const VariablesTable = (props: VariablesTableProps) => {
	if ('skeleton' in props && props.skeleton) {
		return <VariablesSkeleton />;
	}

	const { variables, editVariableModal, deleteVariableModal, newVariableModal, type } = props;

	// blur every variable initially.
	const [hiddenVars, setHiddenVars] = useState(variables.map((variable) => variable.id));

	// pagination
	const [currentPage, setCurrentPage] = useState(1);

	const initialResults = props.type === 'environment' ? props.resultsPerPage : 10;

	const [pageSize, setResultsPerPage] = useState(initialResults || 10);

	useEffect(() => {
		if (initialResults) {
			setResultsPerPage(initialResults);
		}
	}, [initialResults]);

	let filterStr: EnvironmentVariableType['filterString'];
	let sort: EnvironmentVariableType['sortBy'];
	let varScope: EnvironmentVariableType['filterScope'];

	const isEnvTable = type === 'environment';

	if (isEnvTable) {
		const { filterScope, filterString = '', sortBy } = props;
		filterStr = filterString;
		sort = sortBy;
		varScope = filterScope;
	}

	const stringFilteredVariables =
		variables && isEnvTable && filterStr
			? variables.filter((variable) => {
					const fieldsToCheck = [variable.name, variable.scope];

					return fieldsToCheck.some((fieldValue) =>
						String(fieldValue).toLowerCase().includes(String(filterStr).toLowerCase()),
					);
				})
			: variables;

	// sorting based on sortBy
	const sortColumn = sort ? sort.split('_')[0] : null;
	const sortOrder = sort ? sort.split('_')[1] : null;
	const sortedVariables = isEnvTable
		? [...stringFilteredVariables].sort((a, b) => {
				if (sortColumn) {
					const aValue = a[sortColumn as keyof Variable];
					const bValue = b[sortColumn as keyof Variable];

					// determine the sort direction (1 for asc, -1 for desc)
					const direction = sortOrder === 'asc' ? 1 : -1;

					// possible null checks.
					if (aValue == null && bValue == null) return 0;
					if (aValue == null) return direction;
					if (bValue == null) return -direction;

					if (aValue > bValue) return direction;
					if (aValue < bValue) return -direction;
				}
				return 0;
			})
		: stringFilteredVariables;

	// paginate based on the current filtered data ( variable scope )
	const scopeFilteredVariables = useMemo(() => {
		// no scope exists for project env table
		if (!varScope) {
			return sortedVariables || [];
		}

		return sortedVariables ? sortedVariables.filter((variable) => variable.scope === varScope) : [];
	}, [sortedVariables, varScope]);

	// paginated data based on filtered results
	const paginatedVariables = !isEnvTable
		? scopeFilteredVariables
		: pageSize > 0
			? scopeFilteredVariables.slice((currentPage - 1) * pageSize, currentPage * pageSize)
			: scopeFilteredVariables;

	const totalFilteredCount = paginatedVariables.length;

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const getSortedClass = (columnKey: string) => {
		return sortColumn === columnKey ? 'custom-sorted' : '';
	};

	const projectVariablesCols = [
		{
			title: 'Variable Name',
			dataIndex: 'name',
			key: 'name',
			width: '44%',
			render: (name: string, _: Variable) => {
				return <>{name}</>;
			},
			className: getSortedClass('name'),
		},
		{
			title: 'Scope',
			dataIndex: 'scope',
			key: 'scope',
			width: '11.32%',
			className: getSortedClass('scope'),
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
	// highlight manually sorted columns
	const fieldsToCheck = ['name', 'scope'];

	const highlightedColumns =
		projectVariablesCols &&
		projectVariablesCols.map((col) => {
			return {
				...col,
				render: (renderElement: any, record: any, index: number): React.ReactNode | RenderedCell<any> => {
					const renderedContent = col.render ? col.render(renderElement, record) : renderElement;

					const shouldHighlight = fieldsToCheck.includes(col.dataIndex);
					if (shouldHighlight) {
						// RenderedCell or ReactNode
						if (typeof renderedContent === 'object' && 'children' in renderedContent) {
							return {
								...renderedContent,
								children: highlightTextInElement(renderedContent.children, filterStr || '', index),
							};
						}

						return highlightTextInElement(renderedContent, filterStr || '', index);
					}
					return renderedContent;
				},
			};
		});

	const variablesWithActions =
		paginatedVariables &&
		paginatedVariables.map((variable) => {
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
								<Tooltip title={!isVariableHidden ? 'show' : 'hide'}>{blurIcon}</Tooltip>
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

	return (
		<>
			<BaseTable
				dataSource={variablesWithActions}
				columns={highlightedColumns}
				rowKey={(record) => record.id}
				hasSummary
			/>

			<TableSummary>{newVariableModal}</TableSummary>

			{isEnvTable ? (
				<PaginationWithSelector>
					<section className="selector">{props.resultDropdown}</section>
					<Pagination
						total={totalFilteredCount}
						pageSize={pageSize === -1 ? Infinity : pageSize}
						current={currentPage}
						onChange={handlePageChange}
					/>
				</PaginationWithSelector>
			) : null}
		</>
	);
};

export default VariablesTable;
