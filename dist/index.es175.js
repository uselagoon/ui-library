import { TinyColor as y } from "./index.es165.js";
function I(s, i) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: a
  } = i;
  const {
    colorSuccess: g,
    colorWarning: v,
    colorError: B,
    colorInfo: H,
    colorPrimary: f,
    colorBgBase: u,
    colorTextBase: T
  } = s, o = n(f), r = n(g), c = n(v), e = n(B), l = n(H), x = a(u, T), m = s.colorLink || s.colorInfo, t = n(m);
  return Object.assign(Object.assign({}, x), {
    colorPrimaryBg: o[1],
    colorPrimaryBgHover: o[2],
    colorPrimaryBorder: o[3],
    colorPrimaryBorderHover: o[4],
    colorPrimaryHover: o[5],
    colorPrimary: o[6],
    colorPrimaryActive: o[7],
    colorPrimaryTextHover: o[8],
    colorPrimaryText: o[9],
    colorPrimaryTextActive: o[10],
    colorSuccessBg: r[1],
    colorSuccessBgHover: r[2],
    colorSuccessBorder: r[3],
    colorSuccessBorderHover: r[4],
    colorSuccessHover: r[4],
    colorSuccess: r[6],
    colorSuccessActive: r[7],
    colorSuccessTextHover: r[8],
    colorSuccessText: r[9],
    colorSuccessTextActive: r[10],
    colorErrorBg: e[1],
    colorErrorBgHover: e[2],
    colorErrorBorder: e[3],
    colorErrorBorderHover: e[4],
    colorErrorHover: e[5],
    colorError: e[6],
    colorErrorActive: e[7],
    colorErrorTextHover: e[8],
    colorErrorText: e[9],
    colorErrorTextActive: e[10],
    colorWarningBg: c[1],
    colorWarningBgHover: c[2],
    colorWarningBorder: c[3],
    colorWarningBorderHover: c[4],
    colorWarningHover: c[4],
    colorWarning: c[6],
    colorWarningActive: c[7],
    colorWarningTextHover: c[8],
    colorWarningText: c[9],
    colorWarningTextActive: c[10],
    colorInfoBg: l[1],
    colorInfoBgHover: l[2],
    colorInfoBorder: l[3],
    colorInfoBorderHover: l[4],
    colorInfoHover: l[4],
    colorInfo: l[6],
    colorInfoActive: l[7],
    colorInfoTextHover: l[8],
    colorInfoText: l[9],
    colorInfoTextActive: l[10],
    colorLinkHover: t[4],
    colorLink: t[6],
    colorLinkActive: t[7],
    colorBgMask: new y("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
export {
  I as default
};
