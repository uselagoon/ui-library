import c from "./index.es171.js";
import y from "./index.es192.js";
import C from "./index.es193.js";
import o from "./index.es202.js";
function g(a, i) {
  if (a.length !== i.length)
    return !1;
  for (var e = 0; e < a.length; e++)
    if (a[e] !== i[e])
      return !1;
  return !0;
}
var d = /* @__PURE__ */ function() {
  function a() {
    y(this, a), o(this, "cache", void 0), o(this, "keys", void 0), o(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return C(a, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(e) {
      var t, n, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = {
        map: this.cache
      };
      return e.forEach(function(m) {
        if (!s)
          s = void 0;
        else {
          var l;
          s = (l = s) === null || l === void 0 || (l = l.map) === null || l === void 0 ? void 0 : l.get(m);
        }
      }), (t = s) !== null && t !== void 0 && t.value && r && (s.value[1] = this.cacheCallTimes++), (n = s) === null || n === void 0 ? void 0 : n.value;
    }
  }, {
    key: "get",
    value: function(e) {
      var t;
      return (t = this.internalGet(e, !0)) === null || t === void 0 ? void 0 : t[0];
    }
  }, {
    key: "has",
    value: function(e) {
      return !!this.internalGet(e);
    }
  }, {
    key: "set",
    value: function(e, t) {
      var n = this;
      if (!this.has(e)) {
        if (this.size() + 1 > a.MAX_CACHE_SIZE + a.MAX_CACHE_OFFSET) {
          var r = this.keys.reduce(function(h, u) {
            var f = c(h, 2), p = f[1];
            return n.internalGet(u)[1] < p ? [u, n.internalGet(u)[1]] : h;
          }, [this.keys[0], this.cacheCallTimes]), s = c(r, 1), m = s[0];
          this.delete(m);
        }
        this.keys.push(e);
      }
      var l = this.cache;
      e.forEach(function(h, u) {
        if (u === e.length - 1)
          l.set(h, {
            value: [t, n.cacheCallTimes++]
          });
        else {
          var f = l.get(h);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : l.set(h, {
            map: /* @__PURE__ */ new Map()
          }), l = l.get(h).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(e, t) {
      var n = e.get(t[0]);
      if (t.length === 1) {
        var r;
        return n.map ? e.set(t[0], {
          map: n.map
        }) : e.delete(t[0]), (r = n.value) === null || r === void 0 ? void 0 : r[0];
      }
      var s = this.deleteByPath(n.map, t.slice(1));
      return (!n.map || n.map.size === 0) && !n.value && e.delete(t[0]), s;
    }
  }, {
    key: "delete",
    value: function(e) {
      if (this.has(e))
        return this.keys = this.keys.filter(function(t) {
          return !g(t, e);
        }), this.deleteByPath(this.cache, e);
    }
  }]), a;
}();
o(d, "MAX_CACHE_SIZE", 20);
o(d, "MAX_CACHE_OFFSET", 5);
export {
  d as default,
  g as sameDerivativeOption
};
