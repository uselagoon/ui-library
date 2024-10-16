/// <reference types="react" />
import { TableProps } from 'antd';
export interface BaseTableWithComponents extends React.ForwardRefExoticComponent<BaseTableProps & React.RefAttributes<HTMLDivElement>> {
    SshTable: React.FC<any>;
}
type BaseTableProps = Omit<TableProps, 'locale'>;
declare const BaseTable: BaseTableWithComponents;
export default BaseTable;
export type { BaseTableProps };
