import { useMemo as v } from "react";
const C = (f, s) => v(() => {
  const c = /* @__PURE__ */ new Set(), i = (l, r) => {
    const a = Array.isArray(l.children) && l.children.length > 0, o = s === l.url, d = r !== void 0 && l.url === r, n = a && l.children.some((t) => t.url === l.url);
    let u = !1, h = !1;
    if (a)
      for (const t of l.children)
        i(t, l.url) && (u = !0), s === t.url && (h = !0);
    let e = !1;
    return o ? e = !0 : d ? e = !1 : a && u ? n ? h && s === l.url ? e = !0 : (c.add(`${l.url}:parent`), e = !1) : e = !0 : l.url !== "/" && s.startsWith(`${l.url}/`) && (e = !0), e && c.add(l.url), o || u;
  };
  return f.forEach((l) => {
    l.sectionItems.forEach((r) => i(r));
  }), c;
}, [f, s]);
export {
  C as default
};
