import c from "./index.es192.js";
import p from "./index.es193.js";
import o from "./index.es202.js";
var s = "%";
function r(t) {
  return t.join(s);
}
var d = /* @__PURE__ */ function() {
  function t(n) {
    c(this, t), o(this, "instanceId", void 0), o(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = n;
  }
  return p(t, [{
    key: "get",
    value: function(e) {
      return this.opGet(r(e));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(e) {
      return this.cache.get(e) || null;
    }
  }, {
    key: "update",
    value: function(e, a) {
      return this.opUpdate(r(e), a);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(e, a) {
      var u = this.cache.get(e), i = a(u);
      i === null ? this.cache.delete(e) : this.cache.set(e, i);
    }
  }]), t;
}();
export {
  d as default,
  r as pathKey
};
