import a from "./index.es250.js";
function s(t) {
  const {
    motionUnit: o,
    motionBase: i,
    borderRadius: n,
    lineWidth: e
  } = t;
  return Object.assign({
    // motion
    motionDurationFast: `${(i + o).toFixed(1)}s`,
    motionDurationMid: `${(i + o * 2).toFixed(1)}s`,
    motionDurationSlow: `${(i + o * 3).toFixed(1)}s`,
    // line
    lineWidthBold: e + 1
  }, a(n));
}
export {
  s as default
};
