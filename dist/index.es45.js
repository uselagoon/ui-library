import { useTheme as o } from "next-themes";
import { Toaster as t } from "sonner";
const m = ({ ...r }) => {
  const { theme: e = "system" } = o();
  return /* @__PURE__ */ React.createElement(
    t,
    {
      theme: e,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      },
      ...r
    }
  );
};
export {
  m as Toaster
};
//# sourceMappingURL=index.es45.js.map
