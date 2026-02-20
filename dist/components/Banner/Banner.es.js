import { jsxs as n, jsx as t } from "react/jsx-runtime";
import { useState as f, useEffect as h } from "react";
import g from "../../_util/pluginBridge.es.js";
import { Collapsible as p, CollapsibleTrigger as b, CollapsibleContent as x } from "../ui/collapsible.es.js";
import { Button as v } from "../ui/button.es.js";
import { Info as w, ChevronDown as N, X as D } from "lucide-react";
import C from "./BannerCard.es.js";
function k() {
  const [l, c] = f(null);
  if (h(() => {
    const e = (i) => {
      i && c(i);
    };
    return g.subscribe("maintenance:update", e);
  }, []), !l) return null;
  const d = l.Maintenances ?? [], r = l.Incidents ?? [], s = d.filter((e) => {
    if (e.status !== "scheduled") return !0;
    const a = new Date(e.scheduled_for).getTime(), i = new Date(e.scheduled_until).getTime(), o = Date.now(), u = 60 * 60 * 1e3;
    return a - o < u && i > o;
  }).sort((e, a) => new Date(e.scheduled_for).getTime() - new Date(a.scheduled_for).getTime());
  if (s.length === 0 && r.length === 0)
    return null;
  const m = [
    ...r.map((e) => ({ ...e, type: "Incident" })),
    ...s.map((e) => ({ ...e, type: "Maintenance" }))
  ];
  return /* @__PURE__ */ n(p, { className: "w-full max-w-xl mx-auto border-x border-b rounded-lg bg-[var(--background)]", children: [
    /* @__PURE__ */ t("div", { className: "pt-1.5 pb-2 px-3", children: /* @__PURE__ */ n("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ n("div", { className: "flex gap-2 items-center", children: [
        /* @__PURE__ */ t("div", { className: "w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--badge-warning-bg)]/25", children: /* @__PURE__ */ t(w, { className: "w-5 h-5 text-[var(--badge-warning-bg)]" }) }),
        /* @__PURE__ */ n("div", { children: [
          /* @__PURE__ */ t("h4", { className: "text-md font-medium", children: "Active Service Disruptions" }),
          /* @__PURE__ */ n(b, { className: "flex items-end gap-2", children: [
            /* @__PURE__ */ n("p", { className: "text-sm text-[var(--muted-foreground)] mt-0.5", children: [
              r.length + s.length,
              " active issue",
              r.length + s.length !== 1 ? "s" : ""
            ] }),
            /* @__PURE__ */ t(N, { className: "w-5 h-5 text-[var(--muted-foreground)] hover:text-[var(--foreground)]" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "justify-items-start", children: /* @__PURE__ */ t(v, { className: "text-xs size-6", variant: "outline", onClick: () => c(null), children: /* @__PURE__ */ t(D, { className: "w-4 h-4" }) }) })
    ] }) }),
    /* @__PURE__ */ t(x, { className: "mt-2", children: m.map((e) => /* @__PURE__ */ t(C, { bannerItem: e }, e.id)) })
  ] });
}
export {
  k as default
};
