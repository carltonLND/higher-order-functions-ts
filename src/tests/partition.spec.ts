import partition from "../partition";

test("returns tuple of 2 arrays, first with passing elements, second with failing", () => {
  const testFn = (num: number) => {
    if (num <= 3) {
      return true;
    }

    return false;
  };
  const testArr = [2, 5, 6, 3];
  expect(partition(testArr, testFn)).toEqual([
    [2, 3],
    [5, 6],
  ]);
});

test("returns empty second array if all tests pass", () => {
  const testFn = (num: number) => {
    if (num < 10) {
      return true;
    }

    return false;
  };
  const testArr = [2, 5, 6, 3];
  expect(partition(testArr, testFn)).toEqual([[2, 5, 6, 3], []]);
});

test("returns empty first array if all tests fail", () => {
  const testFn = (num: number) => {
    if (num < 0) {
      return true;
    }

    return false;
  };
  const testArr = [2, 5, 6, 3];
  expect(partition(testArr, testFn)).toEqual([[], [2, 5, 6, 3]]);
});
