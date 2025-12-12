import { z } from 'zod';

const AnnouncementCardPropsSchema = z.object({
	title: z.string().optional(),
	description: z.string().optional(),
	ctaText: z.string().optional(),
	ctaUrl: z.string().optional(),
	openInNewTab: z.boolean().optional(),
	className: z.string().optional(),
	defaultLogo: z.boolean().optional(),
}).strict();

export const OverridesSchema = z.object({
	global: z.record(z.string(), z.any()).optional(),
	components: z.object({
		announcementCard: AnnouncementCardPropsSchema.optional(),
	}).strict().optional(),
}).strict();

export type Overrides = z.infer<typeof OverridesSchema>;