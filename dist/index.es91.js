import { __module as e } from "./index.es92.js";
import { __require as i } from "./index.es93.js";
import { __require as t } from "./index.es94.js";
var r;
function m() {
  return r ? e.exports : (r = 1, process.env.NODE_ENV === "production" ? e.exports = i() : e.exports = t(), e.exports);
}
export {
  m as __require
};
