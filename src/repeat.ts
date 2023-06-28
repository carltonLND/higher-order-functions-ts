function repeat(numTimes: number, callbackFn: () => any): void {
  if (numTimes < 1) {
    return;
  }

  for (let i = 0; i < numTimes; i++) {
    callbackFn();
  }
}

export default repeat;
