const b = (f) => {
  let t = f, l = f, o = f, R = f;
  return f < 6 && f >= 5 ? t = f + 1 : f < 16 && f >= 6 ? t = f + 2 : f >= 16 && (t = 16), f < 7 && f >= 5 ? l = 4 : f < 8 && f >= 7 ? l = 5 : f < 14 && f >= 8 ? l = 6 : f < 16 && f >= 14 ? l = 7 : f >= 16 && (l = 8), f < 6 && f >= 2 ? o = 1 : f >= 6 && (o = 2), f > 4 && f < 8 ? R = 4 : f >= 8 && (R = 6), {
    borderRadius: f,
    borderRadiusXS: o,
    borderRadiusSM: l,
    borderRadiusLG: t,
    borderRadiusOuter: R
  };
};
export {
  b as default
};
