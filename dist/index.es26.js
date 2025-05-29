import * as r from "react";
import { Slot as d } from "@radix-ui/react-slot";
import { FormProvider as f, useFormContext as u, useFormState as F, Controller as x } from "react-hook-form";
import { cn as a } from "./index.es54.js";
import { Label as I } from "./index.es30.js";
const v = f, c = r.createContext({}), E = ({
  ...e
}) => /* @__PURE__ */ r.createElement(c.Provider, { value: { name: e.name } }, /* @__PURE__ */ r.createElement(x, { ...e })), s = () => {
  const e = r.useContext(c), t = r.useContext(l), { getFieldState: o } = u(), m = F({ name: e.name }), n = o(e.name, m);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: i } = t;
  return {
    id: i,
    name: e.name,
    formItemId: `${i}-form-item`,
    formDescriptionId: `${i}-form-item-description`,
    formMessageId: `${i}-form-item-message`,
    ...n
  };
}, l = r.createContext({});
function S({ className: e, ...t }) {
  const o = r.useId();
  return /* @__PURE__ */ r.createElement(l.Provider, { value: { id: o } }, /* @__PURE__ */ r.createElement("div", { "data-slot": "form-item", className: a("lib:grid lib:gap-2", e), ...t }));
}
function $({ className: e, ...t }) {
  const { error: o, formItemId: m } = s();
  return /* @__PURE__ */ r.createElement(
    I,
    {
      "data-slot": "form-label",
      "data-error": !!o,
      className: a("data-[error=true]:lib:text-destructive", e),
      htmlFor: m,
      ...t
    }
  );
}
function h({ ...e }) {
  const { error: t, formItemId: o, formDescriptionId: m, formMessageId: n } = s();
  return /* @__PURE__ */ r.createElement(
    d,
    {
      "data-slot": "form-control",
      id: o,
      "aria-describedby": t ? `${m} ${n}` : `${m}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function D({ className: e, ...t }) {
  const { formDescriptionId: o } = s();
  return /* @__PURE__ */ r.createElement(
    "p",
    {
      "data-slot": "form-description",
      id: o,
      className: a("lib:text-muted-foreground lib:text-sm", e),
      ...t
    }
  );
}
function M({ className: e, ...t }) {
  const { error: o, formMessageId: m } = s(), n = o ? String(o?.message ?? "") : t.children;
  return n ? /* @__PURE__ */ r.createElement(
    "p",
    {
      "data-slot": "form-message",
      id: m,
      className: a("lib:text-destructive lib:text-sm", e),
      ...t
    },
    n
  ) : null;
}
export {
  v as Form,
  h as FormControl,
  D as FormDescription,
  E as FormField,
  S as FormItem,
  $ as FormLabel,
  M as FormMessage,
  s as useFormField
};
