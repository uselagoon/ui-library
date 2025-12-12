import { z as o } from "zod";
const n = o.object({
  title: o.string().optional(),
  description: o.string().optional(),
  ctaText: o.string().optional(),
  ctaUrl: o.string().optional(),
  openInNewTab: o.boolean().optional(),
  className: o.string().optional(),
  defaultLogo: o.boolean().optional()
}), a = o.object({
  global: o.record(o.string(), o.any()).optional(),
  components: o.object({
    announcementCard: n.optional()
  }).optional()
});
export {
  a as OverridesSchema
};
