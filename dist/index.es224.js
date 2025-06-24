import { lintWarning as e } from "./index.es258.js";
var m = function(a, i, n) {
  a === "animation" && n.hashId && i !== "none" && e("You seem to be using hashed animation '".concat(i, "', in which case 'animationName' with Keyframe as value is recommended."), n);
};
export {
  m as default
};
