import every from "../every";

test("returns true if every element passes the test fn", () => {
  const testFn = (num: number) => {
    if (num > 0) {
      return true;
    }

    return false;
  };
  const testArr = [2, 5, 6, 3];
  expect(every(testArr, testFn)).toBe(true);
});

test("returns false if no element passes the test fn", () => {
  const testFn = (num: number) => {
    if (num < 0) {
      return true;
    }

    return false;
  };
  const testArr = [2, 5, 6, 3];
  expect(every(testArr, testFn)).toBe(false);
});
