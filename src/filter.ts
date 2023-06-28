function filter<T>(inputArray: T[], predicateFn: (element: T) => boolean): T[] {
  const outputArray: T[] = [];

  for (const element of inputArray) {
    if (predicateFn(element)) {
      outputArray.push(element);
    }
  }

  return outputArray;
}

export default filter;
