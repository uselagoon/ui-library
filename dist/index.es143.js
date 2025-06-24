import n from "./index.es144.js";
import { PresetColors as r } from "./index.es145.js";
const t = r.map((e) => `${e}-inverse`);
function i(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(n(t), n(r)).includes(e) : r.includes(e);
}
export {
  i as isPresetColor
};
