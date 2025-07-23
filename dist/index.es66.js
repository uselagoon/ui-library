import { j as e } from "./index.es70.js";
import { Label as d } from "./index.es29.js";
import { Sheet as c, SheetTrigger as x, SheetContent as p, SheetHeader as u, SheetTitle as j, SheetDescription as m, SheetFooter as S, SheetClose as f } from "./index.es40.js";
import { Button as i } from "./index.es13.js";
import { Input as g } from "./index.es28.js";
function w({
  sheetTrigger: t = "Open",
  sheetTitle: s = "Edit profile",
  sheetDescription: n = "Make changes to your profile here. Click save when you're done.",
  sheetFooterButton: l = "Save changes",
  buttonAction: o = () => {
  },
  sheetFields: h,
  ...a
}) {
  return /* @__PURE__ */ e.jsxs(c, { ...a, children: [
    /* @__PURE__ */ e.jsx(x, { asChild: !0, children: /* @__PURE__ */ e.jsx(i, { variant: "outline", children: t }) }),
    /* @__PURE__ */ e.jsxs(p, { children: [
      /* @__PURE__ */ e.jsxs(u, { children: [
        /* @__PURE__ */ e.jsx(j, { children: s }),
        /* @__PURE__ */ e.jsx(m, { children: n })
      ] }),
      h.map((r) => /* @__PURE__ */ e.jsx("div", { className: "grid auto-rows-min gap-6 px-4", children: /* @__PURE__ */ e.jsxs("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ e.jsx(d, { htmlFor: r.id, children: r.label }),
        /* @__PURE__ */ e.jsx(g, { id: r.id, defaultValue: r.inputDefault })
      ] }) })),
      /* @__PURE__ */ e.jsxs(S, { children: [
        /* @__PURE__ */ e.jsx(i, { onClick: o, type: "submit", children: l }),
        /* @__PURE__ */ e.jsx(f, { asChild: !0, children: /* @__PURE__ */ e.jsx(i, { variant: "outline", children: "Close" }) })
      ] })
    ] })
  ] });
}
export {
  w as default
};
