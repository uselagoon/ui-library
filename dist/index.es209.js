import n from "./index.es247.js";
function u(r, e) {
  if (r == null) return {};
  var t, o, i = n(r, e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(r);
    for (o = 0; o < l.length; o++) t = l[o], e.indexOf(t) === -1 && {}.propertyIsEnumerable.call(r, t) && (i[t] = r[t]);
  }
  return i;
}
export {
  u as default
};
