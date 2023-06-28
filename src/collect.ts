function collect<T>(numTimes: number, callbackFn: () => T): T[] {
  if (numTimes < 1) {
    return [];
  }

  const outputArray: T[] = [];

  for (let i = 0; i < numTimes; i++) {
    outputArray.push(callbackFn());
  }

  return outputArray;
}

export default collect;
