function zipWith<T, U, R>(
  combinerFn: (element1: T, element2: U) => R,
  arr1: T[],
  arr2: U[]
): R[] {
  const outputArray: R[] = [];

  const maxIterations = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < maxIterations; i++) {
    outputArray.push(combinerFn(arr1[i], arr2[i]));
  }

  return outputArray;
}

export default zipWith;
