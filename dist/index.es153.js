import o from "./index.es216.js";
function n(r, e) {
  if (r) {
    if (typeof r == "string") return o(r, e);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? o(r, e) : void 0;
  }
}
export {
  n as default
};
