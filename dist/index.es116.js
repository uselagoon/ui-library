import V from "./index.es103.js";
import j from "./index.es166.js";
import { devUseWarning as O } from "./index.es105.js";
import y from "./index.es167.js";
import { defaultConfig as u } from "./index.es110.js";
function _(r, o, a) {
  var t, d;
  const v = O("ConfigProvider"), s = r || {}, e = s.inherit === !1 || !o ? Object.assign(Object.assign({}, u), {
    hashed: (t = o?.hashed) !== null && t !== void 0 ? t : u.hashed,
    cssVar: o?.cssVar
  }) : o, f = y();
  if (process.env.NODE_ENV !== "production") {
    const n = s.cssVar || e.cssVar, c = !!(typeof s.cssVar == "object" && (!((d = s.cssVar) === null || d === void 0) && d.key) || f);
    process.env.NODE_ENV !== "production" && v(!n || c, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return V(() => {
    var n, c;
    if (!r)
      return o;
    const i = Object.assign({}, e.components);
    Object.keys(r.components || {}).forEach((b) => {
      i[b] = Object.assign(Object.assign({}, i[b]), r.components[b]);
    });
    const g = `css-var-${f.replace(/:/g, "")}`, l = ((n = s.cssVar) !== null && n !== void 0 ? n : e.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: a?.prefixCls
    }, typeof e.cssVar == "object" ? e.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((c = s.cssVar) === null || c === void 0 ? void 0 : c.key) || g
    });
    return Object.assign(Object.assign(Object.assign({}, e), s), {
      token: Object.assign(Object.assign({}, e.token), s.token),
      components: i,
      cssVar: l
    });
  }, [s, e], (n, c) => n.some((i, g) => {
    const l = c[g];
    return !j(i, l, !0);
  }));
}
export {
  _ as default
};
