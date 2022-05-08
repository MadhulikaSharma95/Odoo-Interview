const requiredProductParts = require("./3-requiredProductParts");

const parts = {
  A: ["B", "B", "C"],
  B: [],
  C: ["D", "E", "F"],
  D: [],
  E: ["B", "D"],
  F: [],
};

test("Required Product Parts Valid", () => {
  const result = requiredProductParts("A", parts);
  const expectedSolution = { F: 1, D: 2, B: 3 };
  expect(JSON.stringify(result)).toBe(JSON.stringify(expectedSolution));
});

test("Required Product Parts Recursive Individual Test", () => {
  const result = requiredProductParts("F", parts);
  const expectedSolution = { F: 1 };
  expect(JSON.stringify(result)).toBe(JSON.stringify(expectedSolution));
});
