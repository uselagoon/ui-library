import { jsxs as o, jsx as r } from "react/jsx-runtime";
import { useState as S, useRef as E, useMemo as C, useEffect as f } from "react";
import { Label as L } from "./index.es29.js";
import { Sheet as j, SheetTrigger as F, SheetContent as T, SheetHeader as R, SheetTitle as U, SheetDescription as W, SheetFooter as B, SheetClose as H } from "./index.es40.js";
import { Button as x } from "./index.es13.js";
import { Input as M } from "./index.es28.js";
import z from "./index.es54.js";
import G from "./index.es62.js";
import { Loader2 as J } from "lucide-react";
function ee({
  sheetTrigger: N = "Open",
  sheetTitle: k = "",
  sheetDescription: w = "",
  sheetFooterButton: O = "Save changes",
  buttonAction: b = () => {
  },
  sheetFields: c,
  loading: s = !1,
  additionalContent: V = null,
  error: d = !1,
  onFieldChange: g,
  ...D
}) {
  const [l, h] = S(!1), v = E(s), p = C(() => () => {
    const e = {};
    return c.forEach((t) => {
      t.inputDefault !== void 0 && (e[t.id] = t.inputDefault);
    }), e;
  }, [c]), [a, m] = S(p), y = C(() => c.some((t) => {
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
  }) || s, [c, a, s]), u = (e, t) => {
    const i = {
      ...a,
      [e]: t
    };
    m(i), c.find((q) => q.id === e)?.triggerFieldUpdate && g && g(e, t, i);
  }, I = async (e) => {
    y || (b && await b(e, a), !s && !d && setTimeout(() => h(!1)));
  };
  return f(() => {
    l && m(p());
  }, [l, p]), f(() => {
    v.current === !0 && s === !1 && l && !d && h(!1), v.current = s;
  }, [s, l, d]), f(() => {
    const e = c.map((n) => n.id), t = Object.keys(a), i = { ...a };
    t.forEach((n) => {
      e.includes(n) || delete i[n];
    }), c.forEach((n) => {
      n.inputDefault !== void 0 && !(n.id in i) && (i[n.id] = n.inputDefault);
    }), m(i);
  }, [c]), /* @__PURE__ */ o(j, { open: l, onOpenChange: h, ...D, children: [
    /* @__PURE__ */ r(F, { asChild: !0, children: /* @__PURE__ */ r(x, { children: N }) }),
    /* @__PURE__ */ o(T, { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ o(R, { children: [
        /* @__PURE__ */ r(U, { children: k }),
        /* @__PURE__ */ r(W, { children: w })
      ] }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 overflow-y-auto", children: [
        c.map((e) => /* @__PURE__ */ r("div", { className: "grid auto-rows-min gap-6 px-4", children: /* @__PURE__ */ o("div", { className: "grid gap-3", children: [
          e.type !== "checkbox" && /* @__PURE__ */ o(L, { htmlFor: e.id, children: [
            e.label,
            e.required && /* @__PURE__ */ r("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          (() => {
            switch (e.type) {
              case "checkbox":
                return /* @__PURE__ */ r("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ r(
                  z,
                  {
                    label: e.label,
                    id: e.id,
                    checked: a[e.id] === !0 || a[e.id] === "true",
                    onCheckedChange: (t) => u(e.id, t)
                  }
                ) });
              case "textarea":
                return /* @__PURE__ */ r(
                  "textarea",
                  {
                    id: e.id,
                    className: "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    value: a[e.id] || "",
                    onChange: (t) => u(e.id, t.target.value),
                    placeholder: e?.placeholder,
                    readOnly: e.readOnly
                  }
                );
              case "select":
                return /* @__PURE__ */ r(
                  G,
                  {
                    placeholder: e?.placeholder || "",
                    options: e?.options || [],
                    value: a[e.id] || "",
                    onValueChange: (t) => u(e.id, t)
                  }
                );
              default:
                return /* @__PURE__ */ r(
                  M,
                  {
                    type: e?.type || "text",
                    id: e.id,
                    value: a[e.id] || "",
                    onChange: (t) => u(e.id, t.target.value),
                    placeholder: e?.placeholder,
                    readOnly: e.readOnly
                  }
                );
            }
          })()
        ] }) }, e.id)),
        /* @__PURE__ */ r("section", { className: "px-4", children: V })
      ] }),
      /* @__PURE__ */ o(B, { children: [
        /* @__PURE__ */ o(x, { onClick: I, disabled: y, children: [
          s && /* @__PURE__ */ r(J, { className: "mr-2 h-4 w-4 animate-spin" }),
          O
        ] }),
        /* @__PURE__ */ r(H, { asChild: !0, children: /* @__PURE__ */ r(x, { variant: "outline", children: "Close" }) })
      ] })
    ] })
  ] });
}
export {
  ee as default
};
