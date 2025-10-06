import { useState as j, useEffect as p } from "react";
import { FolderGit2 as v, ServerCog as f, BriefcaseBusiness as h, KeyRound as I, ListChecks as d, UserRoundCog as k } from "lucide-react";
const r = (e) => [
  {
    section: "Projects",
    sectionItems: [{ title: "Projects", url: "/projects", icon: v }]
  },
  {
    section: "Deployments",
    sectionItems: [{ title: "Active Deployments", url: "/alldeployments", icon: f }]
  },
  {
    section: "Organizations",
    sectionItems: [{ title: "Organizations", url: "/organizations", icon: h }]
  },
  {
    section: "Settings",
    sectionItems: [
      {
        title: "SSH Keys",
        url: "/settings",
        icon: I
      },
      {
        title: "Preferences",
        url: "/settings/preferences",
        icon: d
      },
      {
        title: "My Account",
        url: `${e}/account`,
        target: "blank",
        onClick: () => {
        },
        icon: k
      }
    ]
  }
];
function M(e, s, t) {
  const [l, g] = j(() => r(e.kcUrl));
  return p(() => {
    const a = s.match(/^\/projects\/([^/]+)/), m = s.match(/^\/projects\/([^/]+)\/([^/]+)/), u = s.match(/^\/organizations\/([^/]+)/), c = a?.[1], S = m?.[2], i = u?.[1];
    (async () => {
      const o = r(e.kcUrl);
      if (c && t?.getProjectNav) {
        const n = await t.getProjectNav(
          c,
          S,
          t.getEnvironmentNav
        );
        o[0].sectionItems[0].children = n;
      }
      if (i && t?.getOrgNav) {
        const n = await t.getOrgNav(i);
        o[2].sectionItems[0].children = n;
      }
      g(o);
    })();
  }, [e.kcUrl, s, t]), l;
}
export {
  M as useSidenavItems
};
