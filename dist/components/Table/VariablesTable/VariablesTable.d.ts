import { ReactNode } from 'react';
import { TableProps } from 'antd';
type EnvVariableScope = 'build' | 'runtime' | 'global' | 'container_registry' | 'internal_container_registry';
export type Variable = {
    id: number;
    name: string;
    scope: EnvVariableScope;
    value?: string;
};
export type EnvironmentVariableType = {
    type: 'environment';
    resultsPerPage?: number;
    sortBy?: 'name_asc' | 'name_desc' | 'scope_asc' | 'scope_desc' | null;
    filterString?: string;
    filterScope?: EnvVariableScope;
    resultDropdown?: ReactNode;
};
export type ProjectVariableType = {
    type: 'project';
};
/**
 * either project variables or project environment variables.
 */
export type VariablesProps = {
    variables: Variable[];
    newVariableModal: ReactNode;
    deleteVariableModal: (currentVariable: Variable) => ReactNode;
    editVariableModal: (currentVariable: Variable) => ReactNode;
    /**
     * when withValues is false, variable values and extra actions are not rendered.
     */
    withValues?: boolean;
    skeleton?: false;
} & (EnvironmentVariableType | ProjectVariableType);
export type VariablesTableSkeleton = {
    skeleton: true;
    withValues?: boolean;
};
export type VariablesTableProps = Omit<TableProps, 'pagination' | 'filteredValue'> & (VariablesTableSkeleton | VariablesProps);
declare const VariablesTable: (props: VariablesTableProps) => import("react/jsx-runtime").JSX.Element;
export default VariablesTable;
