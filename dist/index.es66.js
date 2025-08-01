import { jsxs as s, jsx as r } from "react/jsx-runtime";
import { useState as g, useRef as q, useMemo as f, useEffect as v } from "react";
import { Label as D } from "./index.es29.js";
import { Sheet as F, SheetTrigger as I, SheetContent as L, SheetHeader as T, SheetTitle as j, SheetDescription as E, SheetFooter as R, SheetClose as W } from "./index.es40.js";
import { Button as h } from "./index.es13.js";
import { Input as B } from "./index.es28.js";
import H from "./index.es54.js";
import M from "./index.es62.js";
import { Loader2 as U } from "lucide-react";
function _({
  sheetTrigger: C = "Open",
  sheetTitle: S = "",
  sheetDescription: y = "",
  sheetFooterButton: k = "Save changes",
  buttonAction: p = () => {
  },
  sheetFields: c,
  loading: n = !1,
  additionalContent: N = null,
  error: l = !1,
  ...O
}) {
  const [i, u] = g(!1), m = q(n), d = f(() => () => {
    const e = {};
    return c.forEach((t) => {
      t.inputDefault !== void 0 && (e[t.id] = t.inputDefault);
    }), e;
  }, [c]), [a, b] = g(d), x = f(() => c.some((t) => {
    if (t.required)
      switch (t.type ?? "text") {
        case "checkbox":
          return a[t.id] !== !0;
        case "select":
        case "textarea":
        case "text":
        case "email":
        case "number":
        case "password":
        case "tel":
          return !a[t.id];
        default:
          return !1;
      }
    return !1;
  }) || n, [c, a, n]), o = (e, t) => {
    b((V) => ({
      ...V,
      [e]: t
    }));
  }, w = async (e) => {
    x || (p && await p(e, a), !n && !l && setTimeout(() => u(!1)));
  };
  return v(() => {
    i && b(d());
  }, [i, d]), v(() => {
    m.current === !0 && n === !1 && i && !l && u(!1), m.current = n;
  }, [n, i, l]), /* @__PURE__ */ s(F, { open: i, onOpenChange: u, ...O, children: [
    /* @__PURE__ */ r(I, { asChild: !0, children: /* @__PURE__ */ r(h, { variant: "outline", children: C }) }),
    /* @__PURE__ */ s(L, { children: [
      /* @__PURE__ */ s(T, { children: [
        /* @__PURE__ */ r(j, { children: S }),
        /* @__PURE__ */ r(E, { children: y })
      ] }),
      c.map((e) => /* @__PURE__ */ r("div", { className: "grid auto-rows-min gap-6 px-4", children: /* @__PURE__ */ s("div", { className: "grid gap-3", children: [
        e.type !== "checkbox" && /* @__PURE__ */ s(D, { htmlFor: e.id, children: [
          e.label,
          e.required && /* @__PURE__ */ r("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        (() => {
          switch (e.type) {
            case "checkbox":
              return /* @__PURE__ */ r("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ r(
                H,
                {
                  label: e.label,
                  id: e.id,
                  checked: a[e.id] === !0 || a[e.id] === "true",
                  onCheckedChange: (t) => o(e.id, t)
                }
              ) });
            case "textarea":
              return /* @__PURE__ */ r(
                "textarea",
                {
                  id: e.id,
                  className: "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                  value: a[e.id] || "",
                  onChange: (t) => o(e.id, t.target.value),
                  placeholder: e?.placeholder,
                  readOnly: e.readOnly
                }
              );
            case "select":
              return /* @__PURE__ */ r(
                M,
                {
                  placeholder: e?.placeholder || "",
                  options: e?.options || [],
                  defaultValue: a[e.id] || "",
                  onValueChange: (t) => o(e.id, t)
                }
              );
            default:
              return /* @__PURE__ */ r(
                B,
                {
                  type: e?.type || "text",
                  id: e.id,
                  value: a[e.id] || "",
                  onChange: (t) => o(e.id, t.target.value),
                  placeholder: e?.placeholder,
                  readOnly: e.readOnly
                }
              );
          }
        })()
      ] }) }, e.id)),
      /* @__PURE__ */ r("section", { className: "px-4", children: N }),
      /* @__PURE__ */ s(R, { children: [
        /* @__PURE__ */ s(h, { onClick: w, disabled: x, children: [
          n && /* @__PURE__ */ r(U, { className: "mr-2 h-4 w-4 animate-spin" }),
          k
        ] }),
        /* @__PURE__ */ r(W, { asChild: !0, children: /* @__PURE__ */ r(h, { variant: "outline", children: "Close" }) })
      ] })
    ] })
  ] });
}
export {
  _ as default
};
