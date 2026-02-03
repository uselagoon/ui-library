import { z } from 'zod';
export declare const SidenavFooterMenuSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodEmail>;
    documentationUrl: z.ZodOptional<z.ZodURL>;
    disableAccountLink: z.ZodOptional<z.ZodBoolean>;
    disableChangeFeedLink: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export type SidenavFooterMenu = z.infer<typeof SidenavFooterMenuSchema>;
//# sourceMappingURL=sidenavFooterMenu.d.ts.map