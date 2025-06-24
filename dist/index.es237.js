import { __module as e } from "./index.es238.js";
import { __require as o } from "./index.es239.js";
import { __require as t } from "./index.es240.js";
var r;
function p() {
  return r ? e.exports : (r = 1, process.env.NODE_ENV === "production" ? e.exports = o() : e.exports = t(), e.exports);
}
export {
  p as __require
};
