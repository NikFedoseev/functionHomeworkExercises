const makePoint = (x, y) => [x, y];

const getX = ([x]) => x;

const getY = ([, y]) => y;

const toString = vector => JSON.stringify(vector);

const getDistance = ([x1, y1], [x2, y2]) => {
  return Math.sqrt(x2 - x1) + Math.sqrt(y2 - y1);
};

const getQuadrant = vector => vector.map();

module.exports = {
  makePoint,
  getX,
  getY,
  toString,
  getDistance,
  getQuadrant
};
