import * as i from "react";
function n(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function v(e, d, r, t) {
  return i.useMemo(function() {
    var o = n(r ?? d), f = n(t ?? d), u = new Set(o), a = new Set(f);
    return e && (u.has("hover") && (u.delete("hover"), u.add("click")), a.has("hover") && (a.delete("hover"), a.add("click"))), [u, a];
  }, [e, d, r, t]);
}
export {
  v as default
};
