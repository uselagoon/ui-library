import * as e from "react";
const o = "anticon", r = (t, n) => n || (t ? `ant-${t}` : "ant"), a = /* @__PURE__ */ e.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: r,
  iconPrefixCls: o
}), {
  Consumer: c
} = a;
export {
  c as ConfigConsumer,
  a as ConfigContext,
  o as defaultIconPrefixCls
};
