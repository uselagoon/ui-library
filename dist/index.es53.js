import { SkeletonTheme as r } from "react-loading-skeleton";
import m from "./index.es4.js";
/* empty css           */
const i = ({
  children: e,
  baseColor: t,
  highlightColor: o
}) => {
  localStorage.getItem("theme");
  const { theme: l } = m();
  return /* @__PURE__ */ React.createElement(r, { baseColor: t || "#000", highlightColor: o || "#c9c9c9" }, e);
};
export {
  i as default
};
