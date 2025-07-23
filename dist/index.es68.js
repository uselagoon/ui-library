import { j as e } from "./index.es70.js";
import { Table as p, TableCaption as b, TableHeader as T, TableRow as d, TableHead as N, TableBody as f, TableCell as o, TableFooter as u } from "./index.es46.js";
const j = (r, n) => typeof r == "function" ? r(n) : n, w = ({ columns: r, data: n, caption: x, footer: l, ...m }) => /* @__PURE__ */ e.jsxs(p, { ...m, children: [
  !!x && /* @__PURE__ */ e.jsx(b, { children: x }),
  /* @__PURE__ */ e.jsx(T, { children: /* @__PURE__ */ e.jsx(d, { children: r.map(({ key: a, columnRender: i, title: c, columnClassName: t }) => /* @__PURE__ */ e.jsx(N, { className: t ?? "", children: j(i, c) }, a)) }) }),
  /* @__PURE__ */ e.jsx(f, { children: n.map((a) => {
    const i = ["rowClassName", "rowRender", "key"], c = Object.entries(a).filter(([s]) => !i.includes(s)).map((s) => s[1]), { rowClassName: t, rowRender: h } = a;
    return /* @__PURE__ */ e.jsx(d, { children: c.map((s) => /* @__PURE__ */ e.jsx(o, { className: t, children: j(h, s) }, s)) }, a.key);
  }) }),
  l && /* @__PURE__ */ e.jsx(u, { className: l?.footerClassName || "basictable-footer", children: /* @__PURE__ */ e.jsxs(d, { children: [
    /* @__PURE__ */ e.jsx(o, { colSpan: l?.span || r.length - 1, children: l.description }),
    /* @__PURE__ */ e.jsx(o, { className: "text-right", children: l.value })
  ] }) })
] });
w.displayName = "Table";
export {
  w as default
};
