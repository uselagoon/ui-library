import { z as t } from "zod";
import { AnnouncementCardPropsSchema as l } from "./schemas/announcementCard.es.js";
import { SidenavFooterMenuSchema as p } from "./schemas/sidenavFooterMenu.es.js";
const u = t.url().optional(), b = {
  documentationUrl: u
}, f = {
  announcementCard: l,
  sidenavFooterMenu: p
}, v = t.object({
  global: t.object({
    documentationUrl: u.optional()
  }).strict().optional(),
  components: t.object({
    announcementCard: l.optional(),
    sidenavFooterMenu: p.optional()
  }).strict().optional()
}).strict();
function y(c) {
  const s = { global: {}, components: {} }, n = [];
  if (typeof c != "object" || c === null)
    return n.push({ key: "Override", message: "Data must be an object" }), { valid: s, errors: n };
  const e = c;
  if (e.global !== void 0 && e.global !== null && typeof e.global == "object")
    for (const [o, i] of Object.entries(e.global)) {
      const a = b[o];
      if (!a) {
        n.push({ key: `Global.${o}`, message: "Unknown global key not compatible with overrides" });
        continue;
      }
      try {
        s.global[o] = a.parse(i);
      } catch (r) {
        r instanceof t.ZodError && r.issues.forEach((m) => {
          n.push({ key: `Global.${o}`, message: m.message });
        });
      }
    }
  if (e.components !== void 0 && e.components !== null && typeof e.components == "object") {
    s.components = {};
    for (const [o, i] of Object.entries(e.components)) {
      const a = f[o];
      if (!a) {
        n.push({ key: `Components.${o}`, message: "Unknown component not compatible with overrides" });
        continue;
      }
      try {
        s.components[o] = a.parse(i);
      } catch (r) {
        r instanceof t.ZodError && r.issues.forEach((m) => {
          n.push({ key: `Components.${o}`, message: m.message });
        });
      }
    }
  }
  return { valid: s, errors: n };
}
export {
  v as OverridesSchema,
  y as validateOverrides
};
