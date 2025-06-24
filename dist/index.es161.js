import t from "./index.es164.js";
var e = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, a = {}, o = {};
Object.keys(e).forEach(function(r) {
  a[r] = t(e[r]), a[r].primary = a[r][5], o[r] = t(e[r], {
    theme: "dark",
    backgroundColor: "#141414"
  }), o[r].primary = o[r][5];
});
export {
  t as generate,
  o as presetDarkPalettes,
  a as presetPalettes,
  e as presetPrimaryColors
};
