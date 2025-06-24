import { j as e } from "./index.es64.js";
import { HelpCircle as c, Frown as x, Meh as h, Smile as o } from "lucide-react";
import { HoverCard as g, HoverCardTrigger as u, HoverCardContent as j } from "./index.es26.js";
import t from "./index.es55.js";
const f = (s) => {
  if (s.skeleton)
    return /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 animate-pulse", children: Array.from({ length: 5 }).map((p, m) => /* @__PURE__ */ e.jsx("div", { className: "h-[80px] rounded-xl bg-muted" }, m)) });
  const { problems: n, critical: r, high: l, medium: a, low: i } = s, d = () => r >= 1 ? /* @__PURE__ */ e.jsx(x, { className: "h-6 w-6 text-rose-500" }) : l >= 1 ? /* @__PURE__ */ e.jsx(h, { className: "h-6 w-6 text-orange-500" }) : a >= 1 || i >= 1 ? /* @__PURE__ */ e.jsx(o, { className: "h-6 w-6 text-green-500" }) : /* @__PURE__ */ e.jsx(o, { className: "h-6 w-6 text-green-500" });
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 text-center mx-auto w-fit", children: [
      /* @__PURE__ */ e.jsx("div", { className: "shrink-0", children: d() }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-xl font-semibold", children: [
        /* @__PURE__ */ e.jsx("h2", { children: "At a glance" }),
        /* @__PURE__ */ e.jsxs(g, { children: [
          /* @__PURE__ */ e.jsx(u, { asChild: !0, children: /* @__PURE__ */ e.jsx(c, { className: "h-4 w-4 text-muted-foreground cursor-pointer" }) }),
          /* @__PURE__ */ e.jsx(j, { className: "w-64 text-sm text-muted-foreground", children: "The summary of all the problems is shown here." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4", children: [
      /* @__PURE__ */ e.jsx(t, { type: "default", title: "Problems", content: n }),
      /* @__PURE__ */ e.jsx(t, { type: "default", title: "Critical", content: r }),
      /* @__PURE__ */ e.jsx(t, { type: "default", title: "High", content: l }),
      /* @__PURE__ */ e.jsx(t, { type: "default", title: "Medium", content: a }),
      /* @__PURE__ */ e.jsx(t, { type: "default", title: "Low", content: i })
    ] })
  ] });
};
f.displayName = "LagoonProblemsOverview";
export {
  f as default
};
