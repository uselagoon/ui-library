import { z as o } from "zod";
const t = o.object({
  id: o.string().optional(),
  variant: o.enum(["marketing", "changelog"]).optional(),
  title: o.string().optional(),
  description: o.string().optional(),
  ctaText: o.string().optional(),
  ctaUrl: o.string().optional(),
  openInNewTab: o.boolean().optional(),
  className: o.string().optional(),
  disabled: o.boolean().optional(),
  // Note: `icon` is runtime-only (React component) and cannot be in schema
  // Note: `defaultLogo` is deprecated, use `icon` instead
  defaultLogo: o.boolean().optional()
}).strict();
o.object({
  cards: o.array(t),
  showDots: o.boolean().optional(),
  expiryDays: o.number().optional(),
  className: o.string().optional()
}).strict();
export {
  t as AnnouncementCardPropsSchema
};
