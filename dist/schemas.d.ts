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
            onClose: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>>;
            className: z.ZodOptional<z.ZodString>;
            defaultLogo: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            className?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
            onClose?: ((...args: unknown[]) => void) | undefined;
            ctaText?: string | undefined;
            ctaUrl?: string | undefined;
            openInNewTab?: boolean | undefined;
            defaultLogo?: boolean | undefined;
        }, {
            className?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
            onClose?: ((...args: unknown[]) => void) | undefined;
            ctaText?: string | undefined;
            ctaUrl?: string | undefined;
            openInNewTab?: boolean | undefined;
            defaultLogo?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        announcementCard?: {
            className?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
            onClose?: ((...args: unknown[]) => void) | undefined;
            ctaText?: string | undefined;
            ctaUrl?: string | undefined;
            openInNewTab?: boolean | undefined;
            defaultLogo?: boolean | undefined;
        } | undefined;
    }, {
        announcementCard?: {
            className?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
            onClose?: ((...args: unknown[]) => void) | undefined;
            ctaText?: string | undefined;
            ctaUrl?: string | undefined;
            openInNewTab?: boolean | undefined;
            defaultLogo?: boolean | undefined;
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    components?: {
        announcementCard?: {
            className?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
            onClose?: ((...args: unknown[]) => void) | undefined;
            ctaText?: string | undefined;
            ctaUrl?: string | undefined;
            openInNewTab?: boolean | undefined;
            defaultLogo?: boolean | undefined;
        } | undefined;
    } | undefined;
    global?: Record<string, any> | undefined;
}, {
    components?: {
        announcementCard?: {
            className?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
            onClose?: ((...args: unknown[]) => void) | undefined;
            ctaText?: string | undefined;
            ctaUrl?: string | undefined;
            openInNewTab?: boolean | undefined;
            defaultLogo?: boolean | undefined;
        } | undefined;
    } | undefined;
    global?: Record<string, any> | undefined;
}>;
export type Overrides = z.infer<typeof OverridesSchema>;
//# sourceMappingURL=schemas.d.ts.map