import { j as r } from "./index.es64.js";
import * as x from "react";
import * as b from "recharts";
import { cn as l } from "./index.es65.js";
const L = { light: "", dark: ".dark" }, w = x.createContext(null);
function N() {
  const c = x.useContext(w);
  if (!c)
    throw new Error("useChart must be used within a <ChartContainer />");
  return c;
}
function I({
  id: c,
  className: e,
  children: s,
  config: t,
  ...a
}) {
  const d = x.useId(), o = `chart-${c || d.replace(/:/g, "")}`;
  return /* @__PURE__ */ r.jsx(w.Provider, { value: { config: t }, children: /* @__PURE__ */ r.jsxs(
    "div",
    {
      "data-slot": "chart",
      "data-chart": o,
      className: l(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ r.jsx(P, { id: o, config: t }),
        /* @__PURE__ */ r.jsx(b.ResponsiveContainer, { children: s })
      ]
    }
  ) });
}
const P = ({ id: c, config: e }) => {
  const s = Object.entries(e).filter(([, t]) => t.theme || t.color);
  return s.length ? /* @__PURE__ */ r.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(L).map(
          ([t, a]) => `
${a} [data-chart=${c}] {
${s.map(([d, o]) => {
            const i = o.theme?.[t] || o.color;
            return i ? `  --color-${d}: ${i};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, R = b.Tooltip;
function S({
  active: c,
  payload: e,
  className: s,
  indicator: t = "dot",
  hideLabel: a = !1,
  hideIndicator: d = !1,
  label: o,
  labelFormatter: i,
  labelClassName: u,
  formatter: C,
  color: y,
  nameKey: $,
  labelKey: m
}) {
  const { config: f } = N(), _ = x.useMemo(() => {
    if (a || !e?.length)
      return null;
    const [n] = e, p = `${m || n?.dataKey || n?.name || "value"}`, v = j(f, n, p), h = !m && typeof o == "string" ? f[o]?.label || o : v?.label;
    return i ? /* @__PURE__ */ r.jsx("div", { className: l("font-medium", u), children: i(h, e) }) : h ? /* @__PURE__ */ r.jsx("div", { className: l("font-medium", u), children: h }) : null;
  }, [o, i, e, a, u, f, m]);
  if (!c || !e?.length)
    return null;
  const g = e.length === 1 && t !== "dot";
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: l(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        s
      ),
      children: [
        g ? null : _,
        /* @__PURE__ */ r.jsx("div", { className: "grid gap-1.5", children: e.map((n, p) => {
          const v = `${$ || n.name || n.dataKey || "value"}`, h = j(f, n, v), k = y || n.payload.fill || n.color;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: l(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                t === "dot" && "items-center"
              ),
              children: C && n?.value !== void 0 && n.name ? C(n.value, n.name, n, p, n.payload) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                h?.icon ? /* @__PURE__ */ r.jsx(h.icon, {}) : !d && /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: l("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
                      "h-2.5 w-2.5": t === "dot",
                      "w-1": t === "line",
                      "w-0 border-[1.5px] border-dashed bg-transparent": t === "dashed",
                      "my-0.5": g && t === "dashed"
                    }),
                    style: {
                      "--color-bg": k,
                      "--color-border": k
                    }
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "div",
                  {
                    className: l("flex flex-1 justify-between leading-none", g ? "items-end" : "items-center"),
                    children: [
                      /* @__PURE__ */ r.jsxs("div", { className: "grid gap-1.5", children: [
                        g ? _ : null,
                        /* @__PURE__ */ r.jsx("span", { className: "text-muted-foreground", children: h?.label || n.name })
                      ] }),
                      n.value && /* @__PURE__ */ r.jsx("span", { className: "text-foreground font-mono font-medium tabular-nums", children: n.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            n.dataKey
          );
        }) })
      ]
    }
  );
}
const K = b.Legend;
function M({
  className: c,
  hideIcon: e = !1,
  payload: s,
  verticalAlign: t = "bottom",
  nameKey: a
}) {
  const { config: d } = N();
  return s?.length ? /* @__PURE__ */ r.jsx("div", { className: l("flex items-center justify-center gap-4", t === "top" ? "pb-3" : "pt-3", c), children: s.map((o) => {
    const i = `${a || o.dataKey || "value"}`, u = j(d, o, i);
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: l("[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"),
        children: [
          u?.icon && !e ? /* @__PURE__ */ r.jsx(u.icon, {}) : /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "h-2 w-2 shrink-0 rounded-[2px]",
              style: {
                backgroundColor: o.color
              }
            }
          ),
          u?.label
        ]
      },
      o.value
    );
  }) }) : null;
}
function j(c, e, s) {
  if (typeof e != "object" || e === null)
    return;
  const t = "payload" in e && typeof e.payload == "object" && e.payload !== null ? e.payload : void 0;
  let a = s;
  return s in e && typeof e[s] == "string" ? a = e[s] : t && s in t && typeof t[s] == "string" && (a = t[s]), a in c ? c[a] : c[s];
}
export {
  I as ChartContainer,
  K as ChartLegend,
  M as ChartLegendContent,
  P as ChartStyle,
  R as ChartTooltip,
  S as ChartTooltipContent
};
