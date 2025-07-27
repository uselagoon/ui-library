import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { Label as s } from "./index.es29.js";
import { Sheet as p, SheetTrigger as u, SheetContent as m, SheetHeader as S, SheetTitle as f, SheetDescription as g, SheetFooter as C, SheetClose as v } from "./index.es40.js";
import { Button as t } from "./index.es13.js";
import { Input as x } from "./index.es28.js";
function D({
  sheetTrigger: n = "Open",
  sheetTitle: l = "Edit profile",
  sheetDescription: o = "Make changes to your profile here. Click save when you're done.",
  sheetFooterButton: h = "Save changes",
  buttonAction: a = () => {
  },
  sheetFields: d,
  ...c
}) {
  return /* @__PURE__ */ r(p, { ...c, children: [
    /* @__PURE__ */ e(u, { asChild: !0, children: /* @__PURE__ */ e(t, { variant: "outline", children: n }) }),
    /* @__PURE__ */ r(m, { children: [
      /* @__PURE__ */ r(S, { children: [
        /* @__PURE__ */ e(f, { children: l }),
        /* @__PURE__ */ e(g, { children: o })
      ] }),
      d.map((i) => /* @__PURE__ */ e("div", { className: "grid auto-rows-min gap-6 px-4", children: /* @__PURE__ */ r("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ e(s, { htmlFor: i.id, children: i.label }),
        /* @__PURE__ */ e(x, { id: i.id, defaultValue: i.inputDefault })
      ] }) })),
      /* @__PURE__ */ r(C, { children: [
        /* @__PURE__ */ e(t, { onClick: a, type: "submit", children: h }),
        /* @__PURE__ */ e(v, { asChild: !0, children: /* @__PURE__ */ e(t, { variant: "outline", children: "Close" }) })
      ] })
    ] })
  ] });
}
export {
  D as default
};
