import n from "./index.es192.js";
import s from "./index.es193.js";
import a from "./index.es202.js";
var f = /* @__PURE__ */ function() {
  function t(r, e) {
    n(this, t), a(this, "name", void 0), a(this, "style", void 0), a(this, "_keyframe", !0), this.name = r, this.style = e;
  }
  return s(t, [{
    key: "getName",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return e ? "".concat(e, "-").concat(this.name) : this.name;
    }
  }]), t;
}();
export {
  f as default
};
