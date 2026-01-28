'use client';

import { useEffect, useState } from 'react';
import ChangeLog from './ChangeLog';
import { ChangeLogItemProps } from './ChangeLogItem';
import { ChangeLogDataSchema } from '@/schemas/changeLog';

export type ChangeLogContainerProps = {
    sourceData?: string;
    refetchInterval?: number;
    fallbackData?: ChangeLogItemProps[];
    onError?: (error: Error) => void;
    showLoading?: boolean;
};

export default function ChangeLogContainer({
    sourceData,
    refetchInterval = 600000,
    fallbackData = [],
    onError,
    showLoading = true,
}: ChangeLogContainerProps) {
    const [data, setData] = useState<ChangeLogItemProps[]>(fallbackData);
    const [isLoading, setIsLoading] = useState(!!sourceData);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!sourceData) {
            setIsLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const response = await fetch(sourceData, {
                    cache: 'no-cache',
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch changelog data: ${response.statusText}`);
                }

                const json = await response.json();

                const validated = ChangeLogDataSchema.safeParse(json);

                if (!validated.success) {
                    console.error('Changelog validation failed:', validated.error.format());
                    throw new Error('Invalid changelog data format');
                }

                setData(validated.data.changes);
            } catch (err) {
                const error = err instanceof Error ? err : new Error('Unknown error');
                setError(error);
                onError?.(error);
                setData(fallbackData);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

        if (refetchInterval > 0) {
            const intervalId = setInterval(fetchData, refetchInterval);
            return () => clearInterval(intervalId);
        }
    }, [sourceData, refetchInterval]);

    if (isLoading && showLoading) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="text-gray-500">Loading changelog...</div>
            </div>
        );
    }

    if (error && data.length === 0) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="text-red-500">
                    Failed to load changelog. {error.message}
                </div>
            </div>
        );
    }

    return <ChangeLog changeLogItems={data} />;
}
