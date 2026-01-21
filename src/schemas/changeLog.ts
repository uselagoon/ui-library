import { z } from 'zod';

export const ChangeLogItemSchema = z.object({
    id: z.string().min(1, 'ID is required'),
    date: z.string().regex(/^[A-Z]+ \d+$/, 'Date must be in format "MONTH DAY"'),
    title: z.string().min(10, 'Title must be at least 10 characters').max(200, 'Title must be less than 200 characters'),
    description: z.string().max(2000, 'Description must be less than 2000 characters'),
    tags: z.array(z.string()).min(1, 'At least one tag is required').max(5, 'Maximum of 5 tags').optional(),
});

export const ChangeLogDataSchema = z.object({
    changes: z.array(ChangeLogItemSchema).min(1, 'At least one change is required'),
});

export type ChangeLogItemType = z.infer<typeof ChangeLogItemSchema>;
export type ChangeLogDataType = z.infer<typeof ChangeLogDataSchema>;
