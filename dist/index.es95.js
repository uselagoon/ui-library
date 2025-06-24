import m from "./index.es97.js";
import t from "./index.es230.js";
var a = new m();
function c(r) {
  var e = Array.isArray(r) ? r : [r];
  return a.has(e) || a.set(e, new t(e)), a.get(e);
}
export {
  c as default
};
