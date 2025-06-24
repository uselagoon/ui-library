import { __module as e } from "./index.es80.js";
import { __require as i } from "./index.es81.js";
import { __require as t } from "./index.es82.js";
var r;
function m() {
  return r ? e.exports : (r = 1, process.env.NODE_ENV === "production" ? e.exports = i() : e.exports = t(), e.exports);
}
export {
  m as __require
};
