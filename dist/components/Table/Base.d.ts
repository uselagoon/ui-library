/// <reference types="react" />
import { TableProps } from 'antd';
import { SshTableProps } from './SshTable/SshTable';
export interface BaseTableWithComponents extends React.ForwardRefExoticComponent<BaseTableProps & React.RefAttributes<HTMLDivElement>> {
    SshTable: React.FC<SshTableProps>;
}
type BaseTableProps = Omit<TableProps, 'locale'>;
declare const BaseTable: BaseTableWithComponents;
export default BaseTable;
export type { BaseTableProps };
