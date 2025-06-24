const o = (a) => ({
  animationDuration: a,
  animationFillMode: "both"
}), r = (a) => ({
  animationDuration: a,
  animationFillMode: "both"
}), m = function(a, t, i, n) {
  const e = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${e}${a}-enter,
      ${e}${a}-appear
    `]: Object.assign(Object.assign({}, o(n)), {
      animationPlayState: "paused"
    }),
    [`${e}${a}-leave`]: Object.assign(Object.assign({}, r(n)), {
      animationPlayState: "paused"
    }),
    [`
      ${e}${a}-enter${a}-enter-active,
      ${e}${a}-appear${a}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${e}${a}-leave${a}-leave-active`]: {
      animationName: i,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
};
export {
  m as initMotion
};
