import { j as m } from "./index.es70.js";
import * as n from "react";
import { Slot as f } from "@radix-ui/react-slot";
import { FormProvider as u, useFormContext as x, useFormState as F, Controller as I } from "react-hook-form";
import { cn as a } from "./index.es71.js";
import { Label as p } from "./index.es29.js";
const b = u, c = n.createContext({}), S = ({
  ...t
}) => /* @__PURE__ */ m.jsx(c.Provider, { value: { name: t.name }, children: /* @__PURE__ */ m.jsx(I, { ...t }) }), d = () => {
  const t = n.useContext(c), e = n.useContext(l), { getFieldState: r } = x(), o = F({ name: t.name }), s = r(t.name, o);
  if (!t)
    throw new Error("useFormField should be used within <FormField>");
  const { id: i } = e;
  return {
    id: i,
    name: t.name,
    formItemId: `${i}-form-item`,
    formDescriptionId: `${i}-form-item-description`,
    formMessageId: `${i}-form-item-message`,
    ...s
  };
}, l = n.createContext({});
function $({ className: t, ...e }) {
  const r = n.useId();
  return /* @__PURE__ */ m.jsx(l.Provider, { value: { id: r }, children: /* @__PURE__ */ m.jsx("div", { "data-slot": "form-item", className: a("grid gap-2", t), ...e }) });
}
function D({ className: t, ...e }) {
  const { error: r, formItemId: o } = d();
  return /* @__PURE__ */ m.jsx(
    p,
    {
      "data-slot": "form-label",
      "data-error": !!r,
      className: a("data-[error=true]:text-destructive", t),
      htmlFor: o,
      ...e
    }
  );
}
function M({ ...t }) {
  const { error: e, formItemId: r, formDescriptionId: o, formMessageId: s } = d();
  return /* @__PURE__ */ m.jsx(
    f,
    {
      "data-slot": "form-control",
      id: r,
      "aria-describedby": e ? `${o} ${s}` : `${o}`,
      "aria-invalid": !!e,
      ...t
    }
  );
}
function N({ className: t, ...e }) {
  const { formDescriptionId: r } = d();
  return /* @__PURE__ */ m.jsx(
    "p",
    {
      "data-slot": "form-description",
      id: r,
      className: a("text-muted-foreground text-sm", t),
      ...e
    }
  );
}
function w({ className: t, ...e }) {
  const { error: r, formMessageId: o } = d(), s = r ? String(r?.message ?? "") : e.children;
  return s ? /* @__PURE__ */ m.jsx("p", { "data-slot": "form-message", id: o, className: a("text-destructive text-sm", t), ...e, children: s }) : null;
}
export {
  b as Form,
  M as FormControl,
  N as FormDescription,
  S as FormField,
  $ as FormItem,
  D as FormLabel,
  w as FormMessage,
  d as useFormField
};
