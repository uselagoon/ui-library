import { z as o } from "zod";
const p = o.object({
  title: o.string().optional(),
  description: o.string().optional(),
  ctaText: o.string().optional(),
  ctaUrl: o.string().optional(),
  openInNewTab: o.boolean().optional(),
  className: o.string().optional(),
  defaultLogo: o.boolean().optional()
}).strict(), m = o.url().optional(), b = {
  documentationUrl: m
}, u = {
  announcementCard: p
}, f = o.object({
  global: o.object({
    documentationUrl: m.optional()
  }).strict().optional(),
  components: o.object({
    announcementCard: p.optional()
  }).strict().optional()
}).strict();
function d(r) {
  const s = { global: {}, components: {} }, t = [];
  if (typeof r != "object" || r === null)
    return t.push({ key: "Override", message: "Data must be an object" }), { valid: s, errors: t };
  const n = r;
  if (n.global !== void 0 && n.global !== null && typeof n.global == "object")
    for (const [e, i] of Object.entries(n.global)) {
      const a = b[e];
      if (!a) {
        t.push({ key: `Global.${e}`, message: "Unknown global key not compatible with overrides" });
        continue;
      }
      try {
        s.global[e] = a.parse(i);
      } catch (c) {
        c instanceof o.ZodError && c.issues.forEach((l) => {
          t.push({ key: `Global.${e}`, message: l.message });
        });
      }
    }
  if (n.components !== void 0 && n.components !== null && typeof n.components == "object") {
    s.components = {};
    for (const [e, i] of Object.entries(n.components)) {
      const a = u[e];
      if (!a) {
        t.push({ key: `Components.${e}`, message: "Unknown component not compatible with overrides" });
        continue;
      }
      try {
        s.components[e] = a.parse(i);
      } catch (c) {
        c instanceof o.ZodError && c.issues.forEach((l) => {
          t.push({ key: `Components.${e}`, message: l.message });
        });
      }
    }
  }
  return { valid: s, errors: t };
}
export {
  f as OverridesSchema,
  d as validateOverrides
};
