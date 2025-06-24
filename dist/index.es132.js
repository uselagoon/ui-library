import "./index.es92.js";
import "./index.es93.js";
import "react";
import "./index.es94.js";
import { unit as d } from "./index.es185.js";
import "./index.es98.js";
import "./index.es99.js";
import "./index.es100.js";
import "./index.es96.js";
import "./index.es95.js";
import "./index.es97.js";
import "./index.es101.js";
import { resetComponent as f } from "./index.es186.js";
import { initZoomMotion as h } from "./index.es187.js";
import x, { getArrowOffsetToken as S, MAX_VERTICAL_CONTENT_RADIUS as w } from "./index.es181.js";
import { getArrowToken as y } from "./index.es188.js";
import { genStyleHooks as T } from "./index.es189.js";
import R from "./index.es190.js";
import { merge as s } from "./index.es191.js";
const C = (o) => {
  const {
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: l,
    tooltipColor: r,
    tooltipBg: i,
    tooltipBorderRadius: e,
    zIndexPopup: a,
    controlHeight: n,
    boxShadowSecondary: m,
    paddingSM: c,
    paddingXS: g
  } = o;
  return [
    {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, f(o)), {
        position: "absolute",
        zIndex: a,
        display: "block",
        width: "max-content",
        maxWidth: l,
        visibility: "visible",
        transformOrigin: "var(--arrow-x, 50%) var(--arrow-y, 50%)",
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": i,
        // Wrapper for the tooltip content
        [`${t}-inner`]: {
          minWidth: n,
          minHeight: n,
          padding: `${d(o.calc(c).div(2).equal())} ${d(g)}`,
          color: r,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: i,
          borderRadius: e,
          boxShadow: m,
          boxSizing: "border-box"
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${t}-inner`]: {
            borderRadius: o.min(e, w)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), R(o, (u, b) => {
        let {
          darkColor: p
        } = b;
        return {
          [`&${t}-${u}`]: {
            [`${t}-inner`]: {
              backgroundColor: p
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": p
            }
          }
        };
      })), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    x(o, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: o.sizePopupArrow
      }
    }
  ];
}, O = (o) => Object.assign(Object.assign({
  zIndexPopup: o.zIndexPopupBase + 70
}, S({
  contentRadius: o.borderRadius,
  limitVerticalRadius: !0
})), y(s(o, {
  borderRadiusOuter: Math.min(o.borderRadiusOuter, 4)
}))), q = function(o) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return T("Tooltip", (r) => {
    const {
      borderRadius: i,
      colorTextLightSolid: e,
      colorBgSpotlight: a
    } = r, n = s(r, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: e,
      tooltipBorderRadius: i,
      tooltipBg: a
    });
    return [C(n), h(r, "zoom-big-fast")];
  }, O, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: t
  })(o);
};
export {
  q as default,
  O as prepareComponentToken
};
