import { j as e } from "./index.es70.js";
import { useState as I } from "react";
import { Pagination as C, PaginationContent as E, PaginationItem as a, PaginationPrevious as N, PaginationNext as b, PaginationEllipsis as d, PaginationLink as k } from "./index.es32.js";
function R({
  allItems: g,
  itemsPerPage: j,
  initialPage: p = 1,
  onClickPrevious: l,
  onClickNext: h,
  onClickPageNumber: x,
  ...u
}) {
  const s = Math.ceil(g / j), [c, o] = I(p), P = () => {
    l && l(), o((t) => Math.max(1, t - 1));
  }, f = () => {
    h && h(), o((t) => Math.min(s, t + 1));
  }, m = () => {
    const t = [];
    let r = Math.max(1, c - 1), i = r + 2;
    i > s && (i = s, r = Math.max(1, i - 2)), r > 1 && t.push(
      /* @__PURE__ */ e.jsx(a, { children: /* @__PURE__ */ e.jsx(d, {}) }, "start-ellipsis")
    );
    for (let n = r; n <= i; n++)
      t.push(
        /* @__PURE__ */ e.jsx(a, { children: /* @__PURE__ */ e.jsx(
          k,
          {
            href: "#",
            onClick: (M) => {
              M.preventDefault(), o(n), x && x((v) => ({ ...v, pageIndex: n - 1 }));
            },
            isActive: n === c,
            children: n
          }
        ) }, n)
      );
    return i < s && t.push(
      /* @__PURE__ */ e.jsx(a, { children: /* @__PURE__ */ e.jsx(d, {}) }, "end-ellipsis")
    ), t;
  };
  return /* @__PURE__ */ e.jsx(C, { ...u, children: /* @__PURE__ */ e.jsxs(E, { children: [
    /* @__PURE__ */ e.jsx(a, { children: /* @__PURE__ */ e.jsx(N, { href: "#", onClick: P }) }),
    m(),
    /* @__PURE__ */ e.jsx(a, { children: /* @__PURE__ */ e.jsx(b, { href: "#", onClick: f }) })
  ] }) });
}
export {
  R as default
};
