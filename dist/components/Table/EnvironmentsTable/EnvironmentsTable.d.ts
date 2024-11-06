import { ReactNode } from 'react';
import { TableProps } from 'antd';
import { LagoonCardLabelProps } from '../../CardLabel';
import { DefaultCardProps } from '../../Card/Card';
export type Environment = {
    id?: number;
    title: string;
    deployType: string;
    envType: LagoonCardLabelProps['type'];
    region: null | string;
    quickActions?: DefaultCardProps['quickActions'];
    activeRoutes?: JSX.Element[];
    last_deployment?: string;
};
export type EnvironmentsProps = {
    environments: Environment[];
    newEnvironmentModal: ReactNode;
    basePath: string;
    resultsPerPage?: number;
    filterString?: string;
    skeleton?: false;
};
export type EnvironmentsTableSkeleton = {
    skeleton: true;
};
export type EnvironmentsTableProps = Omit<TableProps, 'pagination' | 'filteredValue'> & (EnvironmentsTableSkeleton | EnvironmentsProps);
declare const EnvironmentsTable: (props: EnvironmentsTableProps) => import("react/jsx-runtime").JSX.Element;
export default EnvironmentsTable;
