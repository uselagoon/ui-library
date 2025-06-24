import * as t from "react";
const o = /* @__PURE__ */ t.createContext(!1), n = (r) => {
  let {
    children: a,
    disabled: e
  } = r;
  const l = t.useContext(o);
  return /* @__PURE__ */ t.createElement(o.Provider, {
    value: e ?? l
  }, a);
};
export {
  n as DisabledContextProvider,
  o as default
};
