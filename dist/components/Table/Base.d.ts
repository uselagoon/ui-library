import { TableProps } from 'antd';
import React from 'react';
import { SshTableProps } from './SshTable/SshTable';
import { DeploymentsTableProps } from './DeploymentsTable/DeploymentsTable';
import { BackupsTableProps } from './BackupsTable/BackupsTable';
import { ProblemsTableProps } from './ProblemsTable/ProblemsTable';
import { FactsTableProps } from './FactsTable/FactsTable';
import { InsightsTableProps } from './InsightsTable/InsightsTable';
export interface BaseTableWithComponents extends React.ForwardRefExoticComponent<BaseTableProps & React.RefAttributes<HTMLDivElement>> {
    SshTable: React.FC<SshTableProps>;
    DeploymentsTable: React.FC<DeploymentsTableProps>;
    BackupsTable: React.FC<BackupsTableProps>;
    ProblemsTable: React.FC<ProblemsTableProps>;
    FactsTable: React.FC<FactsTableProps>;
    InsightsTable: React.FC<InsightsTableProps>;
}
type BaseTableProps = Omit<TableProps, 'locale'>;
declare const BaseTable: BaseTableWithComponents;
export default BaseTable;
export type { BaseTableProps };
