function e() {
  return e = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var a = arguments[n];
      for (var r in a) ({}).hasOwnProperty.call(a, r) && (t[r] = a[r]);
    }
    return t;
  }, e.apply(null, arguments);
}
export {
  e as default
};
