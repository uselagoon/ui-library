import o from "./index.es155.js";
import i from "./index.es253.js";
function f(t) {
  var r = i(t, "string");
  return o(r) == "symbol" ? r : r + "";
}
export {
  f as default
};
