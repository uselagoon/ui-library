import { ChangeLogItemProps } from './ChangeLogItem';
export type ChangeLogContainerProps = {
    sourceData?: string;
    refetchInterval?: number;
    fallbackData?: ChangeLogItemProps[];
    onError?: (error: Error) => void;
    showLoading?: boolean;
};
export default function ChangeLogContainer({ sourceData, refetchInterval, fallbackData, onError, showLoading, }: ChangeLogContainerProps): import("react/jsx-dev-runtime").JSX.Element;
//# sourceMappingURL=ChangeLogContainer.d.ts.map