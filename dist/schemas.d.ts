import { z } from 'zod';
export declare const OverridesSchema: z.ZodObject<{
    global: z.ZodOptional<z.ZodObject<{
        documentationUrl: z.ZodOptional<z.ZodOptional<z.ZodURL>>;
    }, z.core.$strict>>;
    components: z.ZodOptional<z.ZodObject<{
        announcementCard: z.ZodOptional<z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            ctaText: z.ZodOptional<z.ZodString>;
            ctaUrl: z.ZodOptional<z.ZodString>;
            openInNewTab: z.ZodOptional<z.ZodBoolean>;
            className: z.ZodOptional<z.ZodString>;
            defaultLogo: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type Overrides = z.infer<typeof OverridesSchema>;
export declare function validateOverrides(data: unknown): {
    valid: Overrides;
    errors: Array<{
        key: string;
        message: string;
    }>;
};
//# sourceMappingURL=schemas.d.ts.map