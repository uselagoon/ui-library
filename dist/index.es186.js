import "./index.es92.js";
import "./index.es93.js";
import "react";
import "./index.es94.js";
import "./index.es95.js";
import "./index.es96.js";
import "./index.es97.js";
import "./index.es98.js";
import "./index.es99.js";
import "./index.es100.js";
import "./index.es101.js";
const S = function(o) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: o.colorText,
    fontSize: o.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: o.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: e ? "inherit" : o.fontFamily
  };
}, h = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), y = (o) => ({
  a: {
    color: o.colorLink,
    textDecoration: o.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${o.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: o.colorLinkHover
    },
    "&:active": {
      color: o.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: o.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: o.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: o.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), z = (o, e, i) => {
  const {
    fontFamily: r,
    fontSize: n
  } = o, t = `[class^="${e}"], [class*=" ${e}"]`;
  return {
    [i ? `.${i}` : t]: {
      fontFamily: r,
      fontSize: n,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [t]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
};
export {
  z as genCommonStyle,
  y as genLinkStyle,
  S as resetComponent,
  h as resetIcon
};
