import e from "./index.es155.js";
var t = Symbol.for("react.element"), E = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
function f(r) {
  return (
    // Base object type
    r && e(r) === "object" && // React Element type
    (r.$$typeof === t || r.$$typeof === E) && // React Fragment type
    r.type === a
  );
}
export {
  f as default
};
