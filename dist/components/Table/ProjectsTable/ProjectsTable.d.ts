import { TableProps } from 'antd';
export type Project = {
    id: number;
    name: string;
    problemsUi: number | null;
    factsUi: number | null;
    created: string;
    gitUrl: string;
    productionEnvironment: string | null;
    environments: [
        {
            name: string;
            route: string;
            updated: string;
            kubernetes: {
                id: number;
                name: string;
                cloudRegion: string | null;
            };
        }
    ];
};
export type ProjectsProps = {
    projects: Project[];
    basePath: string;
    resultsPerPage?: number;
    filterString: string;
    skeleton?: false;
};
export type ProjectsTableSkeletonProps = {
    skeleton: true;
};
export type ProjectsTableProps = Omit<TableProps, 'pagination' | 'filteredValue'> & (ProjectsTableSkeletonProps | ProjectsProps);
declare const ProjectsTable: (props: ProjectsTableProps) => import("react/jsx-runtime").JSX.Element;
export default ProjectsTable;
