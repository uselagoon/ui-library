import * as f from "react";
import { useRef as o } from "react";
import { transitionEndName as n, animationEndName as c } from "./index.es208.js";
const v = function(e) {
  var t = o();
  function i(r) {
    r && (r.removeEventListener(n, e), r.removeEventListener(c, e));
  }
  function u(r) {
    t.current && t.current !== r && i(t.current), r && r !== t.current && (r.addEventListener(n, e), r.addEventListener(c, e), t.current = r);
  }
  return f.useEffect(function() {
    return function() {
      i(t.current);
    };
  }, []), [u, i];
};
export {
  v as default
};
