const makePoint = (x,y) => ({x,y});

const getX = (point) =>  point.x;

const getY = (point) => point.y;

const toString = (point) => `[${point.x}, ${point.y}]`;

const getDistance = (point1,point2) => {
  return Math.sqrt( (point2.x - point1.x)**2 + (point2.y - point1.y)**2 )
};

const getQuadrant = (point) => {
  if(!point.x || !point.y) return null
  const quadrant = ['1,1','0,1','0,0','1,0']
  const curPos = `${point.x>0? 1:0},${point.y>0? 1:0}`
  return quadrant.indexOf(curPos) + 1
};

module.exports = {
  makePoint,
  getX,
  getY,
  toString,
  getDistance,
  getQuadrant
};
