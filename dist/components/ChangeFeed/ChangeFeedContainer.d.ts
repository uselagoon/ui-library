import { ChangeFeedItemProps } from './ChangeFeedItem';
export type ChangeFeedContainerProps = {
    sourceData?: string;
    refetchInterval?: number;
    fallbackData?: ChangeFeedItemProps[];
    onError?: (error: Error) => void;
    showLoading?: boolean;
};
export default function ChangeFeedContainer({ sourceData, refetchInterval, fallbackData, onError, showLoading, }: ChangeFeedContainerProps): import("react/jsx-dev-runtime").JSX.Element;
//# sourceMappingURL=ChangeFeedContainer.d.ts.map