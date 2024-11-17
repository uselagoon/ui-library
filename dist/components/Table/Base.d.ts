import { TableProps } from 'antd';
import React from 'react';
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
export interface BaseTableWithComponents extends React.ForwardRefExoticComponent<BaseTableProps & React.RefAttributes<HTMLDivElement>> {
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
}
type BaseTableProps = Omit<TableProps, 'locale'> & {
    variant?: 'alternate' | 'default';
    lastRowBordered?: boolean;
};
declare const BaseTable: BaseTableWithComponents;
export default BaseTable;
export type { BaseTableProps };
