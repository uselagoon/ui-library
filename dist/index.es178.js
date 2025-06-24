import S from "./index.es242.js";
const z = (s) => {
  const t = S(s), e = t.map((i) => i.size), n = t.map((i) => i.lineHeight), o = e[1], g = e[0], H = e[2], a = n[1], f = n[0], h = n[2];
  return {
    fontSizeSM: g,
    fontSize: o,
    fontSizeLG: H,
    fontSizeXL: e[3],
    fontSizeHeading1: e[6],
    fontSizeHeading2: e[5],
    fontSizeHeading3: e[4],
    fontSizeHeading4: e[3],
    fontSizeHeading5: e[2],
    lineHeight: a,
    lineHeightLG: h,
    lineHeightSM: f,
    fontHeight: Math.round(a * o),
    fontHeightLG: Math.round(h * H),
    fontHeightSM: Math.round(f * g),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
};
export {
  z as default
};
