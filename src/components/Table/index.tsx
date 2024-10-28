import { default as Table, BaseTableProps } from './Base';
import DeploymentsTable from './DeploymentsTable/DeploymentsTable';
import BackupsTable from './BackupsTable/BackupsTable';
import { default as SshTable } from './SshTable/SshTable';

export type { BaseTableProps };

// Different types of tables
Table.SshTable = SshTable;
Table.DeploymentsTable = DeploymentsTable;
Table.BackupsTable = BackupsTable;

export default Table;
