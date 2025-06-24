import { __module as s } from "./index.es137.js";
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var u;
function c() {
  return u ? s.exports : (u = 1, function(i) {
    (function() {
      var f = {}.hasOwnProperty;
      function n() {
        for (var r = "", t = 0; t < arguments.length; t++) {
          var e = arguments[t];
          e && (r = o(r, a(e)));
        }
        return r;
      }
      function a(r) {
        if (typeof r == "string" || typeof r == "number")
          return r;
        if (typeof r != "object")
          return "";
        if (Array.isArray(r))
          return n.apply(null, r);
        if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]"))
          return r.toString();
        var t = "";
        for (var e in r)
          f.call(r, e) && r[e] && (t = o(t, e));
        return t;
      }
      function o(r, t) {
        return t ? r ? r + " " + t : r + t : r;
      }
      i.exports ? (n.default = n, i.exports = n) : window.classNames = n;
    })();
  }(s), s.exports);
}
export {
  c as __require
};
