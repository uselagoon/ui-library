import * as r from "react";
import { devUseWarning as t } from "./index.es105.js";
const n = /* @__PURE__ */ r.memo((e) => {
  let {
    dropdownMatchSelectWidth: o
  } = e;
  return t("ConfigProvider").deprecated(o === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (n.displayName = "PropWarning");
const p = process.env.NODE_ENV !== "production" ? n : () => null;
export {
  p as default
};
