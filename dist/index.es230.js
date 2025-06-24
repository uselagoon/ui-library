import u from "./index.es192.js";
import h from "./index.es193.js";
import t from "./index.es202.js";
import { warning as s } from "./index.es96.js";
var r = 0, v = /* @__PURE__ */ function() {
  function i(e) {
    u(this, i), t(this, "derivatives", void 0), t(this, "id", void 0), this.derivatives = Array.isArray(e) ? e : [e], this.id = r, e.length === 0 && s(e.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), r += 1;
  }
  return h(i, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(o, a) {
        return a(n, o);
      }, void 0);
    }
  }]), i;
}();
export {
  v as default
};
