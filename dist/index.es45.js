import { useTheme as o } from "next-themes";
import { Toaster as t } from "sonner";
const m = ({ ...r }) => {
  const { theme: e = "system" } = o();
  return /* @__PURE__ */ React.createElement(
    t,
    {
      theme: e,
      className: "lib:toaster lib:group",
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
