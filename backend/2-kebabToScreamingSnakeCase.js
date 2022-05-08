function kebabToScreamingSnakeCase(str) {
  let output = "";
  for (const char of str) {
    if (char == "-") {
      output += "_";
    } else {
      output += char.toUpperCase();
    }
  }
  return output;
}

module.exports = kebabToScreamingSnakeCase;
