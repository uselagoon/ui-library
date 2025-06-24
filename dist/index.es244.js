import f from "./index.es192.js";
import h from "./index.es193.js";
import n from "./index.es195.js";
import a from "./index.es199.js";
import c from "./index.es268.js";
const l = "CALC_UNIT";
function i(r) {
  return typeof r == "number" ? `${r}${l}` : r;
}
let b = /* @__PURE__ */ function(r) {
  function s(e) {
    var t;
    return f(this, s), t = n(this, s), t.result = "", e instanceof s ? t.result = `(${e.result})` : typeof e == "number" ? t.result = i(e) : typeof e == "string" && (t.result = e), t;
  }
  return a(s, r), h(s, [{
    key: "add",
    value: function(t) {
      return t instanceof s ? this.result = `${this.result} + ${t.getResult()}` : (typeof t == "number" || typeof t == "string") && (this.result = `${this.result} + ${i(t)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(t) {
      return t instanceof s ? this.result = `${this.result} - ${t.getResult()}` : (typeof t == "number" || typeof t == "string") && (this.result = `${this.result} - ${i(t)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(t) {
      return this.lowPriority && (this.result = `(${this.result})`), t instanceof s ? this.result = `${this.result} * ${t.getResult(!0)}` : (typeof t == "number" || typeof t == "string") && (this.result = `${this.result} * ${t}`), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(t) {
      return this.lowPriority && (this.result = `(${this.result})`), t instanceof s ? this.result = `${this.result} / ${t.getResult(!0)}` : (typeof t == "number" || typeof t == "string") && (this.result = `${this.result} / ${t}`), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(t) {
      return this.lowPriority || t ? `(${this.result})` : this.result;
    }
  }, {
    key: "equal",
    value: function(t) {
      const {
        unit: u = !0
      } = t || {}, o = new RegExp(`${l}`, "g");
      return this.result = this.result.replace(o, u ? "px" : ""), typeof this.lowPriority < "u" ? `calc(${this.result})` : this.result;
    }
  }]);
}(c);
export {
  b as default
};
