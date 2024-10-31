import { default as Table, BaseTableProps } from './Base';
import DeploymentsTable from './DeploymentsTable/DeploymentsTable';
import BackupsTable from './BackupsTable/BackupsTable';
import ProblemsTable from './ProblemsTable/ProblemsTable';
import FactsTable from './FactsTable/FactsTable';
import InsightsTable from './InsightsTable/InsightsTable';
import TasksTable from './TasksTable/TasksTable';
import { default as SshTable } from './SshTable/SshTable';

export type { BaseTableProps };

// Different types of tables
Table.SshTable = SshTable;
Table.DeploymentsTable = DeploymentsTable;
Table.BackupsTable = BackupsTable;
Table.ProblemsTable = ProblemsTable;
Table.FactsTable = FactsTable;
Table.InsightsTable = InsightsTable;
Table.TasksTable = TasksTable;
export default Table;
