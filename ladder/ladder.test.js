const ladder = require("./ladder");

test("ladder", () => {
  expect(
    ladder
      .up()
      .up()
      .showStep()
  ).toBe(3);
});
