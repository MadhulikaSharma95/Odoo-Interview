const requiredProductParts = require("./4-requiredProductPartsRecursive");

const parts = {
  A: ["B", "B", "C"],
  B: [],
  C: ["D", "E", "F"],
  D: [],
  E: ["B", "D"],
  F: [],
};

test("Required Product Parts Valid Recusive", () => {
  const result = requiredProductParts("A", parts);
  const expectedSolution = { B: 3, D: 2, F: 1 };
  expect(JSON.stringify(result)).toBe(JSON.stringify(expectedSolution));
});

test("Required Product Parts Recursive Individual Test", () => {
  const result = requiredProductParts("F", parts);
  const expectedSolution = { F: 1 };
  expect(JSON.stringify(result)).toBe(JSON.stringify(expectedSolution));
});
