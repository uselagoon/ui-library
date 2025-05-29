import * as e from "react";
import * as x from "recharts";
import { cn as s } from "./index.es54.js";
const j = { light: "", dark: ".dark" }, k = e.createContext(null);
function w() {
  const i = e.useContext(k);
  if (!i)
    throw new Error("useChart must be used within a <ChartContainer />");
  return i;
}
function P({
  id: i,
  className: t,
  children: n,
  config: r,
  ...a
}) {
  const b = e.useId(), o = `chart-${i || b.replace(/:/g, "")}`;
  return /* @__PURE__ */ e.createElement(k.Provider, { value: { config: r } }, /* @__PURE__ */ e.createElement(
    "div",
    {
      "data-slot": "chart",
      "data-chart": o,
      className: s(
        "[&_.recharts-cartesian-axis-tick_text]:lib:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke=#ccc]]:lib:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:lib:stroke-border [&_.recharts-polar-grid_[stroke=#ccc]]:lib:stroke-border [&_.recharts-radial-bar-background-sector]:lib:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:lib:fill-muted [&_.recharts-reference-line_[stroke=#ccc]]:lib:stroke-border lib:flex lib:aspect-video lib:justify-center lib:text-xs [&_.recharts-dot[stroke=#fff]]:lib:stroke-transparent [&_.recharts-layer]:lib:outline-hidden [&_.recharts-sector]:lib:outline-hidden [&_.recharts-sector[stroke=#fff]]:lib:stroke-transparent [&_.recharts-surface]:lib:outline-hidden",
        t
      ),
      ...a
    },
    /* @__PURE__ */ e.createElement($, { id: o, config: r }),
    /* @__PURE__ */ e.createElement(x.ResponsiveContainer, null, n)
  ));
}
const $ = ({ id: i, config: t }) => {
  const n = Object.entries(t).filter(([, r]) => r.theme || r.color);
  return n.length ? /* @__PURE__ */ e.createElement(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(j).map(
          ([r, a]) => `
${a} [data-chart=${i}] {
${n.map(([b, o]) => {
            const c = o.theme?.[r] || o.color;
            return c ? `  --color-${b}: ${c};` : null;
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
  active: i,
  payload: t,
  className: n,
  indicator: r = "dot",
  hideLabel: a = !1,
  hideIndicator: b = !1,
  label: o,
  labelFormatter: c,
  labelClassName: u,
  formatter: E,
  color: y,
  nameKey: N,
  labelKey: h
}) {
  const { config: m } = w(), C = e.useMemo(() => {
    if (a || !t?.length)
      return null;
    const [l] = t, g = `${h || l?.dataKey || l?.name || "value"}`, v = p(m, l, g), d = !h && typeof o == "string" ? m[o]?.label || o : v?.label;
    return c ? /* @__PURE__ */ e.createElement("div", { className: s("lib:font-medium", u) }, c(d, t)) : d ? /* @__PURE__ */ e.createElement("div", { className: s("lib:font-medium", u) }, d) : null;
  }, [o, c, t, a, u, m, h]);
  if (!i || !t?.length)
    return null;
  const f = t.length === 1 && r !== "dot";
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: s(
        "lib:border-border/50 lib:bg-background lib:grid lib:min-w-[8rem] lib:items-start lib:gap-1.5 lib:rounded-lg lib:border lib:px-2.5 lib:py-1.5 lib:text-xs lib:shadow-xl",
        n
      )
    },
    f ? null : C,
    /* @__PURE__ */ e.createElement("div", { className: "lib:grid lib:gap-1.5" }, t.map((l, g) => {
      const v = `${N || l.name || l.dataKey || "value"}`, d = p(m, l, v), _ = y || l.payload.fill || l.color;
      return /* @__PURE__ */ e.createElement(
        "div",
        {
          key: l.dataKey,
          className: s(
            "[&>svg]:lib:text-muted-foreground lib:flex lib:w-full lib:flex-wrap lib:items-stretch lib:gap-2 [&>svg]:lib:h-2.5 [&>svg]:lib:w-2.5",
            r === "dot" && "lib:items-center"
          )
        },
        E && l?.value !== void 0 && l.name ? E(l.value, l.name, l, g, l.payload) : /* @__PURE__ */ e.createElement(e.Fragment, null, d?.icon ? /* @__PURE__ */ e.createElement(d.icon, null) : !b && /* @__PURE__ */ e.createElement(
          "div",
          {
            className: s(
              "lib:shrink-0 lib:rounded-[2px] lib:border-(--color-border) lib:bg-(--color-bg)",
              {
                "h-2.5 w-2.5": r === "dot",
                "w-1": r === "line",
                "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                "my-0.5": f && r === "dashed"
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
            className: s(
              "lib:flex lib:flex-1 lib:justify-between lib:leading-none",
              f ? "lib:items-end" : "lib:items-center"
            )
          },
          /* @__PURE__ */ e.createElement("div", { className: "lib:grid lib:gap-1.5" }, f ? C : null, /* @__PURE__ */ e.createElement("span", { className: "lib:text-muted-foreground" }, d?.label || l.name)),
          l.value && /* @__PURE__ */ e.createElement("span", { className: "lib:text-foreground lib:font-mono lib:font-medium lib:tabular-nums" }, l.value.toLocaleString())
        ))
      );
    }))
  );
}
const S = x.Legend;
function K({
  className: i,
  hideIcon: t = !1,
  payload: n,
  verticalAlign: r = "bottom",
  nameKey: a
}) {
  const { config: b } = w();
  return n?.length ? /* @__PURE__ */ e.createElement(
    "div",
    {
      className: s(
        "lib:flex lib:items-center lib:justify-center lib:gap-4",
        r === "top" ? "lib:pb-3" : "lib:pt-3",
        i
      )
    },
    n.map((o) => {
      const c = `${a || o.dataKey || "value"}`, u = p(b, o, c);
      return /* @__PURE__ */ e.createElement(
        "div",
        {
          key: o.value,
          className: s(
            "[&>svg]:lib:text-muted-foreground lib:flex lib:items-center lib:gap-1.5 [&>svg]:lib:h-3 [&>svg]:lib:w-3"
          )
        },
        u?.icon && !t ? /* @__PURE__ */ e.createElement(u.icon, null) : /* @__PURE__ */ e.createElement(
          "div",
          {
            className: "lib:h-2 lib:w-2 lib:shrink-0 lib:rounded-[2px]",
            style: {
              backgroundColor: o.color
            }
          }
        ),
        u?.label
      );
    })
  ) : null;
}
function p(i, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let a = n;
  return n in t && typeof t[n] == "string" ? a = t[n] : r && n in r && typeof r[n] == "string" && (a = r[n]), a in i ? i[a] : i[n];
}
export {
  P as ChartContainer,
  S as ChartLegend,
  K as ChartLegendContent,
  $ as ChartStyle,
  T as ChartTooltip,
  I as ChartTooltipContent
};
