import { default as Table, BaseTableProps } from './Base';
import DeploymentsTable from './DeploymentsTable/DeploymentsTable';
import BackupsTable from './BackupsTable/BackupsTable';
import ProblemsTable from './ProblemsTable/ProblemsTable';
import FactsTable from './FactsTable/FactsTable';
import InsightsTable from './InsightsTable/InsightsTable';
import TasksTable from './TasksTable/TasksTable';
import ProjectsTable from './ProjectsTable/ProjectsTable';
import EnvironmentsTable from './EnvironmentsTable/EnvironmentsTable';
import AllDeploymentsTable from './AllDeploymentsTable/AllDeploymentsTable';
import BulkDeploymentsTable from './BulkDeployments/BulkDeploymentsTable';
import { default as SshTable } from './SshTable/SshTable';

export type { BaseTableProps };

// Different types of tables
Table.ProjectsTable = ProjectsTable;
Table.SshTable = SshTable;
Table.DeploymentsTable = DeploymentsTable;
Table.BackupsTable = BackupsTable;
Table.ProblemsTable = ProblemsTable;
Table.FactsTable = FactsTable;
Table.InsightsTable = InsightsTable;
Table.TasksTable = TasksTable;
Table.EnvironmentsTable = EnvironmentsTable;
Table.AllDeploymentsTable = AllDeploymentsTable;
Table.BulkDeploymentsTable = BulkDeploymentsTable;
export default Table;
