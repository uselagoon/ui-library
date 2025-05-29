import * as r from "react";
import { Slot as l } from "@radix-ui/react-slot";
import { FormProvider as f, useFormContext as u, useFormState as F, Controller as x } from "react-hook-form";
import { cn as s } from "./index.es54.js";
import { Label as I } from "./index.es30.js";
const E = f, c = r.createContext({}), b = ({
  ...e
}) => /* @__PURE__ */ r.createElement(c.Provider, { value: { name: e.name } }, /* @__PURE__ */ r.createElement(x, { ...e })), i = () => {
  const e = r.useContext(c), t = r.useContext(d), { getFieldState: o } = u(), m = F({ name: e.name }), n = o(e.name, m);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...n
  };
}, d = r.createContext({});
function S({ className: e, ...t }) {
  const o = r.useId();
  return /* @__PURE__ */ r.createElement(d.Provider, { value: { id: o } }, /* @__PURE__ */ r.createElement("div", { "data-slot": "form-item", className: s("grid gap-2", e), ...t }));
}
function $({ className: e, ...t }) {
  const { error: o, formItemId: m } = i();
  return /* @__PURE__ */ r.createElement(
    I,
    {
      "data-slot": "form-label",
      "data-error": !!o,
      className: s("data-[error=true]:text-destructive", e),
      htmlFor: m,
      ...t
    }
  );
}
function h({ ...e }) {
  const { error: t, formItemId: o, formDescriptionId: m, formMessageId: n } = i();
  return /* @__PURE__ */ r.createElement(
    l,
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
  const { formDescriptionId: o } = i();
  return /* @__PURE__ */ r.createElement(
    "p",
    {
      "data-slot": "form-description",
      id: o,
      className: s("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function M({ className: e, ...t }) {
  const { error: o, formMessageId: m } = i(), n = o ? String(o?.message ?? "") : t.children;
  return n ? /* @__PURE__ */ r.createElement("p", { "data-slot": "form-message", id: m, className: s("text-destructive text-sm", e), ...t }, n) : null;
}
export {
  E as Form,
  h as FormControl,
  D as FormDescription,
  b as FormField,
  S as FormItem,
  $ as FormLabel,
  M as FormMessage,
  i as useFormField
};
//# sourceMappingURL=index.es26.js.map
