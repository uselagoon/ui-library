import o from "./index.es109.js";
Object.assign({}, o.Modal);
let c = [];
const s = () => c.reduce((e, a) => Object.assign(Object.assign({}, e), a), o.Modal);
function n(e) {
  if (e) {
    const a = Object.assign({}, e);
    return c.push(a), s(), () => {
      c = c.filter((t) => t !== a), s();
    };
  }
  Object.assign({}, o.Modal);
}
export {
  n as changeConfirmLocale
};
