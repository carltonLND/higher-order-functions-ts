import filter from "../filter";

test("returns array of all nums in inputArray that are over 3", () => {
  const testFn = (num: number) => {
    if (num > 3) {
      return true;
    }

    return false;
  };
  const testArr = [2, 5, 6, 3];
  expect(filter(testArr, testFn)).toEqual([5, 6]);
});

test("returns array of words beginning with capital C", () => {
  const testFn = (word: string) => {
    if (word[0] === "C") {
      return true;
    }

    return false;
  };
  const testArr = ["Bob", "Carlton", "John", "clark", "Callum"];
  expect(filter(testArr, testFn)).toEqual(["Carlton", "Callum"]);
});

test("returns empty array if cannot pass any checks", () => {
  const testFn = (num: number) => {
    if (num > 999) {
      return true;
    }

    return false;
  };
  const testArr = [2, 5, 6, 3];
  expect(filter(testArr, testFn)).toEqual([]);
});
