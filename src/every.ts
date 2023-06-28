function every<T>(
  inputArray: T[],
  predicateFn: (element: T) => boolean
): boolean {
  for (const element of inputArray) {
    if (!predicateFn(element)) {
      return false;
    }
  }

  return true;
}

export default every;
