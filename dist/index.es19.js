import { j as o } from "./index.es64.js";
import * as t from "@radix-ui/react-collapsible";
function i({ ...l }) {
  return /* @__PURE__ */ o.jsx(t.Root, { "data-slot": "collapsible", ...l });
}
function r({ ...l }) {
  return /* @__PURE__ */ o.jsx(t.CollapsibleTrigger, { "data-slot": "collapsible-trigger", ...l });
}
function s({ ...l }) {
  return /* @__PURE__ */ o.jsx(t.CollapsibleContent, { "data-slot": "collapsible-content", ...l });
}
export {
  i as Collapsible,
  s as CollapsibleContent,
  r as CollapsibleTrigger
};
