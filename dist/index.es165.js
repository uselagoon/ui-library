import { numberInputToObject as v, rgbToHsv as u, rgbToHsl as p, rgbToHex as c, rgbaToHex as f } from "./index.es260.js";
import { names as b } from "./index.es261.js";
import { inputToRGB as d } from "./index.es259.js";
import { boundAlpha as y, clamp01 as a, bound01 as g } from "./index.es262.js";
var S = (
  /** @class */
  function() {
    function i(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof i)
        return t;
      typeof t == "number" && (t = v(t)), this.originalInput = t;
      var o = d(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : o.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return i.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, i.prototype.isLight = function() {
      return !this.isDark();
    }, i.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, i.prototype.getLuminance = function() {
      var t = this.toRgb(), r, n, o, h = t.r / 255, s = t.g / 255, e = t.b / 255;
      return h <= 0.03928 ? r = h / 12.92 : r = Math.pow((h + 0.055) / 1.055, 2.4), s <= 0.03928 ? n = s / 12.92 : n = Math.pow((s + 0.055) / 1.055, 2.4), e <= 0.03928 ? o = e / 12.92 : o = Math.pow((e + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * o;
    }, i.prototype.getAlpha = function() {
      return this.a;
    }, i.prototype.setAlpha = function(t) {
      return this.a = y(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, i.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, i.prototype.toHsv = function() {
      var t = u(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, i.prototype.toHsvString = function() {
      var t = u(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, i.prototype.toHsl = function() {
      var t = p(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, i.prototype.toHslString = function() {
      var t = p(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, i.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), c(this.r, this.g, this.b, t);
    }, i.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, i.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), f(this.r, this.g, this.b, this.a, t);
    }, i.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, i.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, i.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, i.prototype.toRgbString = function() {
      var t = Math.round(this.r), r = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, i.prototype.toPercentageRgb = function() {
      var t = function(r) {
        return "".concat(Math.round(g(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, i.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(g(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, i.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + c(this.r, this.g, this.b, !1), r = 0, n = Object.entries(b); r < n.length; r++) {
        var o = n[r], h = o[0], s = o[1];
        if (t === s)
          return h;
      }
      return !1;
    }, i.prototype.toString = function(t) {
      var r = !!t;
      t = t ?? this.format;
      var n = !1, o = this.a < 1 && this.a >= 0, h = !r && o && (t.startsWith("hex") || t === "name");
      return h ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, i.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, i.prototype.clone = function() {
      return new i(this.toString());
    }, i.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l += t / 100, r.l = a(r.l), new i(r);
    }, i.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new i(r);
    }, i.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = a(r.l), new i(r);
    }, i.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, i.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, i.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = a(r.s), new i(r);
    }, i.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = a(r.s), new i(r);
    }, i.prototype.greyscale = function() {
      return this.desaturate(100);
    }, i.prototype.spin = function(t) {
      var r = this.toHsl(), n = (r.h + t) % 360;
      return r.h = n < 0 ? 360 + n : n, new i(r);
    }, i.prototype.mix = function(t, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(), o = new i(t).toRgb(), h = r / 100, s = {
        r: (o.r - n.r) * h + n.r,
        g: (o.g - n.g) * h + n.g,
        b: (o.b - n.b) * h + n.b,
        a: (o.a - n.a) * h + n.a
      };
      return new i(s);
    }, i.prototype.analogous = function(t, r) {
      t === void 0 && (t = 6), r === void 0 && (r = 30);
      var n = this.toHsl(), o = 360 / r, h = [this];
      for (n.h = (n.h - (o * t >> 1) + 720) % 360; --t; )
        n.h = (n.h + o) % 360, h.push(new i(n));
      return h;
    }, i.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new i(t);
    }, i.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var r = this.toHsv(), n = r.h, o = r.s, h = r.v, s = [], e = 1 / t; t--; )
        s.push(new i({ h: n, s: o, v: h })), h = (h + e) % 1;
      return s;
    }, i.prototype.splitcomplement = function() {
      var t = this.toHsl(), r = t.h;
      return [
        this,
        new i({ h: (r + 72) % 360, s: t.s, l: t.l }),
        new i({ h: (r + 216) % 360, s: t.s, l: t.l })
      ];
    }, i.prototype.onBackground = function(t) {
      var r = this.toRgb(), n = new i(t).toRgb(), o = r.a + n.a * (1 - r.a);
      return new i({
        r: (r.r * r.a + n.r * n.a * (1 - r.a)) / o,
        g: (r.g * r.a + n.g * n.a * (1 - r.a)) / o,
        b: (r.b * r.a + n.b * n.a * (1 - r.a)) / o,
        a: o
      });
    }, i.prototype.triad = function() {
      return this.polyad(3);
    }, i.prototype.tetrad = function() {
      return this.polyad(4);
    }, i.prototype.polyad = function(t) {
      for (var r = this.toHsl(), n = r.h, o = [this], h = 360 / t, s = 1; s < t; s++)
        o.push(new i({ h: (n + s * h) % 360, s: r.s, l: r.l }));
      return o;
    }, i.prototype.equals = function(t) {
      return this.toRgbString() === new i(t).toRgbString();
    }, i;
  }()
);
export {
  S as TinyColor
};
