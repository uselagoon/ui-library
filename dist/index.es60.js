import { jsxs as i, jsx as l } from "react/jsx-runtime";
import { AlertDialog as h, AlertDialogTrigger as p, AlertDialogContent as D, AlertDialogHeader as A, AlertDialogTitle as C, AlertDialogDescription as s, AlertDialogFooter as u, AlertDialogCancel as f, AlertDialogAction as m } from "./index.es7.js";
function j({
  title: r,
  message: t,
  cancelText: a,
  onCancel: n,
  confirmText: c,
  confirmDisabled: d = !1,
  onConfirm: o,
  ...e
}) {
  const g = "rest" in arguments && "open" in e && "onOpenChange" in e ? { open: e.open, onOpenChange: e.onOpenChange } : {};
  return /* @__PURE__ */ i(h, { ...g, children: [
    /* @__PURE__ */ l(p, { asChild: !0, children: "children" in e ? e.children : null }),
    /* @__PURE__ */ i(D, { children: [
      /* @__PURE__ */ i(A, { children: [
        /* @__PURE__ */ l(C, { children: r }),
        /* @__PURE__ */ l(s, { children: t })
      ] }),
      /* @__PURE__ */ i(u, { children: [
        /* @__PURE__ */ l(
          f,
          {
            onClick: () => {
              n && n();
            },
            children: a ?? "Cancel"
          }
        ),
        /* @__PURE__ */ l(
          m,
          {
            disabled: d,
            onClick: () => {
              o && o();
            },
            children: c ?? "Continue"
          }
        )
      ] })
    ] })
  ] });
}
export {
  j as default
};
