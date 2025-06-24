import f from "react";
import u from "./index.es130.js";
import d from "./index.es128.js";
const e = 100, c = 10, p = e * c, s = {
  Modal: e,
  Drawer: e,
  Popover: e,
  Popconfirm: e,
  Tooltip: e,
  Tour: e
}, I = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function O(o) {
  return o in s;
}
function C(o, r) {
  const [, i] = u(), t = f.useContext(d), a = O(o);
  if (r !== void 0)
    return [r, r];
  let n = t ?? 0;
  return a ? (n += // Use preset token zIndex by default but not stack when has parent container
  (t ? 0 : i.zIndexPopupBase) + // Container offset
  s[o], n = Math.min(n, i.zIndexPopupBase + p)) : n += I[o], [t === void 0 ? r : n, n];
}
export {
  p as CONTAINER_MAX_OFFSET,
  I as consumerBaseZIndexOffset,
  s as containerBaseZIndexOffset,
  C as useZIndex
};
