import { j as e } from "./index.es70.js";
import { useState as f } from "react";
import { Pagination as p, PaginationContent as C, PaginationItem as s, PaginationPrevious as M, PaginationNext as k, PaginationEllipsis as c, PaginationLink as v } from "./index.es32.js";
function I({ allItems: h, itemsPerPage: x, initialPage: u = 1, ...P }) {
  const a = Math.ceil(h / x), [l, o] = f(u), g = () => {
    o((t) => Math.max(1, t - 1));
  }, d = () => {
    o((t) => Math.min(a, t + 1));
  }, j = () => {
    const t = [];
    let r = Math.max(1, l - 1), i = r + 2;
    i > a && (i = a, r = Math.max(1, i - 2)), r > 1 && t.push(
      /* @__PURE__ */ e.jsx(s, { children: /* @__PURE__ */ e.jsx(c, {}) }, "start-ellipsis")
    );
    for (let n = r; n <= i; n++)
      t.push(
        /* @__PURE__ */ e.jsx(s, { children: /* @__PURE__ */ e.jsx(
          v,
          {
            href: "#",
            onClick: (m) => {
              m.preventDefault(), o(n);
            },
            isActive: n === l,
            children: n
          }
        ) }, n)
      );
    return i < a && t.push(
      /* @__PURE__ */ e.jsx(s, { children: /* @__PURE__ */ e.jsx(c, {}) }, "end-ellipsis")
    ), t;
  };
  return /* @__PURE__ */ e.jsx(p, { ...P, children: /* @__PURE__ */ e.jsxs(C, { children: [
    /* @__PURE__ */ e.jsx(s, { children: /* @__PURE__ */ e.jsx(M, { href: "#", onClick: g }) }),
    j(),
    /* @__PURE__ */ e.jsx(s, { children: /* @__PURE__ */ e.jsx(k, { href: "#", onClick: d }) })
  ] }) });
}
export {
  I as default
};
