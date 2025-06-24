import { j as e } from "./index.es64.js";
import { Fragment as u } from "react";
import { Breadcrumb as h, BreadcrumbList as j, BreadcrumbItem as f, BreadcrumbLink as g, BreadcrumbSeparator as y } from "./index.es12.js";
import b from "./index.es58.js";
import { ChevronRight as v } from "lucide-react";
const C = {
  default: ["", "project", "environment"],
  orgs: ["", "organization", "project"]
}, N = ({ activeKey: a, items: c, type: t, currentSlug: l }) => {
  const o = t && ["default", "orgs"].includes(t) ? [...C[t]] : null;
  return l && o && (o[2] = l), /* @__PURE__ */ e.jsx(h, { className: "mb-8 text-sm", "data-cy": "page-title", children: /* @__PURE__ */ e.jsx(j, { children: c.map((r, s) => {
    const i = "key" in r ? r.key : s, p = a && a === i, n = o?.[s] ?? null, x = "copyText" in r && r.copyText && n, d = r.copyText && r.copyText.length < 15 && n === "organization" ? "Org" : n, m = /* @__PURE__ */ e.jsxs("div", { className: "relative flex flex-col items-start group", children: [
      d && /* @__PURE__ */ e.jsx("span", { className: "absolute -top-3 left-0 text-[11px] font-semibold uppercase text-primary pointer-events-none select-none", children: d }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ e.jsx("span", { className: p ? "text-foreground" : "text-muted-foreground", children: "navOnClick" in r && r.navOnClick ? /* @__PURE__ */ e.jsx("span", { onClick: r.navOnClick, className: "hover:underline cursor-pointer", children: r.title }) : r.title }),
        x && /* @__PURE__ */ e.jsx("div", { className: "text-primary scale-90 ml-1", children: /* @__PURE__ */ e.jsx(b, { text: r.copyText, iconOnly: !0 }) })
      ] })
    ] });
    return /* @__PURE__ */ e.jsxs(u, { children: [
      /* @__PURE__ */ e.jsx(f, { children: /* @__PURE__ */ e.jsx(g, { asChild: !0, children: m }) }),
      s !== c.length - 1 && /* @__PURE__ */ e.jsx(y, { children: /* @__PURE__ */ e.jsx(v, { className: "w-4 h-4 text-muted-foreground" }) })
    ] }, i);
  }) }) });
};
N.displayName = "Breadcrumb";
export {
  N as default
};
