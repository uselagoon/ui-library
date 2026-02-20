import { jsx as e, jsxs as r } from "react/jsx-runtime";
import { CloudCog as l, AlertCircle as m } from "lucide-react";
import { Badge as u } from "../ui/badge.es.js";
function x({ bannerItem: a }) {
  const d = (t) => {
    switch (t) {
      case "Incident":
        return /* @__PURE__ */ e(m, { className: "w-5 h-5 text-[var(--badge-danger-bg)]" });
      case "Maintenance":
        return /* @__PURE__ */ e(l, { className: "w-5 h-5 text-[var(--badge-lagoon-bg)]" });
      default:
        return /* @__PURE__ */ e(l, { className: "w-5 h-5 text-[var(--badge-lagoon-bg)]" });
    }
  }, o = (t) => {
    const s = /* @__PURE__ */ new Date(), i = new Date(t.scheduled_for), n = Math.round((i.getTime() - s.getTime()) / 6e4);
    return n > 0 ? /* @__PURE__ */ r("span", { children: [
      /* @__PURE__ */ e("span", { className: "font-bold", children: "Upcoming - " }),
      c(t.name),
      /* @__PURE__ */ r("span", { className: "text-[var(--muted-foreground)]", children: [
        " (Starts in ",
        n,
        " minutes)"
      ] })
    ] }) : c(t.name);
  }, g = (t) => {
    const s = new Date(t.scheduled_for), i = new Date(t.scheduled_until), n = {
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    };
    return s.toDateString() === i.toDateString() ? /* @__PURE__ */ r("span", { children: [
      s.toLocaleString(void 0, n),
      " — ",
      i.toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" })
    ] }) : s.toLocaleString(void 0, n) + " — " + i.toLocaleString(void 0, n);
  }, c = (t) => t.length > 70 ? t.slice(0, 70) + "..." : t;
  return /* @__PURE__ */ e("div", { className: "w-[90%] mx-auto border bg-[var(--card)] rounded-xl mb-4 px-4 py-2", children: /* @__PURE__ */ r("div", { className: "flex items-start gap-2", children: [
    /* @__PURE__ */ e("div", { className: `w-10 h-10 rounded-xl flex items-center justify-center ${a.type === "Incident" ? "bg-[var(--badge-danger-bg)]/20" : "bg-[var(--badge-lagoon-bg)]/20"}`, children: d(a.type) }),
    /* @__PURE__ */ r("div", { className: "flex flex-col w-[90%] gap-2", children: [
      /* @__PURE__ */ r("div", { className: "flex gap-4 items-center", children: [
        /* @__PURE__ */ e("h4", { className: "text-md font-medium", children: a.type === "Maintenance" ? o(a) : c(a.name) }),
        /* @__PURE__ */ e(u, { className: "ml-auto", variant: a.type === "Incident" ? "danger" : "lagoon", children: a.type })
      ] }),
      /* @__PURE__ */ r("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ r("div", { className: "grid grid-cols-2 text-sm", children: [
          /* @__PURE__ */ r("div", { className: "flex items-end gap-2", children: [
            /* @__PURE__ */ e("span", { className: "text-[var(--muted-foreground)] text-xs uppercase", children: "Status " }),
            /* @__PURE__ */ e("span", { className: "capitalize", children: a.status })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex items-end gap-2", children: [
            /* @__PURE__ */ e("span", { className: "text-[var(--muted-foreground)] text-xs uppercase", children: "Impact " }),
            /* @__PURE__ */ e("span", { className: "capitalize", children: a.impact })
          ] })
        ] }),
        a.type === "Maintenance" && /* @__PURE__ */ r("div", { className: "w-full text-sm", children: [
          /* @__PURE__ */ e("span", { className: "text-[var(--muted-foreground)] text-xs uppercase", children: "Scheduled " }),
          /* @__PURE__ */ e("span", { children: g(a) })
        ] }),
        /* @__PURE__ */ e("div", { className: "w-full", children: a.shortlink && /* @__PURE__ */ e("a", { href: a.shortlink, target: "_blank", rel: "noopener noreferrer", className: "text-sm text-[var(--badge-lagoon-bg)] hover:text-[var(--badge-lagoon-hover)]", children: "More details" }) })
      ] })
    ] })
  ] }) });
}
export {
  x as default
};
