import { default as React } from 'react';
import { Pagination } from '../ui/pagination';
type PaginationProps = React.ComponentProps<typeof Pagination> & {
    allItems: number;
    itemsPerPage: number;
    initialPage?: number;
    onClickPrevious?: () => void;
    onClickNext?: () => void;
    onClickPageNumber?: React.Dispatch<React.SetStateAction<{
        pageIndex: number;
        pageSize: number;
    }>>;
};
export default function UIPagination({ allItems, itemsPerPage, initialPage, onClickPrevious, onClickNext, onClickPageNumber, ...rest }: PaginationProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=Pagination.d.ts.map