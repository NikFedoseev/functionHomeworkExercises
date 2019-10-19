const makePoint = (x, y) => ({ x, y });

const getX = ({ x }) => x;

const getY = ({ y }) => y;

const toString = ({ x, y }) => `[${x}, ${y}]`;
// sqrt( (x2 - x1)^2 + (y2 - y1)^2 )
const getDistance = (dote1, dote2) =>
  Math.sqrt((dote2.x - dote1.x) ** 2 + (dote2.y - dote1.y) ** 2);

const getQuadrant = ({ x, y }) =>
  x !== 0 && y !== 0
    ? x > 0 && y > 0
      ? 1
      : x < 0 && y > 0
      ? 2
      : x < 0 && y < 0
      ? 3
      : 4
    : null;

module.exports = {
  makePoint,
  getX,
  getY,
  toString,
  getDistance,
  getQuadrant
};
