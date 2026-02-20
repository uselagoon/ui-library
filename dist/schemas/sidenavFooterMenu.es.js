import { z as o } from "zod";
const e = o.object({
  email: o.string().email().optional(),
  documentationUrl: o.string().url().optional(),
  disableAccountLink: o.boolean().optional(),
  disableChangeFeedLink: o.boolean().optional()
}).strict();
export {
  e as SidenavFooterMenuSchema
};
