import * as c from "react";
import { warningOnce as u, resetWarned as f } from "./index.es96.js";
function p() {
}
let n = null;
function l() {
  n = null, f();
}
let d = p;
process.env.NODE_ENV !== "production" && (d = (e, a, t) => {
  u(e, `[antd: ${a}] ${t}`), process.env.NODE_ENV === "test" && l();
});
const W = /* @__PURE__ */ c.createContext({}), N = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: a
  } = c.useContext(W), t = (s, o, r) => {
    if (!s)
      if (a === !1 && o === "deprecated") {
        const i = n;
        n || (n = {}), n[e] = n[e] || [], n[e].includes(r || "") || n[e].push(r || ""), i || console.warn("[antd] There exists deprecated usage in your code:", n);
      } else
        process.env.NODE_ENV !== "production" && d(s, e, r);
  };
  return t.deprecated = (s, o, r, i) => {
    t(s, "deprecated", `\`${o}\` is deprecated. Please use \`${r}\` instead.${i ? ` ${i}` : ""}`);
  }, t;
} : () => {
  const e = () => {
  };
  return e.deprecated = p, e;
}, $ = d;
export {
  W as WarningContext,
  $ as default,
  N as devUseWarning,
  p as noop,
  l as resetWarned
};
