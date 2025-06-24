function z(s) {
  const {
    sizeUnit: e,
    sizeStep: i
  } = s;
  return {
    sizeXXL: e * (i + 8),
    // 48
    sizeXL: e * (i + 4),
    // 32
    sizeLG: e * (i + 2),
    // 24
    sizeMD: e * (i + 1),
    // 20
    sizeMS: e * i,
    // 16
    size: e * i,
    // 16
    sizeSM: e * (i - 1),
    // 12
    sizeXS: e * (i - 2),
    // 8
    sizeXXS: e * (i - 3)
    // 4
  };
}
export {
  z as default
};
