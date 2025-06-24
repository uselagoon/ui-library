import { RULESET as i, KEYFRAMES as E, COMMENT as f, DECLARATION as n, NAMESPACE as p, IMPORT as c, LAYER as v } from "./index.es280.js";
import { strlen as o } from "./index.es281.js";
function t(r, a) {
  for (var s = "", u = 0; u < r.length; u++)
    s += a(r[u], u, r, a) || "";
  return s;
}
function R(r, a, s, u) {
  switch (r.type) {
    case v:
      if (r.children.length) break;
    case c:
    case p:
    case n:
      return r.return = r.return || r.value;
    case f:
      return "";
    case E:
      return r.return = r.value + "{" + t(r.children, u) + "}";
    case i:
      if (!o(r.value = r.props.join(","))) return "";
  }
  return o(s = t(r.children, u)) ? r.return = r.value + "{" + s + "}" : "";
}
export {
  t as serialize,
  R as stringify
};
