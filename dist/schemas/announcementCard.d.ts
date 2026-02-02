import { z } from 'zod';
export declare const AnnouncementCardPropsSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    variant: z.ZodOptional<z.ZodEnum<{
        marketing: "marketing";
        changelog: "changelog";
    }>>;
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    ctaText: z.ZodOptional<z.ZodString>;
    ctaUrl: z.ZodOptional<z.ZodString>;
    openInNewTab: z.ZodOptional<z.ZodBoolean>;
    className: z.ZodOptional<z.ZodString>;
    disabled: z.ZodOptional<z.ZodBoolean>;
    defaultLogo: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const AnnouncementCarouselPropsSchema: z.ZodObject<{
    cards: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodEnum<{
            marketing: "marketing";
            changelog: "changelog";
        }>>;
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        ctaText: z.ZodOptional<z.ZodString>;
        ctaUrl: z.ZodOptional<z.ZodString>;
        openInNewTab: z.ZodOptional<z.ZodBoolean>;
        className: z.ZodOptional<z.ZodString>;
        disabled: z.ZodOptional<z.ZodBoolean>;
        defaultLogo: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>>;
    showDots: z.ZodOptional<z.ZodBoolean>;
    expiryDays: z.ZodOptional<z.ZodNumber>;
    className: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
//# sourceMappingURL=announcementCard.d.ts.map