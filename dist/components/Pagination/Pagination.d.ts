import { default as React } from 'react';
import { Pagination } from '../ui/pagination';
type PaginationProps = React.ComponentProps<typeof Pagination> & {
    allItems: number;
    itemsPerPage: number;
    initialPage?: number;
};
export default function UIPagination({ allItems, itemsPerPage, initialPage, ...rest }: PaginationProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=Pagination.d.ts.map