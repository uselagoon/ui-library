import o from "./index.es155.js";
function n(r, i) {
  if (o(r) != "object" || !r) return r;
  var e = r[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(r, i);
    if (o(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(r);
}
export {
  n as default
};
