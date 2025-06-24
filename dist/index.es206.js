import m from "./index.es171.js";
import x from "./index.es174.js";
import * as F from "react";
import { STEP_NONE as c, STEP_ACTIVATED as a, STEP_PREPARE as f, STEP_PREPARED as R, STEP_START as d, STEP_ACTIVE as S } from "./index.es207.js";
import Q from "./index.es256.js";
import I from "./index.es257.js";
var L = [f, d, S, a], C = [f, R], D = !1, M = !0;
function b(r) {
  return r === S || r === a;
}
const g = function(r, _, P) {
  var T = x(c), i = m(T, 2), e = i[0], t = i[1], v = I(), E = m(v, 2), p = E[0], A = E[1];
  function N() {
    t(f, !0);
  }
  var n = _ ? C : L;
  return Q(function() {
    if (e !== c && e !== a) {
      var U = n.indexOf(e), o = n[U + 1], u = P(e);
      u === D ? t(o, !0) : o && p(function(l) {
        function s() {
          l.isCanceled() || t(o, !0);
        }
        u === !0 ? s() : Promise.resolve(u).then(s);
      });
    }
  }, [r, e]), F.useEffect(function() {
    return function() {
      A();
    };
  }, []), [N, e];
};
export {
  M as DoStep,
  D as SkipStep,
  g as default,
  b as isActive
};
