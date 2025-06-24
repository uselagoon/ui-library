import "./index.es92.js";
import "./index.es93.js";
import "react";
import "./index.es94.js";
import { unit as i } from "./index.es185.js";
import "./index.es98.js";
import "./index.es99.js";
import "./index.es100.js";
import "./index.es96.js";
import "./index.es95.js";
import "./index.es97.js";
import "./index.es101.js";
function v(o) {
  return o === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, m = new Array(t), r = 0; r < t; r++)
        m[r] = arguments[r];
      return `max(${m.map((n) => i(n)).join(",")})`;
    },
    min: function() {
      for (var t = arguments.length, m = new Array(t), r = 0; r < t; r++)
        m[r] = arguments[r];
      return `min(${m.map((n) => i(n)).join(",")})`;
    }
  };
}
export {
  v as default
};
