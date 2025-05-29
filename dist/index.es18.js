import * as e from "react";
import * as x from "recharts";
import { cn as l } from "./index.es54.js";
const j = { light: "", dark: ".dark" }, k = e.createContext(null);
function w() {
  const s = e.useContext(k);
  if (!s)
    throw new Error("useChart must be used within a <ChartContainer />");
  return s;
}
function P({
  id: s,
  className: t,
  children: o,
  config: r,
  ...c
}) {
  const u = e.useId(), a = `chart-${s || u.replace(/:/g, "")}`;
  return /* @__PURE__ */ e.createElement(k.Provider, { value: { config: r } }, /* @__PURE__ */ e.createElement(
    "div",
    {
      "data-slot": "chart",
      "data-chart": a,
      className: l(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...c
    },
    /* @__PURE__ */ e.createElement($, { id: a, config: r }),
    /* @__PURE__ */ e.createElement(x.ResponsiveContainer, null, o)
  ));
}
const $ = ({ id: s, config: t }) => {
  const o = Object.entries(t).filter(
    ([, r]) => r.theme || r.color
  );
  return o.length ? /* @__PURE__ */ e.createElement(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(j).map(
          ([r, c]) => `
${c} [data-chart=${s}] {
${o.map(([u, a]) => {
            const i = a.theme?.[r] || a.color;
            return i ? `  --color-${u}: ${i};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, T = x.Tooltip;
function I({
  active: s,
  payload: t,
  className: o,
  indicator: r = "dot",
  hideLabel: c = !1,
  hideIndicator: u = !1,
  label: a,
  labelFormatter: i,
  labelClassName: d,
  formatter: E,
  color: y,
  nameKey: N,
  labelKey: g
}) {
  const { config: f } = w(), C = e.useMemo(() => {
    if (c || !t?.length)
      return null;
    const [n] = t, v = `${g || n?.dataKey || n?.name || "value"}`, p = b(f, n, v), m = !g && typeof a == "string" ? f[a]?.label || a : p?.label;
    return i ? /* @__PURE__ */ e.createElement("div", { className: l("font-medium", d) }, i(m, t)) : m ? /* @__PURE__ */ e.createElement("div", { className: l("font-medium", d) }, m) : null;
  }, [
    a,
    i,
    t,
    c,
    d,
    f,
    g
  ]);
  if (!s || !t?.length)
    return null;
  const h = t.length === 1 && r !== "dot";
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: l(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        o
      )
    },
    h ? null : C,
    /* @__PURE__ */ e.createElement("div", { className: "grid gap-1.5" }, t.map((n, v) => {
      const p = `${N || n.name || n.dataKey || "value"}`, m = b(f, n, p), _ = y || n.payload.fill || n.color;
      return /* @__PURE__ */ e.createElement(
        "div",
        {
          key: n.dataKey,
          className: l(
            "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
            r === "dot" && "items-center"
          )
        },
        E && n?.value !== void 0 && n.name ? E(n.value, n.name, n, v, n.payload) : /* @__PURE__ */ e.createElement(e.Fragment, null, m?.icon ? /* @__PURE__ */ e.createElement(m.icon, null) : !u && /* @__PURE__ */ e.createElement(
          "div",
          {
            className: l(
              "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
              {
                "h-2.5 w-2.5": r === "dot",
                "w-1": r === "line",
                "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                "my-0.5": h && r === "dashed"
              }
            ),
            style: {
              "--color-bg": _,
              "--color-border": _
            }
          }
        ), /* @__PURE__ */ e.createElement(
          "div",
          {
            className: l(
              "flex flex-1 justify-between leading-none",
              h ? "items-end" : "items-center"
            )
          },
          /* @__PURE__ */ e.createElement("div", { className: "grid gap-1.5" }, h ? C : null, /* @__PURE__ */ e.createElement("span", { className: "text-muted-foreground" }, m?.label || n.name)),
          n.value && /* @__PURE__ */ e.createElement("span", { className: "text-foreground font-mono font-medium tabular-nums" }, n.value.toLocaleString())
        ))
      );
    }))
  );
}
const S = x.Legend;
function K({
  className: s,
  hideIcon: t = !1,
  payload: o,
  verticalAlign: r = "bottom",
  nameKey: c
}) {
  const { config: u } = w();
  return o?.length ? /* @__PURE__ */ e.createElement(
    "div",
    {
      className: l(
        "flex items-center justify-center gap-4",
        r === "top" ? "pb-3" : "pt-3",
        s
      )
    },
    o.map((a) => {
      const i = `${c || a.dataKey || "value"}`, d = b(u, a, i);
      return /* @__PURE__ */ e.createElement(
        "div",
        {
          key: a.value,
          className: l(
            "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
          )
        },
        d?.icon && !t ? /* @__PURE__ */ e.createElement(d.icon, null) : /* @__PURE__ */ e.createElement(
          "div",
          {
            className: "h-2 w-2 shrink-0 rounded-[2px]",
            style: {
              backgroundColor: a.color
            }
          }
        ),
        d?.label
      );
    })
  ) : null;
}
function b(s, t, o) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let c = o;
  return o in t && typeof t[o] == "string" ? c = t[o] : r && o in r && typeof r[o] == "string" && (c = r[o]), c in s ? s[c] : s[o];
}
export {
  P as ChartContainer,
  S as ChartLegend,
  K as ChartLegendContent,
  $ as ChartStyle,
  T as ChartTooltip,
  I as ChartTooltipContent
};
