import { z } from 'zod';
export declare const ChangeFeedItemSchema: z.ZodObject<{
    id: z.ZodString;
    date: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const ChangeFeedDataSchema: z.ZodObject<{
    changes: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        date: z.ZodString;
        title: z.ZodString;
        description: z.ZodString;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ChangeFeedItemType = z.infer<typeof ChangeFeedItemSchema>;
export type ChangeFeedDataType = z.infer<typeof ChangeFeedDataSchema>;
//# sourceMappingURL=changeFeed.d.ts.map