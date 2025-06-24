import e from "./index.es196.js";
import u from "./index.es197.js";
import i from "./index.es198.js";
function p(o) {
  var s = u();
  return function() {
    var t, r = e(o);
    if (s) {
      var n = e(this).constructor;
      t = Reflect.construct(r, arguments, n);
    } else t = r.apply(this, arguments);
    return i(this, t);
  };
}
export {
  p as default
};
