import { ConfigProvider, TableProps } from 'antd';
import React, { forwardRef } from 'react';
import { StyledBaseTable } from './styles';
import { EmptyDisplay } from './Empty';
import { SshTableProps } from './SshTable/SshTable';
import { DeploymentsTableProps } from './DeploymentsTable/DeploymentsTable';
import { BackupsTableProps } from './BackupsTable/BackupsTable';
import { ProblemsTableProps } from './ProblemsTable/ProblemsTable';
import { FactsTableProps } from './FactsTable/FactsTable';
import { InsightsTableProps } from './InsightsTable/InsightsTable';
import { TasksTableProps } from './TasksTable/TasksTable';
import { ProjectsTableProps } from './ProjectsTable/ProjectsTable';
import { EnvironmentsTableProps } from './EnvironmentsTable/EnvironmentsTable';
import { AllDeploymentsTableProps } from './AllDeploymentsTable/AllDeploymentsTable';
import { BulkDeploymentsTableProps } from './BulkDeployments/BulkDeploymentsTable';
import { VariablesTableProps } from './VariablesTable/VariablesTable';
import { DeploymenTableProps } from './DeploymentTable/DeploymentTable';
import { TaskTableProps } from './TaskTable/TaskTable';
import { OrganizationsTableProps } from './OrganizationsTable/OrganizationsTable';
import { GroupsTableProps } from './Organizations/OrgGroupsTable/OrgGroupsTable';
import { UsersProps } from './Organizations/OrgUsersTable/OrgUserstable';
import { OrgProjectsProps } from './Organizations/OrgProjectsTable/OrgProjectsTable';
import { NotificationsTableProps } from './Organizations/OrgNotificationsTable/OrgNotificationsTable';
import { OwnersTableProps } from './Organizations/OrgAdminsTable/OrgAdminsTable';
import { OrgUserGroupsTableProps } from './Organizations/OrgUserGroupsTable/OrgUserGroupsTable';

export interface BaseTableWithComponents
	extends React.ForwardRefExoticComponent<BaseTableProps & React.RefAttributes<HTMLDivElement>> {
	SshTable: React.FC<SshTableProps>;
	DeploymentsTable: React.FC<DeploymentsTableProps>;
	BackupsTable: React.FC<BackupsTableProps>;
	ProblemsTable: React.FC<ProblemsTableProps>;
	FactsTable: React.FC<FactsTableProps>;
	InsightsTable: React.FC<InsightsTableProps>;
	TasksTable: React.FC<TasksTableProps>;
	TaskTable: React.FC<TaskTableProps>;
	ProjectsTable: React.FC<ProjectsTableProps>;
	EnvironmentsTable: React.FC<EnvironmentsTableProps>;
	AllDeploymentsTable: React.FC<AllDeploymentsTableProps>;
	BulkDeploymentsTable: React.FC<BulkDeploymentsTableProps>;
	VariablesTable: React.FC<VariablesTableProps>;
	DeploymentTable: React.FC<DeploymenTableProps>;
	OrganizationsTable: React.FC<OrganizationsTableProps>;
	OrgGroupsTable: React.FC<GroupsTableProps>;
	OrgUsersTable: React.FC<UsersProps>;
	OrgProjectsTable: React.FC<OrgProjectsProps>;
	OrgNotificationsTable: React.FC<NotificationsTableProps>;
	OrgAdminsTable: React.FC<OwnersTableProps>;
	OrgUserGroupsTable: React.FC<OrgUserGroupsTableProps>;
	DefaultTable: React.FC<BaseTableProps>;
}

type BaseTableProps = Omit<TableProps, 'locale'> & {
	variant?: 'alternate' | 'default';
	lastRowBordered?: boolean;
	withBg?: boolean;
	disableScrollable?: boolean;
	hasSummary?: boolean;
};

const InternalTable: React.ForwardRefRenderFunction<HTMLDivElement, BaseTableProps> = (
	{
		columns,
		dataSource,
		children,
		lastRowBordered = false,
		variant = 'default',
		disableScrollable = false,
		withBg = false,
		hasSummary = false,
		...props
	}: BaseTableProps,
	_,
) => {
	const scrollProp = disableScrollable !== true ? { x: 'max-content' } : {};
	return (
		<>
			<ConfigProvider renderEmpty={() => EmptyDisplay}>
				<StyledBaseTable
					$variant={variant}
					$withBg={withBg}
					$lastRowBordered={lastRowBordered}
					$hasSummary={hasSummary}
					dataSource={dataSource}
					columns={columns}
					ref={null}
					pagination={false}
					scroll={scrollProp}
					{...props}
				/>
			</ConfigProvider>
		</>
	);
};

const BaseTable = forwardRef<HTMLDivElement, BaseTableProps>(InternalTable) as BaseTableWithComponents;

BaseTable.displayName = 'Table';

export default BaseTable;

export type { BaseTableProps };
