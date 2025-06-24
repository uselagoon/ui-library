import * as o from "react";
import { devUseWarning as i } from "./index.es105.js";
import { changeConfirmLocale as s } from "./index.es159.js";
import l from "./index.es108.js";
const d = "internalMark", p = (t) => {
  const {
    locale: e = {},
    children: a,
    _ANT_MARK__: c
  } = t;
  if (process.env.NODE_ENV !== "production") {
    const r = i("LocaleProvider");
    process.env.NODE_ENV !== "production" && r(c === d, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  o.useEffect(() => s(e && e.Modal), [e]);
  const n = o.useMemo(() => Object.assign(Object.assign({}, e), {
    exist: !0
  }), [e]);
  return /* @__PURE__ */ o.createElement(l.Provider, {
    value: n
  }, a);
};
process.env.NODE_ENV !== "production" && (p.displayName = "LocaleProvider");
export {
  d as ANT_MARK,
  p as default
};
