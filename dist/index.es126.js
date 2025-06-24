import { getArrowOffsetToken as h } from "./index.es181.js";
function m(n, f, c, s) {
  if (s === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const i = s && typeof s == "object" ? s : {}, e = {};
  switch (n) {
    case "top":
    case "bottom":
      e.shiftX = f.arrowOffsetHorizontal * 2 + c, e.shiftY = !0, e.adjustY = !0;
      break;
    case "left":
    case "right":
      e.shiftY = f.arrowOffsetVertical * 2 + c, e.shiftX = !0, e.adjustX = !0;
      break;
  }
  const t = Object.assign(Object.assign({}, e), i);
  return t.shiftX || (t.adjustX = !0), t.shiftY || (t.adjustY = !0), t;
}
const p = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
}, g = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
}, u = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function O(n) {
  const {
    arrowWidth: f,
    autoAdjustOverflow: c,
    arrowPointAtCenter: s,
    offset: i,
    borderRadius: e
  } = n, t = f / 2, l = {};
  return Object.keys(p).forEach((r) => {
    const b = s && g[r] || p[r], o = Object.assign(Object.assign({}, b), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (l[r] = o, u.has(r) && (o.autoArrow = !1), r) {
      case "top":
      case "topLeft":
      case "topRight":
        o.offset[1] = -t - i;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        o.offset[1] = t + i;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        o.offset[0] = -t - i;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        o.offset[0] = t + i;
        break;
    }
    const a = h({
      contentRadius: e,
      limitVerticalRadius: !0
    });
    if (s)
      switch (r) {
        case "topLeft":
        case "bottomLeft":
          o.offset[0] = -a.arrowOffsetHorizontal - t;
          break;
        case "topRight":
        case "bottomRight":
          o.offset[0] = a.arrowOffsetHorizontal + t;
          break;
        case "leftTop":
        case "rightTop":
          o.offset[1] = -a.arrowOffsetHorizontal - t;
          break;
        case "leftBottom":
        case "rightBottom":
          o.offset[1] = a.arrowOffsetHorizontal + t;
          break;
      }
    o.overflow = m(r, a, f, c), o.htmlRegion = "visibleFirst";
  }), l;
}
export {
  O as default,
  m as getOverflowOptions
};
