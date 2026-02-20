import { z } from 'zod';

export const SidenavFooterMenuSchema = z.object({
    email: z.string().email().optional(),
    documentationUrl: z.string().url().optional(),
    disableAccountLink: z.boolean().optional(),
    disableChangeFeedLink: z.boolean().optional(),
}).strict();

export type SidenavFooterMenu = z.infer<typeof SidenavFooterMenuSchema>;