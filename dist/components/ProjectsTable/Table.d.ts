import { TableProps } from 'antd';
import React from 'react';
type ProjectsTableProps = Omit<TableProps, 'pagination' | 'filteredValue'> & {
    filterString: string;
    resultsPerPage?: number;
};
declare const ProjectsTable: React.ForwardRefExoticComponent<Omit<TableProps<any>, "pagination" | "filteredValue"> & {
    filterString: string;
    resultsPerPage?: number | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export default ProjectsTable;
export type { ProjectsTableProps as ProjectsTableProps };
