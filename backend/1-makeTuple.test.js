const makeTuple = require("./1-makeTuple");
test("Make Tuple for odd Even", () => {
  const result = makeTuple([4, 2, 5, 7, 3, 6, 9]);
  const expectedSolution = [24, 48];
  expect(JSON.stringify(result)).toBe(JSON.stringify(expectedSolution));
});
