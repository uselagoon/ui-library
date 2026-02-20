import { jsx as r } from "react/jsx-runtime";
import { Loader2Icon as s, OctagonXIcon as a, TriangleAlertIcon as n, InfoIcon as m, CircleCheckIcon as t } from "lucide-react";
import { useTheme as c } from "next-themes";
import { Toaster as i } from "sonner";
const g = ({ ...o }) => {
  const { theme: e = "system" } = c();
  return /* @__PURE__ */ r(
    i,
    {
      theme: e,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ r(t, { className: "size-4" }),
        info: /* @__PURE__ */ r(m, { className: "size-4" }),
        warning: /* @__PURE__ */ r(n, { className: "size-4" }),
        error: /* @__PURE__ */ r(a, { className: "size-4" }),
        loading: /* @__PURE__ */ r(s, { className: "size-4 animate-spin" })
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      },
      ...o
    }
  );
};
export {
  g as Toaster
};
