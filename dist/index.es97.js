import { useMemo as d } from "react";
const x = (u, r) => d(() => {
  const t = /* @__PURE__ */ new Set(), h = (e, s) => {
    const c = Array.isArray(e.children) && e.children.length > 0, i = r === e.url, f = s !== void 0 && e.url === s, n = c && e.children.some((o) => o.url === e.url);
    let a = !1;
    if (c)
      for (const o of e.children)
        h(o, e.url) && (a = !0);
    let l = !1;
    return i ? l = !0 : f ? l = !1 : c && a ? n ? (t.add(`${e.url}:parent`), l = !1) : l = !0 : e.url !== "/" && r.startsWith(`${e.url}/`) && (l = !0), l && t.add(e.url), i || a;
  };
  return u.forEach((e) => {
    e.sectionItems.forEach((s) => h(s));
  }), t;
}, [u, r]);
export {
  x as default
};
