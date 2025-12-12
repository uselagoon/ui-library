import { z as o } from "zod";
const t = o.object({
  title: o.string().optional(),
  description: o.string().optional(),
  ctaText: o.string().optional(),
  ctaUrl: o.string().optional(),
  openInNewTab: o.boolean().optional(),
  className: o.string().optional(),
  defaultLogo: o.boolean().optional()
}).strict(), a = o.object({
  global: o.record(o.string(), o.any()).optional(),
  components: o.object({
    announcementCard: t.optional()
  }).strict().optional()
}).strict();
export {
  a as OverridesSchema
};
