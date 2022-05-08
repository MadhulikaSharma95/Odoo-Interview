const kebabToScreamingSnakeCase = require("./2-kebabToScreamingSnakeCase");

// "electricity-is-really-just-organized-lightning" => "ELECTRICITY_IS_REALLY_JUST_ORGANIZED_LIGHTNING"
test("Convert Kebab to Screaming Test Case 1", () => {
  const result = kebabToScreamingSnakeCase(
    "electricity-is-really-just-organized-lightning"
  );
  const expectedSolution = "ELECTRICITY_IS_REALLY_JUST_ORGANIZED_LIGHTNING";
  expect(JSON.stringify(result)).toBe(JSON.stringify(expectedSolution));
});

// "wow-you-can-dance" => "WOW_YOU_CAN_DANCE"
test("Convert Kebab to Screaming Test Case 2", () => {
  const result = kebabToScreamingSnakeCase("wow-you-can-dance");
  const expectedSolution = "WOW_YOU_CAN_DANCE";
  expect(JSON.stringify(result)).toBe(JSON.stringify(expectedSolution));
});
