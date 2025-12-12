import { z } from 'zod';
export declare const OverridesSchema: z.ZodObject<{
    global: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
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
//# sourceMappingURL=schemas.d.ts.map