import { default as Table, BaseTableProps } from './Base';
import { default as SshTable } from './SshTable/SshTable';

export type { BaseTableProps };

Table.SshTable = SshTable;

export default Table;
