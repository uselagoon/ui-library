import { z } from 'zod';
export declare const SidenavFooterMenuSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodString>;
    documentationUrl: z.ZodOptional<z.ZodString>;
    disableAccountLink: z.ZodOptional<z.ZodBoolean>;
    disableChangeFeedLink: z.ZodOptional<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    email?: string | undefined;
    documentationUrl?: string | undefined;
    disableAccountLink?: boolean | undefined;
    disableChangeFeedLink?: boolean | undefined;
}, {
    email?: string | undefined;
    documentationUrl?: string | undefined;
    disableAccountLink?: boolean | undefined;
    disableChangeFeedLink?: boolean | undefined;
}>;
export type SidenavFooterMenu = z.infer<typeof SidenavFooterMenuSchema>;
//# sourceMappingURL=sidenavFooterMenu.d.ts.map