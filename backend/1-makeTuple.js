function makeTuple(array_list) {
  (oddSum = 0), (evenProd = 1);
  for (let i = 0; i < array_list.length; i++) {
    if (array_list[i] % 2 == 0) {
      evenProd = evenProd * array_list[i];
    } else {
      oddSum += array_list[i];
    }
  }
  return [oddSum, evenProd];
}

module.exports = makeTuple;
