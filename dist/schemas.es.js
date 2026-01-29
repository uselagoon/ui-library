import { z as t } from "zod";
import { AnnouncementCardPropsSchema as l } from "./schemas/announcementCard.es.js";
import { ChangeFeedContainerSchema as p } from "./schemas/changeFeed.es.js";
const u = t.url().optional(), b = {
  documentationUrl: u
}, f = {
  announcementCard: l,
  changeFeed: p
}, y = t.object({
  global: t.object({
    documentationUrl: u.optional()
  }).strict().optional(),
  components: t.object({
    announcementCard: l.optional(),
    changeFeed: p.optional()
  }).strict().optional()
}).strict();
function v(r) {
  const a = { global: {}, components: {} }, n = [];
  if (typeof r != "object" || r === null)
    return n.push({ key: "Override", message: "Data must be an object" }), { valid: a, errors: n };
  const e = r;
  if (e.global !== void 0 && e.global !== null && typeof e.global == "object")
    for (const [o, i] of Object.entries(e.global)) {
      const s = b[o];
      if (!s) {
        n.push({ key: `Global.${o}`, message: "Unknown global key not compatible with overrides" });
        continue;
      }
      try {
        a.global[o] = s.parse(i);
      } catch (c) {
        c instanceof t.ZodError && c.issues.forEach((m) => {
          n.push({ key: `Global.${o}`, message: m.message });
        });
      }
    }
  if (e.components !== void 0 && e.components !== null && typeof e.components == "object") {
    a.components = {};
    for (const [o, i] of Object.entries(e.components)) {
      const s = f[o];
      if (!s) {
        n.push({ key: `Components.${o}`, message: "Unknown component not compatible with overrides" });
        continue;
      }
      try {
        a.components[o] = s.parse(i);
      } catch (c) {
        c instanceof t.ZodError && c.issues.forEach((m) => {
          n.push({ key: `Components.${o}`, message: m.message });
        });
      }
    }
  }
  return { valid: a, errors: n };
}
export {
  y as OverridesSchema,
  v as validateOverrides
};
