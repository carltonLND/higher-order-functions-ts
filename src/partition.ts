function partition<T>(
  inputArray: T[],
  predicateFn: (element: T) => boolean
): [T[], T[]] {
  const passArray: T[] = [];
  const failArray: T[] = [];

  for (const element of inputArray) {
    if (predicateFn(element)) {
      passArray.push(element);
    } else {
      failArray.push(element);
    }
  }

  return [passArray, failArray];
}

export default partition;
