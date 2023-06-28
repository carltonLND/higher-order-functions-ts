function find<T>(
  inputArray: T[],
  predicateFn: (element: T) => boolean
): T | undefined {
  for (const element of inputArray) {
    if (predicateFn(element)) {
      return element;
    }
  }

  return;
}

export default find;
