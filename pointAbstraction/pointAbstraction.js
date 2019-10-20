const makePoint = (x, y) => {
  return {x: x,y: y};
};

const getX = (point) => {
  return point.x
};

const getY = (point) => {
  return point.y
};

const toString = (point) => {
  return `[${point.x}, ${point.y}]`
};

const getDistance = (point1,point2) => {
  return Math.sqrt(Math.pow((point2.x - point1.x), 2) + Math.pow((point2.y - point1.y), 2));
};

const getQuadrant = (point) => {
  if (point.x > 0 && point.y > 0) return 1
  if (point.x < 0 && point.y > 0) return 2
  if (point.x < 0 && point.y < 0) return 3
  if (point.x > 0 && point.y < 0) return 4
  return null;
};

module.exports = {
  makePoint,
  getX,
  getY,
  toString,
  getDistance,
  getQuadrant
};
