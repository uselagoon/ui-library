import { ReactNode } from 'react';
import { TableProps } from 'antd';
type EnvVariableScope = 'build' | 'runtime' | 'global' | 'container_registry' | 'internal_container_registry';
export type Variable = {
    id: number;
    name: string;
    scope: EnvVariableScope;
    value?: string;
};
export type ProjectVariablesProps = {
    variables: Variable[];
    newVariableModal: ReactNode;
    deleteVariableModal: (currentVariable: Variable) => ReactNode;
    editVariableModal: (currentVariable: Variable) => ReactNode;
    skeleton?: false;
};
export type ProjectVariablesTableSkeleton = {
    skeleton: true;
};
export type ProjectVariablesTableProps = Omit<TableProps, 'pagination' | 'filteredValue'> & (ProjectVariablesTableSkeleton | ProjectVariablesProps);
declare const ProjectVariablesTable: (props: ProjectVariablesTableProps) => import("react/jsx-runtime").JSX.Element;
export default ProjectVariablesTable;
