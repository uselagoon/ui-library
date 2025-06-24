import _ from "./index.es171.js";
import $ from "./index.es144.js";
import * as x from "react";
import { pathKey as A } from "./index.es229.js";
import D from "./index.es94.js";
import E from "./index.es98.js";
import H from "./index.es99.js";
import O from "./index.es100.js";
function k(g, y, C, i, n) {
  var G = x.useContext(D), a = G.cache, N = [g].concat($(y)), r = A(N), M = H([r]), b = O(), p = function(o) {
    a.opUpdate(r, function(u) {
      var t = u || [void 0, void 0], e = _(t, 2), f = e[0], l = f === void 0 ? 0 : f, c = e[1], v = c;
      process.env.NODE_ENV !== "production" && c && b && (i?.(v, b), v = null);
      var U = v || C(), h = [l, U];
      return o ? o(h) : h;
    });
  };
  x.useMemo(
    function() {
      p();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [r]
    /* eslint-enable */
  );
  var s = a.opGet(r);
  process.env.NODE_ENV !== "production" && !s && (p(), s = a.opGet(r));
  var d = s[1];
  return E(function() {
    n?.(d);
  }, function(m) {
    return p(function(o) {
      var u = _(o, 2), t = u[0], e = u[1];
      return m && t === 0 && n?.(d), [t + 1, e];
    }), function() {
      a.opUpdate(r, function(o) {
        var u = o || [], t = _(u, 2), e = t[0], f = e === void 0 ? 0 : e, l = t[1], c = f - 1;
        return c === 0 ? (M(function() {
          (m || !a.opGet(r)) && i?.(l, !1);
        }), null) : [f - 1, l];
      });
    };
  }, [r]), d;
}
export {
  k as default
};
