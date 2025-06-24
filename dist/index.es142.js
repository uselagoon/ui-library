import K from "./index.es147.js";
import C from "./index.es209.js";
import c from "./index.es156.js";
import L from "./index.es192.js";
import M from "./index.es193.js";
import _ from "./index.es210.js";
import R from "./index.es199.js";
import x from "./index.es211.js";
import y from "./index.es202.js";
import * as d from "react";
import O from "./index.es141.js";
import { STATUS_REMOVED as E, STATUS_ADD as D, STATUS_KEEP as V, parseKeys as N, diffKeys as U, STATUS_REMOVE as j } from "./index.es212.js";
import { supportTransition as F } from "./index.es208.js";
var I = ["component", "children", "onVisibleChanged", "onAllRemoved"], $ = ["status"], w = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function z(W) {
  var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : O, S = /* @__PURE__ */ function(P) {
    R(u, P);
    var h = x(u);
    function u() {
      var r;
      L(this, u);
      for (var a = arguments.length, s = new Array(a), t = 0; t < a; t++)
        s[t] = arguments[t];
      return r = h.call.apply(h, [this].concat(s)), y(_(r), "state", {
        keyEntities: []
      }), y(_(r), "removeKey", function(m) {
        r.setState(function(i) {
          var n = i.keyEntities.map(function(e) {
            return e.key !== m ? e : c(c({}, e), {}, {
              status: E
            });
          });
          return {
            keyEntities: n
          };
        }, function() {
          var i = r.state.keyEntities, n = i.filter(function(e) {
            var p = e.status;
            return p !== E;
          }).length;
          n === 0 && r.props.onAllRemoved && r.props.onAllRemoved();
        });
      }), r;
    }
    return M(u, [{
      key: "render",
      value: function() {
        var a = this, s = this.state.keyEntities, t = this.props, m = t.component, i = t.children, n = t.onVisibleChanged;
        t.onAllRemoved;
        var e = C(t, I), p = m || d.Fragment, v = {};
        return w.forEach(function(o) {
          v[o] = e[o], delete e[o];
        }), delete e.keys, /* @__PURE__ */ d.createElement(p, e, s.map(function(o, T) {
          var k = o.status, l = C(o, $), b = k === D || k === V;
          return /* @__PURE__ */ d.createElement(g, K({}, v, {
            key: l.key,
            visible: b,
            eventProps: l,
            onVisibleChanged: function(f) {
              n?.(f, {
                key: l.key
              }), f || a.removeKey(l.key);
            }
          }), function(A, f) {
            return i(c(c({}, A), {}, {
              index: T
            }), f);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, s) {
        var t = a.keys, m = s.keyEntities, i = N(t), n = U(m, i);
        return {
          keyEntities: n.filter(function(e) {
            var p = m.find(function(v) {
              var o = v.key;
              return e.key === o;
            });
            return !(p && p.status === E && e.status === j);
          })
        };
      }
    }]), u;
  }(d.Component);
  return y(S, "defaultProps", {
    component: "div"
  }), S;
}
z(F);
export {
  z as genCSSMotionList
};
