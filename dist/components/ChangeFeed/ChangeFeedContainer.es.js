import { jsx as a, jsxs as v } from "react/jsx-runtime";
import { useState as i, useEffect as w } from "react";
import x from "./ChangeFeed.es.js";
import { ChangeFeedDataSchema as j } from "../../schemas/changeFeed.es.js";
function I({
  sourceData: r,
  refetchInterval: n = 6e5,
  fallbackData: c = [],
  onError: g,
  showLoading: u = !0
}) {
  const [d, f] = i(c), [p, s] = i(!!r), [l, h] = i(null);
  return w(() => {
    if (!r) {
      s(!1);
      return;
    }
    const m = async () => {
      try {
        s(!0), h(null);
        const e = await fetch(r, {
          cache: "no-cache"
        });
        if (!e.ok)
          throw new Error(`Failed to fetch change feed data: ${e.statusText}`);
        const t = await e.json(), o = j.safeParse(t);
        if (!o.success)
          throw console.error("Changefeed validation failed:", o.error.format()), new Error("Invalid changefeed data format");
        f(o.data.changes);
      } catch (e) {
        const t = e instanceof Error ? e : new Error("Unknown error");
        h(t), g?.(t), f(c);
      } finally {
        s(!1);
      }
    };
    if (m(), n > 0) {
      const e = setInterval(m, n);
      return () => clearInterval(e);
    }
  }, [r, n]), p && u ? /* @__PURE__ */ a("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ a("div", { className: "text-gray-500", children: "Loading changefeed..." }) }) : l && d.length === 0 ? /* @__PURE__ */ a("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ v("div", { className: "text-red-500", children: [
    "Failed to load changefeed. ",
    l.message
  ] }) }) : /* @__PURE__ */ a(x, { changeFeedItems: d });
}
export {
  I as default
};
