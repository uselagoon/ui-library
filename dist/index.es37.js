import * as l from "react";
import { GripVerticalIcon as n } from "lucide-react";
import * as a from "react-resizable-panels";
import { cn as t } from "./index.es54.js";
function c({ className: e, ...i }) {
  return /* @__PURE__ */ l.createElement(
    a.PanelGroup,
    {
      "data-slot": "resizable-panel-group",
      className: t("lib:flex lib:h-full lib:w-full data-[panel-group-direction=vertical]:lib:flex-col", e),
      ...i
    }
  );
}
function s({ ...e }) {
  return /* @__PURE__ */ l.createElement(a.Panel, { "data-slot": "resizable-panel", ...e });
}
function f({
  withHandle: e,
  className: i,
  ...r
}) {
  return /* @__PURE__ */ l.createElement(
    a.PanelResizeHandle,
    {
      "data-slot": "resizable-handle",
      className: t(
        "lib:bg-border focus-visible:lib:ring-ring lib:relative lib:flex lib:w-px lib:items-center lib:justify-center after:lib:absolute after:lib:inset-y-0 after:lib:left-1/2 after:lib:w-1 after:lib:-translate-x-1/2 focus-visible:lib:ring-1 focus-visible:lib:ring-offset-1 focus-visible:lib:outline-hidden data-[panel-group-direction=vertical]:lib:h-px data-[panel-group-direction=vertical]:lib:w-full data-[panel-group-direction=vertical]:after:lib:left-0 data-[panel-group-direction=vertical]:after:lib:h-1 data-[panel-group-direction=vertical]:after:lib:w-full data-[panel-group-direction=vertical]:after:lib:-translate-y-1/2 data-[panel-group-direction=vertical]:after:lib:translate-x-0 [&[data-panel-group-direction=vertical]>div]:lib:rotate-90",
        i
      ),
      ...r
    },
    e && /* @__PURE__ */ l.createElement("div", { className: "lib:bg-border lib:z-10 lib:flex lib:h-4 lib:w-3 lib:items-center lib:justify-center lib:rounded-xs lib:border" }, /* @__PURE__ */ l.createElement(n, { className: "lib:size-2.5" }))
  );
}
export {
  f as ResizableHandle,
  s as ResizablePanel,
  c as ResizablePanelGroup
};
