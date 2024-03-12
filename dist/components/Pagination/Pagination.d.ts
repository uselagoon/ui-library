import { FC } from 'react';
import { PaginationProps } from 'antd';
declare const UIPagination: FC<Omit<PaginationProps, 'defaultCurrent' | 'size' | 'simple' | 'showLessItems' | 'responsive' | 'pageSize' | 'pageSizeOptions'>>;
export type { PaginationProps as UIPaginationProps };
export default UIPagination;
