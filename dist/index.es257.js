import c from "./index.es213.js";
import * as f from "react";
const m = function() {
  var e = f.useRef(null);
  function n() {
    c.cancel(e.current);
  }
  function r(t) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    n();
    var a = c(function() {
      u <= 1 ? t({
        isCanceled: function() {
          return a !== e.current;
        }
      }) : r(t, u - 1);
    });
    e.current = a;
  }
  return f.useEffect(function() {
    return function() {
      n();
    };
  }, []), [r, n];
};
export {
  m as default
};
