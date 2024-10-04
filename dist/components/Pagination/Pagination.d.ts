import { FC } from 'react';
import { PaginationProps } from 'antd';
declare const UIPagination: FC<Omit<PaginationProps, 'defaultCurrent' | 'size' | 'simple' | 'showLessItems' | 'responsive' | 'pageSizeOptions' | 'showSizeChanger'> & {
    showSizeSelector?: boolean;
}>;
export type { PaginationProps as UIPaginationProps };
export default UIPagination;
