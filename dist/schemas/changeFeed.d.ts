import { z } from 'zod';
export declare const ChangeFeedItemSchema: z.ZodObject<{
    id: z.ZodString;
    date: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    title: string;
    date: string;
    description: string;
    tags?: string[] | undefined;
}, {
    id: string;
    title: string;
    date: string;
    description: string;
    tags?: string[] | undefined;
}>;
export declare const ChangeFeedContainerSchema: z.ZodObject<{
    sourceData: z.ZodString;
    refetchInterval: z.ZodOptional<z.ZodNumber>;
    fallbackData: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        date: z.ZodString;
        title: z.ZodString;
        description: z.ZodString;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        title: string;
        date: string;
        description: string;
        tags?: string[] | undefined;
    }, {
        id: string;
        title: string;
        date: string;
        description: string;
        tags?: string[] | undefined;
    }>, "many">>;
    onError: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    showLoading: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    sourceData: string;
    onError?: ((...args: unknown[]) => unknown) | undefined;
    refetchInterval?: number | undefined;
    fallbackData?: {
        id: string;
        title: string;
        date: string;
        description: string;
        tags?: string[] | undefined;
    }[] | undefined;
    showLoading?: boolean | undefined;
}, {
    sourceData: string;
    onError?: ((...args: unknown[]) => unknown) | undefined;
    refetchInterval?: number | undefined;
    fallbackData?: {
        id: string;
        title: string;
        date: string;
        description: string;
        tags?: string[] | undefined;
    }[] | undefined;
    showLoading?: boolean | undefined;
}>;
export declare const ChangeFeedDataSchema: z.ZodObject<{
    changes: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        date: z.ZodString;
        title: z.ZodString;
        description: z.ZodString;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        title: string;
        date: string;
        description: string;
        tags?: string[] | undefined;
    }, {
        id: string;
        title: string;
        date: string;
        description: string;
        tags?: string[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    changes: {
        id: string;
        title: string;
        date: string;
        description: string;
        tags?: string[] | undefined;
    }[];
}, {
    changes: {
        id: string;
        title: string;
        date: string;
        description: string;
        tags?: string[] | undefined;
    }[];
}>;
export type ChangeFeedItemType = z.infer<typeof ChangeFeedItemSchema>;
export type ChangeFeedDataType = z.infer<typeof ChangeFeedDataSchema>;
//# sourceMappingURL=changeFeed.d.ts.map