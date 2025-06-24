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
import o from "./index.es228.js";
import "./index.es101.js";
import { initMotion as f } from "./index.es263.js";
const c = new o("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), p = new o("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), a = new o("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), m = new o("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), y = new o("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), O = new o("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), g = new o("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), l = new o("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), u = new o("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), z = new o("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), w = new o("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), K = new o("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), I = {
  zoom: {
    inKeyframes: c,
    outKeyframes: p
  },
  "zoom-big": {
    inKeyframes: a,
    outKeyframes: m
  },
  "zoom-big-fast": {
    inKeyframes: a,
    outKeyframes: m
  },
  "zoom-left": {
    inKeyframes: g,
    outKeyframes: l
  },
  "zoom-right": {
    inKeyframes: u,
    outKeyframes: z
  },
  "zoom-up": {
    inKeyframes: y,
    outKeyframes: O
  },
  "zoom-down": {
    inKeyframes: w,
    outKeyframes: K
  }
}, T = (t, r) => {
  const {
    antCls: s
  } = t, n = `${s}-${r}`, {
    inKeyframes: i,
    outKeyframes: e
  } = I[r];
  return [f(n, i, e, t.motionDurationFast), {
    [`
        ${n}-enter,
        ${n}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: t.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${n}-leave`]: {
      animationTimingFunction: t.motionEaseInOutCirc
    }
  }];
};
export {
  T as initZoomMotion,
  a as zoomBigIn,
  m as zoomBigOut,
  w as zoomDownIn,
  K as zoomDownOut,
  c as zoomIn,
  g as zoomLeftIn,
  l as zoomLeftOut,
  p as zoomOut,
  u as zoomRightIn,
  z as zoomRightOut,
  y as zoomUpIn,
  O as zoomUpOut
};
