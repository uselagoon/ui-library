import { z } from 'zod';
export declare const AnnouncementCardPropsSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    ctaText: z.ZodOptional<z.ZodString>;
    ctaUrl: z.ZodOptional<z.ZodString>;
    openInNewTab: z.ZodOptional<z.ZodBoolean>;
    className: z.ZodOptional<z.ZodString>;
    defaultLogo: z.ZodOptional<z.ZodBoolean>;
    disabled: z.ZodOptional<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    className?: string | undefined;
    title?: string | undefined;
    disabled?: boolean | undefined;
    description?: string | undefined;
    ctaText?: string | undefined;
    ctaUrl?: string | undefined;
    openInNewTab?: boolean | undefined;
    defaultLogo?: boolean | undefined;
}, {
    className?: string | undefined;
    title?: string | undefined;
    disabled?: boolean | undefined;
    description?: string | undefined;
    ctaText?: string | undefined;
    ctaUrl?: string | undefined;
    openInNewTab?: boolean | undefined;
    defaultLogo?: boolean | undefined;
}>;
//# sourceMappingURL=announcementCard.d.ts.map