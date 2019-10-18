const {
  makePoint,
  getX,
  getY,
  toString,
  getDistance,
  getQuadrant
} = require("./pointAbstraction");

describe("pointAbstraction", () => {
  test("getX", () => {
    const point = makePoint(1, 3);
    const x = getX(point);
    expect(x).toBe(1);
  });
  test("getY", () => {
    const point = makePoint(1, 3);
    const y = getY(point);
    expect(y).toBe(3);
  });
  test("toString", () => {
    const point = makePoint(1, 3);
    expect(toString(point)).toBe("[1, 3]");
  });
  test("getDistance", () => {
    const point1 = makePoint(4, 4);
    const point2 = makePoint(16, 9);
    const distance = getDistance(point1, point2);
    expect(distance).toBe(13);
  });
  test("getQuadrant 1", () => {
    const point = makePoint(4, 4);
    expect(+getQuadrant(point)).toBe(1);
  });
  test("getQuadrant 2", () => {
    const point = makePoint(-4, 4);
    expect(+getQuadrant(point)).toBe(2);
  });
  test("getQuadrant 3", () => {
    const point = makePoint(-4, -4);
    expect(+getQuadrant(point)).toBe(3);
  });
  test("getQuadrant 4", () => {
    const point = makePoint(4, -4);
    expect(+getQuadrant(point)).toBe(4);
  });
  test("getQuadrant null", () => {
    const point = makePoint(0, 4);
    expect(getQuadrant(point)).toBe(null);
  });
});
