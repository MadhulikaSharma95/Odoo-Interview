function requiredProductParts(productName, parts) {
  const q = [];
  q.push(productName);

  const requiredPartsMap = {};

  while (q.length > 0) {
    const curr = q.pop();
    if (parts[curr].length == 0) {
      if (requiredPartsMap[curr]) {
        requiredPartsMap[curr] += 1;
      } else {
        requiredPartsMap[curr] = 1;
      }
    } else {
      parts[curr].forEach((part) => q.push(part));
    }
  }
  return requiredPartsMap;
}

module.exports = requiredProductParts;
