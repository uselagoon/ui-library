import o, { createContext as r, useContext as i } from "react";
const t = r(void 0), u = ({ linkComponent: e, children: n }) => /* @__PURE__ */ o.createElement(t.Provider, { value: e }, n), c = () => {
  const e = i(t);
  if (!e)
    throw new Error("useLinkComponent must be used within a LinkProvider");
  return e;
};
export {
  t as LinkContext,
  u as LinkProvider,
  c as useLinkComponent
};
