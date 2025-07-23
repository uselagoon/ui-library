import { j as n } from "./index.es70.js";
import { createContext as r, useContext as i } from "react";
const o = r(void 0), m = ({ linkComponent: t, children: e }) => /* @__PURE__ */ n.jsx(o.Provider, { value: t, children: e }), x = () => {
  const t = i(o);
  if (!t)
    throw new Error("useLinkComponent must be used within a LinkProvider");
  return t;
};
export {
  o as LinkContext,
  m as LinkProvider,
  x as useLinkComponent
};
