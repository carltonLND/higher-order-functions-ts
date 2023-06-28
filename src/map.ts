function map<T, U>(inputArray: T[], predicateFn: (element: T) => U): U[] {
  const outputArr = [];
  for (const element of inputArray) {
    outputArr.push(predicateFn(element));
  }

  return outputArr;
}

export default map;
