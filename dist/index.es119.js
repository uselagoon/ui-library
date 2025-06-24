import * as e from "react";
const t = /* @__PURE__ */ e.createContext(void 0), a = (n) => {
  let {
    children: o,
    size: r
  } = n;
  const i = e.useContext(t);
  return /* @__PURE__ */ e.createElement(t.Provider, {
    value: r || i
  }, o);
};
export {
  a as SizeContextProvider,
  t as default
};
