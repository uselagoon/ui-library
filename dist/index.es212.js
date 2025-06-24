import n from "./index.es156.js";
import h from "./index.es155.js";
var m = "add", y = "keep", p = "remove", K = "removed";
function E(a) {
  var s;
  return a && h(a) === "object" && "key" in a ? s = a : s = {
    key: a
  }, n(n({}, s), {}, {
    key: String(s.key)
  });
}
function g() {
  var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return a.map(E);
}
function b() {
  var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = [], f = 0, v = s.length, d = g(a), i = g(s);
  d.forEach(function(r) {
    for (var t = !1, u = f; u < v; u += 1) {
      var o = i[u];
      if (o.key === r.key) {
        f < u && (e = e.concat(i.slice(f, u).map(function(l) {
          return n(n({}, l), {}, {
            status: m
          });
        })), f = u), e.push(n(n({}, o), {}, {
          status: y
        })), f += 1, t = !0;
        break;
      }
    }
    t || e.push(n(n({}, r), {}, {
      status: p
    }));
  }), f < v && (e = e.concat(i.slice(f).map(function(r) {
    return n(n({}, r), {}, {
      status: m
    });
  })));
  var c = {};
  e.forEach(function(r) {
    var t = r.key;
    c[t] = (c[t] || 0) + 1;
  });
  var k = Object.keys(c).filter(function(r) {
    return c[r] > 1;
  });
  return k.forEach(function(r) {
    e = e.filter(function(t) {
      var u = t.key, o = t.status;
      return u !== r || o !== p;
    }), e.forEach(function(t) {
      t.key === r && (t.status = y);
    });
  }), e;
}
export {
  m as STATUS_ADD,
  y as STATUS_KEEP,
  p as STATUS_REMOVE,
  K as STATUS_REMOVED,
  b as diffKeys,
  g as parseKeys,
  E as wrapKeyToObject
};
