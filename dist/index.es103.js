import * as n from "react";
function c(u, r, t) {
  var e = n.useRef({});
  return (!("value" in e.current) || t(e.current.condition, r)) && (e.current.value = u(), e.current.condition = r), e.current.value;
}
export {
  c as default
};
