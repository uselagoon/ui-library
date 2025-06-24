var f = {
  shiftX: 64,
  adjustY: 1
}, o = {
  adjustX: 1,
  shiftY: !0
}, t = [0, 0], e = {
  left: {
    points: ["cr", "cl"],
    overflow: o,
    offset: [-4, 0],
    targetOffset: t
  },
  right: {
    points: ["cl", "cr"],
    overflow: o,
    offset: [4, 0],
    targetOffset: t
  },
  top: {
    points: ["bc", "tc"],
    overflow: f,
    offset: [0, -4],
    targetOffset: t
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: f,
    offset: [0, 4],
    targetOffset: t
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: f,
    offset: [0, -4],
    targetOffset: t
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: o,
    offset: [-4, 0],
    targetOffset: t
  },
  topRight: {
    points: ["br", "tr"],
    overflow: f,
    offset: [0, -4],
    targetOffset: t
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: o,
    offset: [4, 0],
    targetOffset: t
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: f,
    offset: [0, 4],
    targetOffset: t
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: o,
    offset: [4, 0],
    targetOffset: t
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: f,
    offset: [0, 4],
    targetOffset: t
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: o,
    offset: [-4, 0],
    targetOffset: t
  }
};
export {
  e as default,
  e as placements
};
