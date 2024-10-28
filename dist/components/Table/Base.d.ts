/// <reference types="react" />
import { TableProps } from 'antd';
import { SshTableProps } from './SshTable/SshTable';
import { DeploymentsTableProps } from './DeploymentsTable/DeploymentsTable';
import { BackupsTableProps } from './BackupsTable/BackupsTable';
export interface BaseTableWithComponents extends React.ForwardRefExoticComponent<BaseTableProps & React.RefAttributes<HTMLDivElement>> {
    SshTable: React.FC<SshTableProps>;
    DeploymentsTable: React.FC<DeploymentsTableProps>;
    BackupsTable: React.FC<BackupsTableProps>;
}
type BaseTableProps = Omit<TableProps, 'locale'>;
declare const BaseTable: BaseTableWithComponents;
export default BaseTable;
export type { BaseTableProps };
