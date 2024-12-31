import BaseTable, { default as Table, BaseTableProps } from './Base';
import DeploymentsTable from './DeploymentsTable/DeploymentsTable';
import BackupsTable from './BackupsTable/BackupsTable';
import ProblemsTable from './ProblemsTable/ProblemsTable';
import FactsTable from './FactsTable/FactsTable';
import InsightsTable from './InsightsTable/InsightsTable';
import TasksTable from './TasksTable/TasksTable';
import TaskTable from './TaskTable/TaskTable';
import ProjectsTable from './ProjectsTable/ProjectsTable';
import EnvironmentsTable from './EnvironmentsTable/EnvironmentsTable';
import AllDeploymentsTable from './AllDeploymentsTable/AllDeploymentsTable';
import BulkDeploymentsTable from './BulkDeployments/BulkDeploymentsTable';
import VariablesTable from './VariablesTable/VariablesTable';

import DeploymentTable from './DeploymentTable/DeploymentTable';
import { default as SshTable } from './SshTable/SshTable';

import OrganizationsTable from './OrganizationsTable/OrganizationsTable';
import OrgGroupsTable from './Organizations/OrgGroupsTable/OrgGroupsTable';
import OrgUsersTable from './Organizations/OrgUsersTable/OrgUserstable';
import OrgProjectsTable from './Organizations/OrgProjectsTable/OrgProjectsTable';
import OrgNotificationsTable from './Organizations/OrgNotificationsTable/OrgNotificationsTable';
import OrgAdminsTable from './Organizations/OrgAdminsTable/OrgAdminsTable';
import OrgUserGroupsTable from './Organizations/OrgUserGroupsTable/OrgUserGroupsTable';

export type { BaseTableProps };

// Different types of tables
Table.DefaultTable = BaseTable;
Table.ProjectsTable = ProjectsTable;
Table.SshTable = SshTable;
Table.DeploymentsTable = DeploymentsTable;
Table.BackupsTable = BackupsTable;
Table.ProblemsTable = ProblemsTable;
Table.FactsTable = FactsTable;
Table.InsightsTable = InsightsTable;
Table.TasksTable = TasksTable;
Table.TaskTable = TaskTable;
Table.EnvironmentsTable = EnvironmentsTable;
Table.AllDeploymentsTable = AllDeploymentsTable;
Table.BulkDeploymentsTable = BulkDeploymentsTable;
Table.VariablesTable = VariablesTable;
Table.DeploymentTable = DeploymentTable;

//ORGS
Table.OrganizationsTable = OrganizationsTable;
Table.OrgGroupsTable = OrgGroupsTable;
Table.OrgUsersTable = OrgUsersTable;
Table.OrgProjectsTable = OrgProjectsTable;
Table.OrgNotificationsTable = OrgNotificationsTable;
Table.OrgAdminsTable = OrgAdminsTable;
Table.OrgUserGroupsTable = OrgUserGroupsTable;

export default Table;
