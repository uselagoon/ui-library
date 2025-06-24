import $ from "./index.es144.js";
import s from "./index.es171.js";
import * as r from "react";
import d from "./index.es173.js";
import h from "./index.es162.js";
import y from "./index.es283.js";
var p = [];
function T(o, f) {
  var v = r.useState(function() {
    if (!h())
      return null;
    var e = document.createElement("div");
    return process.env.NODE_ENV !== "production" && f && e.setAttribute("data-debug", f), e;
  }), E = s(v, 1), t = E[0], n = r.useRef(!1), u = r.useContext(y), _ = r.useState(p), i = s(_, 2), a = i[0], c = i[1], C = u || (n.current ? void 0 : function(e) {
    c(function(R) {
      var S = [e].concat($(R));
      return S;
    });
  });
  function l() {
    t.parentElement || document.body.appendChild(t), n.current = !0;
  }
  function m() {
    var e;
    (e = t.parentElement) === null || e === void 0 || e.removeChild(t), n.current = !1;
  }
  return d(function() {
    return o ? u ? u(l) : l() : m(), m;
  }, [o]), d(function() {
    a.length && (a.forEach(function(e) {
      return e();
    }), c(p));
  }, [a]), [t, C];
}
export {
  T as default
};
