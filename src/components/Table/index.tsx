import { default as Table, BaseTableProps } from './Base';
import DeploymentsaTable from './DeploymentsTable/DeploymentsTable';
import { default as SshTable } from './SshTable/SshTable';

export type { BaseTableProps };

// Different types of tables
Table.SshTable = SshTable;
Table.DeploymentsTable = DeploymentsaTable;

export default Table;
