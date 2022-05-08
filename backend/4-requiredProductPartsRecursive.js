function requiredProductPartsRecursive(productName, parts) {
  const requiredPartsMap = {};
  function helper(partName) {
    if (parts[partName].length == 0) {
      if (requiredPartsMap[partName]) {
        requiredPartsMap[partName] += 1;
      } else {
        requiredPartsMap[partName] = 1;
      }
    } else {
      parts[partName].forEach((part) => helper(part));
    }
    // if (parts[partName].length == 0) {
    //   requiredPartsMap[partName] += 1;
    // } else {
    //   parts[partName].forEach((part) => helper(part));
    // }
  }
  helper(productName);
  console.log(requiredPartsMap);
  return requiredPartsMap;
}

module.exports = requiredProductPartsRecursive;
