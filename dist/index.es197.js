function c() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (c = function() {
    return !!t;
  })();
}
export {
  c as default
};
