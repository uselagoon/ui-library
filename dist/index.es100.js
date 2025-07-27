import { j as p } from "./index.es70.js";
import g from "react-highlight-words";
import r from "react";
const a = (i, t, o) => typeof i == "string" ? /* @__PURE__ */ p.jsx(g, { highlightClassName: "highlighted", searchWords: [t], autoEscape: !0, textToHighlight: i }) : r.isValidElement(i) ? r.cloneElement(
  i,
  { ...i.props, key: `item-${o}` },
  r.Children.map(
    i.props.children,
    (h, s) => a(h, t, `${s}-${o}`)
  )
) : i;
export {
  a as highlightTextInElement
};
