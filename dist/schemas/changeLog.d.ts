import { z } from 'zod';
export declare const ChangeLogItemSchema: z.ZodObject<{
    id: z.ZodString;
    date: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const ChangeLogDataSchema: z.ZodObject<{
    changes: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        date: z.ZodString;
        title: z.ZodString;
        description: z.ZodString;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ChangeLogItemType = z.infer<typeof ChangeLogItemSchema>;
export type ChangeLogDataType = z.infer<typeof ChangeLogDataSchema>;
//# sourceMappingURL=changeLog.d.ts.map