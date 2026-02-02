import { z } from 'zod';

export const AnnouncementCardPropsSchema = z.object({
    id: z.string().optional(),
    variant: z.enum(['marketing', 'changelog']).optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    ctaText: z.string().optional(),
    ctaUrl: z.string().optional(),
    openInNewTab: z.boolean().optional(),
    className: z.string().optional(),
    disabled: z.boolean().optional(),
    // Note: `icon` is runtime-only (React component) and cannot be in schema
    // Note: `defaultLogo` is deprecated, use `icon` instead
    defaultLogo: z.boolean().optional(),
}).strict();

export const AnnouncementCarouselPropsSchema = z.object({
    cards: z.array(AnnouncementCardPropsSchema),
    showDots: z.boolean().optional(),
    expiryDays: z.number().optional(),
    className: z.string().optional(),
}).strict();
