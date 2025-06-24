import i from "./index.es192.js";
import l from "./index.es193.js";
import u from "./index.es195.js";
import f from "./index.es199.js";
import o from "./index.es268.js";
let y = /* @__PURE__ */ function(s) {
  function e(r) {
    var t;
    return i(this, e), t = u(this, e), t.result = 0, r instanceof e ? t.result = r.result : typeof r == "number" && (t.result = r), t;
  }
  return f(e, s), l(e, [{
    key: "add",
    value: function(t) {
      return t instanceof e ? this.result += t.result : typeof t == "number" && (this.result += t), this;
    }
  }, {
    key: "sub",
    value: function(t) {
      return t instanceof e ? this.result -= t.result : typeof t == "number" && (this.result -= t), this;
    }
  }, {
    key: "mul",
    value: function(t) {
      return t instanceof e ? this.result *= t.result : typeof t == "number" && (this.result *= t), this;
    }
  }, {
    key: "div",
    value: function(t) {
      return t instanceof e ? this.result /= t.result : typeof t == "number" && (this.result /= t), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]);
}(o);
export {
  y as default
};
